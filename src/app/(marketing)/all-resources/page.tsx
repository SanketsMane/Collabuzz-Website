import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { Wrapper, Container } from "@/components";
import { BookOpen, Download, Play, Users, TrendingUp, Award, FileText, Video, Headphones, Mail, ExternalLink } from "lucide-react";

const resourceCategories = [
    {
      title: "Guides & Ebooks",
      icon: BookOpen,
      count: "25+",
      description: "Comprehensive guides covering every aspect of influencer marketing",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Templates & Tools",
      icon: FileText,
      count: "15+",
      description: "Ready-to-use templates for campaigns, contracts, and reporting",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Video Tutorials",
      icon: Video,
      count: "50+",
      description: "Step-by-step video guides for platform mastery",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Webinars & Podcasts",
      icon: Headphones,
      count: "30+",
      description: "Expert insights and industry discussions",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const featuredResources = [
    {
      title: "The Complete Influencer Marketing Guide for Indian Brands",
      type: "Ebook",
      description: "120-page comprehensive guide covering strategy, execution, and measurement for the Indian market.",
      downloadCount: "5,000+",
      category: "Strategy",
      featured: true
    },
    {
      title: "Campaign Brief Template",
      type: "Template",
      description: "Professional template for creating detailed campaign briefs that deliver results.",
      downloadCount: "3,500+",
      category: "Templates",
      featured: false
    },
    {
      title: "ROI Measurement Framework",
      type: "Guide",
      description: "Step-by-step framework for measuring and optimizing campaign performance.",
      downloadCount: "4,200+",
      category: "Analytics",
      featured: false
    },
    {
      title: "Creator Onboarding Checklist",
      type: "Checklist",
      description: "Complete checklist for seamless creator partnership setup.",
      downloadCount: "2,800+",
      category: "Management",
      featured: false
    }
  ];

  const guides = [
    {
      title: "Micro-Influencer Marketing Mastery",
      description: "Learn how to identify, approach, and work with micro-influencers for maximum impact.",
      pages: "45 pages",
      category: "Strategy"
    },
    {
      title: "Content Collaboration Best Practices",
      description: "Guidelines for creating authentic content that resonates with audiences.",
      pages: "35 pages",
      category: "Content"
    },
    {
      title: "Influencer Contract Templates",
      description: "Legal templates and guidelines for secure creator partnerships.",
      pages: "25 pages",
      category: "Legal"
    },
    {
      title: "Campaign Performance Analytics",
      description: "Advanced metrics and KPIs for measuring campaign success.",
      pages: "40 pages",
      category: "Analytics"
    },
    {
      title: "Crisis Management for Influencer Campaigns",
      description: "Strategies for handling and preventing campaign-related issues.",
      pages: "30 pages",
      category: "Management"
    },
    {
      title: "Regional Marketing with Local Creators",
      description: "Tap into regional markets with location-specific influencer strategies.",
      pages: "50 pages",
      category: "Regional"
    }
];

const tools = [
  "Campaign Planning Template",
  "Influencer Outreach Email Templates",
  "Content Calendar Template",
  "Performance Tracking Spreadsheet",
  "Budget Planning Calculator",
  "ROI Measurement Dashboard",
  "Creator Evaluation Rubric",
  "Campaign Brief Generator"
];

export const metadata: Metadata = {
  title: "Resource Library - Collabuzz",
  description: "Comprehensive collection of influencer marketing resources including guides, templates, case studies, and tools for brands and creators.",
};

export default function AllResourcesPage() {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      {/* Hero Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <Container>
          <div className="flex flex-col items-center justify-center py-20 w-full">
            <div className="max-w-md mx-auto text-start md:text-center">
              <SectionBadge title="Resource Library" />
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
                📚 Complete Resource
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Library
                </span>
              </h1>
              <p className="text-muted-foreground mt-6 text-center px-4 md:px-0">
                Everything you need to master influencer marketing - guides, templates, tools, and expert insights all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" asChild>
                  <Link href="#resources">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Browse Resources
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#newsletter">Subscribe for Updates</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Resource Categories */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Categories" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              🗂️ Resource Categories
            </h2>
            <p className="text-muted-foreground mt-6">
              Explore our comprehensive collection designed to help you succeed
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8 max-w-6xl">
              {resourceCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div 
                    key={index} 
                    className="flex flex-col items-center text-center p-8 border border-border rounded-lg bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-center mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                    <div className="text-2xl font-bold text-primary mb-2">{category.count}</div>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Featured Resources */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/5 to-background" />
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Featured" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              ⭐ Popular Resources
            </h2>
            <p className="text-muted-foreground mt-6">
              Our most downloaded and comprehensive resources
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-6 max-w-6xl">
              {featuredResources.map((resource, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col p-6 border rounded-lg transition-all duration-300 ${
                    resource.featured 
                      ? 'border-primary bg-gradient-to-b from-primary/10 to-secondary/10 transform scale-105' 
                      : 'border-border bg-background/50 backdrop-blur-sm hover:border-primary/30'
                  }`}
                >
                  {resource.featured && (
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold text-center mb-4">
                      Featured
                    </div>
                  )}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-secondary/20 text-secondary">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">
                    {resource.title}
                  </h3>
                  <p className="text-sm mb-4 text-muted-foreground flex-grow">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{resource.downloadCount} downloads</span>
                    <span>{resource.category}</span>
                  </div>
                  <Button className="w-full" variant={resource.featured ? "default" : "outline"}>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Newsletter */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <Container>
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get New Resources First 📬
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive the latest guides, templates, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Join 10,000+ marketers and creators already subscribed
            </p>
            <div className="mt-8 p-6 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Weekly Updates:</strong> New resources, industry insights, case studies | 
                <strong> Zero Spam:</strong> Unsubscribe anytime | 
                <strong> Free Access:</strong> All resources included
              </p>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Resource Categories */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Resource <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Categories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-12">
            Explore our comprehensive collection of resources designed to help you succeed in influencer marketing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resourceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${category.color}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">{category.count}</div>
                <p className="text-gray-600">{category.description}</p>
              </div>
            );
          })}
          </div>
        </Container>
      </Wrapper>

      {/* Featured Resources */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Resources</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-12">
              Our most popular and comprehensive resources for influencer marketing success.
            </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                resource.featured ? 'bg-gradient-to-br from-purple-600 to-purple-700 text-white' : 'bg-white'
              }`}>
                {resource.featured && (
                  <div className="bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-bold text-center mb-4">
                    Featured
                  </div>
                )}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    resource.featured ? 'bg-purple-500 text-white' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {resource.type}
                  </span>
                </div>
                <h3 className={`text-lg font-bold mb-3 ${resource.featured ? 'text-white' : 'text-foreground'}`}>
                  {resource.title}
                </h3>
                <p className={`text-sm mb-4 ${resource.featured ? 'text-purple-100' : 'text-gray-600'}`}>
                  {resource.description}
                </p>
                <div className={`flex items-center justify-between text-sm ${resource.featured ? 'text-purple-200' : 'text-gray-500'}`}>
                  <span>{resource.downloadCount} downloads</span>
                  <span>{resource.category}</span>
                </div>
                <button className={`w-full mt-4 py-2 rounded-lg font-semibold transition-colors ${
                  resource.featured
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}>
                  <Download className="w-4 h-4 inline mr-2" />
                  Download
                </button>
              </div>
            ))}
          </div>
          </div>
        </Container>
      </Wrapper>

      {/* Guides Library */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Complete Guide <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Library</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-12">
              In-depth guides covering every aspect of influencer marketing strategy and execution.
            </p>
        
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {guides.map((guide, index) => (
                <div key={index} className="bg-muted/20 rounded-xl p-6 border hover:bg-muted/30 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {guide.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                  <p className="text-muted-foreground mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{guide.pages}</span>
                    <Button size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Tools & Templates */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Tools & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Templates</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-12">
              Ready-to-use tools and templates to streamline your influencer marketing workflow.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {tools.map((tool, index) => (
                <div key={index} className="bg-muted/20 rounded-xl p-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-primary mr-3" />
                      <span className="font-medium">{tool}</span>
                    </div>
                    <Download className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
}