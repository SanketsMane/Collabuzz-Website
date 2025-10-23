import { Metadata } from "next";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Collabuzz",
  description: "Stay updated with the latest influencer marketing trends, tips, and strategies. Expert insights for brands and creators.",
};

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Influencer Marketing in India: Trends for 2025",
    excerpt: "Discover the emerging trends shaping India's influencer marketing landscape and how brands can leverage authentic partnerships for maximum impact.",
    author: "Priya Sharma",
    date: "October 20, 2025",
    readTime: "8 min read",
    category: "Trends",
    image: "/images/blog/featured.jpg"
  };

  const blogPosts = [
    {
      title: "How to Choose the Right Micro-Influencers for Your Brand",
      excerpt: "Learn the key factors to consider when selecting micro-influencers that align with your brand values and target audience.",
      author: "Arjun Singh",
      date: "October 18, 2025",
      readTime: "6 min read",
      category: "Strategy",
      image: "/images/blog/micro-influencers.jpg"
    },
    {
      title: "ROI Measurement in Influencer Campaigns: A Complete Guide",
      excerpt: "Master the art of measuring campaign success with proven metrics and analytics tools for maximum return on investment.",
      author: "Kavya Patel",
      date: "October 15, 2025",
      readTime: "10 min read",
      category: "Analytics",
      image: "/images/blog/roi-measurement.jpg"
    },
    {
      title: "Building Long-term Creator Partnerships in the Indian Market",
      excerpt: "Strategies for developing sustainable relationships with content creators that drive consistent brand growth.",
      author: "Rohan Gupta",
      date: "October 12, 2025",
      readTime: "7 min read",
      category: "Partnerships",
      image: "/images/blog/partnerships.jpg"
    },
    {
      title: "The Rise of Regional Language Content in Influencer Marketing",
      excerpt: "Explore how regional content creators are driving engagement and brand awareness across diverse Indian markets.",
      author: "Sneha Kapoor",
      date: "October 10, 2025",
      readTime: "5 min read",
      category: "Trends",
      image: "/images/blog/regional-content.jpg"
    },
    {
      title: "Authentic Storytelling: The Key to Successful Brand Collaborations",
      excerpt: "Learn how to create compelling narratives that resonate with audiences and drive meaningful brand engagement.",
      author: "Vikram Joshi",
      date: "October 8, 2025",
      readTime: "9 min read",
      category: "Content",
      image: "/images/blog/storytelling.jpg"
    },
    {
      title: "Instagram vs YouTube: Choosing the Right Platform for Your Campaign",
      excerpt: "Compare platform strengths and audience behaviors to make informed decisions for your influencer marketing strategy.",
      author: "Ananya Iyer",
      date: "October 5, 2025",
      readTime: "6 min read",
      category: "Platforms",
      image: "/images/blog/platforms.jpg"
    }
  ];

  const categories = ["All", "Trends", "Strategy", "Analytics", "Partnerships", "Content", "Platforms"];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Influencer Marketing Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert insights, industry trends, and actionable strategies for successful influencer marketing in India.
          </p>
        </div>

        {/* Featured Post */}
        <div className="bg-card rounded-2xl shadow-lg overflow-hidden mb-16 border border-border">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="h-64 md:h-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <div className="text-primary-foreground text-center p-8">
                  <Tag className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Featured Article</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <User className="w-4 h-4 mr-2" />
                <span className="mr-4">{featuredPost.author}</span>
                <Calendar className="w-4 h-4 mr-2" />
                <span className="mr-4">{featuredPost.date}</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <Link href="/blog/featured" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
                Read Full Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                category === "All"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-primary/10 hover:text-primary"
              } border border-border`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-border">
              <div className="h-48 bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center">
                <div className="text-primary-foreground text-center">
                  <Tag className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-semibold">{post.category}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-3">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link href={`/blog/${index + 1}`} className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-primary-foreground text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl text-primary-foreground/80 mb-8">Get the latest influencer marketing insights delivered to your inbox</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            />
            <button className="bg-background text-primary px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}