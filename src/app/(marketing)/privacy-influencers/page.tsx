import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { Wrapper, Container } from "@/components";
import { Shield, Users, Eye, Lock, Database, AlertTriangle, Star, UserCheck, Settings, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy for Influencers - Collabuzz",
  description: "Special privacy protections for influencers on Collabuzz. Learn about creator-specific data handling and privacy controls.",
};

const creatorProtections = [
    {
      title: "Profile Privacy Controls",
      description: "Choose what information is visible to brands and the public",
      icon: Eye,
      features: ["Hide contact details", "Private portfolio sections", "Selective data sharing"]
    },
    {
      title: "Audience Data Protection",
      description: "Your follower information is kept confidential and secure",
      icon: Users,
      features: ["Anonymized demographics", "Aggregate insights only", "No individual follower data shared"]
    },
    {
      title: "Content Rights Management",
      description: "Maintain control over how your content is used and displayed",
      icon: Database,
      features: ["Usage rights control", "Content removal options", "Attribution requirements"]
    },
    {
      title: "Financial Privacy",
      description: "Your earnings and rates are kept completely confidential",
      icon: Lock,
      features: ["Private rate cards", "Confidential earnings", "Secure payment processing"]
    }
  ];

const dataCategories = [
    {
      category: "Public Profile",
      data: "Name, bio, social links, portfolio samples",
      visibility: "Visible to brands",
      control: "Full control"
    },
    {
      category: "Performance Metrics",
      data: "Engagement rates, reach, demographics",
      visibility: "Aggregated only",
      control: "Opt-out available"
    },
    {
      category: "Communication",
      data: "Messages, proposals, discussions",
      visibility: "Private only",
      control: "Full history control"
    },
    {
      category: "Financial Info",
      data: "Payment details, earnings, tax data",
      visibility: "Completely private",
      control: "Full protection"
    }
  ];

const specialRights = [
  "Right to pseudonymous operation",
  "Content takedown requests",
  "Audience data anonymization", 
  "Performance metric privacy",
  "Campaign confidentiality",
  "Rate information protection",
  "Selective brand visibility",
  "Content usage restrictions"
];

export default function PrivacyInfluencersPage() {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      {/* Hero Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <Container>
          <div className="flex flex-col items-center justify-center py-20 w-full">
            <div className="max-w-md mx-auto text-start md:text-center">
              <SectionBadge title="Influencer Privacy" />
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
                🛡️ Creator Privacy
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  First Platform
                </span>
              </h1>
              <p className="text-muted-foreground mt-6 text-center px-4 md:px-0">
                Special privacy protections designed specifically for influencers and content creators.
              </p>
              <div className="flex items-center justify-center mt-4 text-primary">
                <Star className="w-5 h-5 mr-2" />
                <span className="text-sm">Enhanced Creator Controls</span>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Creator Promise */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Our Promise" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              🤝 Creator Privacy Commitment
            </h2>
            <p className="text-muted-foreground mt-6">
              Your personal brand, audience data, and creative content are your most valuable assets
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 border border-primary/20 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
                <div className="flex items-start mb-6">
                  <Shield className="w-8 h-8 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Creator Promise</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We will never share your personal audience data, individual follower information, or private performance metrics without your explicit consent. Your creative content rights are always protected and you maintain full control over your brand presence.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button size="lg" asChild>
                    <Link href="#privacy-controls">
                      <Settings className="w-5 h-5 mr-2" />
                      Privacy Dashboard
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#creator-rights">View Creator Rights</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Creator Protections */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Creator Privacy Protections</h2>
              <p className="text-xl text-gray-600">
                Comprehensive privacy controls designed specifically for influencers and content creators.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {creatorProtections.map((protection, index) => {
                const IconComponent = protection.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-2xl p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-purple-100 p-4 rounded-full mr-4">
                        <IconComponent className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{protection.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{protection.description}</p>
                    <div className="space-y-2">
                      {protection.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Data Minimization */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">What Data We Collect & Share</h2>
            <p className="text-xl text-gray-600">
              Transparent breakdown of creator data collection with full control over sharing preferences.
            </p>
          </div>
          
          <div className="space-y-6">
            {dataCategories.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.category}</h3>
                    <p className="text-gray-600 text-sm">{item.data}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Visibility</div>
                    <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item.visibility}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Your Control</div>
                    <span className="text-green-600 font-medium text-sm">{item.control}</span>
                  </div>
                  <div className="text-center">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                      Manage Settings
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Creator Rights */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Special Creator Rights</h2>
              <p className="text-xl text-gray-600">
                Additional privacy rights exclusively for influencers and content creators.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {specialRights.map((right, index) => (
                <div key={index} className="flex items-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{right}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-purple-50 border border-purple-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Creator Support Team</h3>
              <p className="text-purple-800 mb-6">
                Our dedicated creator support team specializes in privacy concerns and creator-specific issues. They understand the unique challenges influencers face and can provide personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Contact Creator Support
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors">
                  Privacy Settings Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Creator Privacy Questions? 🎨
            </h2>
            <p className="text-muted-foreground mb-8">
              Our creator privacy specialists are here to help with any questions about your data protection and privacy controls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="mailto:creators@collabuzz.com">
                  <Phone className="w-5 h-5 mr-2" />
                  Creator Privacy Team
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/dashboard/privacy">Privacy Settings</Link>
              </Button>
            </div>
            <div className="mt-8 p-6 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Creator Hotline:</strong> +91-8088081498 | 
                <strong> Privacy Team:</strong> creators@collabuzz.com | 
                <strong> Response Time:</strong> Within 2 hours
              </p>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
}