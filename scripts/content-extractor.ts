// Content extraction utility for migrating Collabuzz data to Astra
import * as fs from 'fs';
import * as path from 'path';

interface CollabuzzPage {
  page_url: string;
  title: string;
  meta_description: string;
  meta_keywords: string;
  headings: Array<{
    tag: string;
    text: string;
    selector: string;
  }>;
  text_content: string;
  images: Array<{
    url: string;
    alt: string;
    local_path: string;
    content_type: string;
  }>;
  all_links: Array<{
    href: string;
    anchor: string;
    internal: boolean;
  }>;
}

interface ProcessedContent {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  headings: Array<{
    tag: string;
    text: string;
  }>;
  content: string;
  images: Array<{
    src: string;
    alt: string;
    originalUrl: string;
  }>;
  internalLinks: Array<{
    href: string;
    text: string;
  }>;
}

export class CollabuzzContentExtractor {
  private collabuzzDataPath: string;
  
  constructor(collabuzzDataPath: string) {
    this.collabuzzDataPath = collabuzzDataPath;
  }

  // Extract clean content from a Collabuzz page JSON file
  extractPageContent(jsonFilePath: string): ProcessedContent | null {
    try {
      const rawData = fs.readFileSync(jsonFilePath, 'utf-8');
      const pageData: CollabuzzPage = JSON.parse(rawData);
      
      return {
        slug: this.generateSlug(pageData.page_url),
        title: this.cleanTitle(pageData.title),
        description: pageData.meta_description || '',
        keywords: pageData.meta_keywords || '',
        headings: this.filterContentHeadings(pageData.headings),
        content: this.cleanTextContent(pageData.text_content),
        images: this.processImages(pageData.images),
        internalLinks: this.processInternalLinks(pageData.all_links)
      };
    } catch (error) {
      console.error(`Error processing ${jsonFilePath}:`, error);
      return null;
    }
  }

  // Generate slug from URL
  private generateSlug(url: string): string {
    const filename = path.basename(url, '.html');
    if (filename === 'index') return 'home';
    return filename.toLowerCase().replace(/[^a-z0-9-]/g, '-');
  }

  // Clean up title by removing platform suffix
  private cleanTitle(title: string): string {
    return title
      .replace(/ - Influencer Marketing Platform/g, '')
      .replace(/^Collabuzz\s*/g, '')
      .trim();
  }

  // Filter out navigation and boilerplate headings
  private filterContentHeadings(headings: Array<{tag: string, text: string, selector: string}>): Array<{tag: string, text: string}> {
    const boilerplateTexts = [
      'Collabuzz',
      'Home',
      'About',
      'Contact',
      'Service',
      'FAQ',
      'Privacy & Policy',
      'Terms & Conditions',
      'Shipping Policy',
      'Refund and cancelation policy',
      'Download our app now!',
      'Contact Info',
      'Quick Links',
      'Legal',
      'Follow Us'
    ];

    return headings
      .filter(h => !boilerplateTexts.some(bt => h.text.includes(bt)))
      .filter(h => h.text.length > 2) // Remove very short headings
      .map(h => ({
        tag: h.tag,
        text: h.text.trim()
      }));
  }

  // Clean text content by removing navigation and footer content
  private cleanTextContent(text: string): string {
    if (!text) return '';
    
    // Split into paragraphs and filter out boilerplate
    const paragraphs = text.split(/\n\s*\n/).map(p => p.trim()).filter(p => p.length > 0);
    
    const boilerplatePatterns = [
      /^(Home|About|Contact|Service|FAQ|Privacy|Terms)/,
      /^Download our app now/,
      /^Contact Info/,
      /^Quick Links/,
      /^Follow Us/,
      /^Copyright.*Collabuzz/,
      /^All rights reserved/,
      /WhatsApp|Telegram|Instagram|Facebook|Twitter/,
      /^\+\d+[\s\d-]+$/, // Phone numbers
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/ // Email addresses
    ];

    const cleanParagraphs = paragraphs.filter(p => {
      return !boilerplatePatterns.some(pattern => pattern.test(p.trim()));
    });

    return cleanParagraphs.join('\n\n');
  }

  // Process images and convert paths to Astra public paths
  private processImages(images: Array<{url: string, alt: string, local_path: string, content_type: string}>): Array<{src: string, alt: string, originalUrl: string}> {
    return images.map(img => ({
      src: `/collabuzz/${img.local_path}`,
      alt: img.alt || 'Collabuzz Image',
      originalUrl: img.url
    }));
  }

  // Process internal links for navigation
  private processInternalLinks(links: Array<{href: string, anchor: string, internal: boolean}>): Array<{href: string, text: string}> {
    return links
      .filter(link => link.internal && link.anchor && link.anchor.length > 1)
      .filter(link => !['Home', 'About', 'Contact', 'Service', 'FAQ'].includes(link.anchor))
      .map(link => ({
        href: this.convertLinkToAstraRoute(link.href),
        text: link.anchor
      }));
  }

  // Convert Collabuzz URLs to Astra routes
  private convertLinkToAstraRoute(href: string): string {
    const routeMap: { [key: string]: string } = {
      'index.html': '/',
      'about.html': '/about',
      'service.html': '/services',
      'contact.html': '/contact',
      'faq.html': '/faq',
      'testimonial.html': '/testimonials',
      'project.html': '/projects',
      'privacy.html': '/privacy',
      'terms.html': '/terms',
      'shipping.html': '/shipping-policy',
      'refunds.html': '/refund-policy'
    };

    const filename = path.basename(href);
    return routeMap[filename] || href;
  }

  // Get all available pages
  getAllPages(): ProcessedContent[] {
    const pagesDir = path.join(this.collabuzzDataPath, 'pages');
    const jsonFiles = fs.readdirSync(pagesDir).filter((file: string) => file.endsWith('.json'));
    
    const processedPages: ProcessedContent[] = [];
    
    for (const jsonFile of jsonFiles) {
      const content = this.extractPageContent(path.join(pagesDir, jsonFile));
      if (content) {
        processedPages.push(content);
      }
    }
    
    return processedPages.sort((a, b) => {
      // Sort with home page first
      if (a.slug === 'home') return -1;
      if (b.slug === 'home') return 1;
      return a.slug.localeCompare(b.slug);
    });
  }

  // Generate content mapping report
  generateContentMap(): { [key: string]: any } {
    const pages = this.getAllPages();
    
    return {
      total_pages: pages.length,
      pages: pages.map(page => ({
        slug: page.slug,
        title: page.title,
        content_length: page.content.length,
        headings_count: page.headings.length,
        images_count: page.images.length,
        route: page.slug === 'home' ? '/' : `/${page.slug}`
      })),
      generated_at: new Date().toISOString()
    };
  }
}

// Example usage:
export function createContentExtractor() {
  return new CollabuzzContentExtractor('/Users/sanketmane/Collabuzz/collabuzz-crawler/collabuzz_full_export');
}