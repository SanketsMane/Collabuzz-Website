import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { Wrapper, Container } from "@/components";
import { Shield, Eye, Lock, Database, Users, AlertTriangle, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Collabuzz",
  description: "Collabuzz privacy policy and data protection practices. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  const dataTypes = [
    {
      type: "Personal Information",
      description: "Name, email, phone number, and profile details",
      icon: Users,
      usage: "Account creation and communication"
    },
    {
      type: "Usage Data",
      description: "Platform interactions, clicks, and feature usage",
      icon: Eye,
      usage: "Platform improvement and analytics"
    },
    {
      type: "Financial Information",
      description: "Payment details and transaction history",
      icon: Lock,
      usage: "Payment processing and fraud prevention"
    },
    {
      type: "Content Data",
      description: "Posts, campaigns, and collaboration content",
      icon: Database,
      usage: "Platform functionality and matching"
    }
  ];

  const rights = [
    "Access your personal data",
    "Correct inaccurate information",
    "Delete your account and data",
    "Export your data",
    "Restrict data processing",
    "Object to data usage",
    "Withdraw consent",
    "File complaints with authorities"
  ];

  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      {/* Hero Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <Container>
          <div className="flex flex-col items-center justify-center py-20 w-full">
            <div className="max-w-md mx-auto text-start md:text-center">
              <SectionBadge title="Privacy Policy" />
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
                🛡️ Privacy
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-muted-foreground mt-6 text-center px-4 md:px-0 leading-relaxed optimal-text-wrap max-w-3xl mx-auto"
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
              </p>
              <div className="flex items-center justify-center mt-4 text-primary">
                <AlertTriangle className="w-5 h-5 mr-2" />
                <span className="text-sm">Last updated: October 2025</span>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Overview */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Overview" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              🔒 Privacy Overview
            </h2>
            <p className="text-muted-foreground mt-6">
              At Collabuzz, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data when you use our influencer marketing platform.
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
              <div className="text-center p-6 md:p-8 border border-border rounded-lg bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Secure Collection</h3>
                <p className="text-muted-foreground text-sm">We only collect data necessary for platform functionality</p>
              </div>
              <div className="text-center p-6 md:p-8 border border-border rounded-lg bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Protected Storage</h3>
                <p className="text-muted-foreground text-sm">Your data is encrypted and stored securely</p>
              </div>
              <div className="text-center p-6 md:p-8 border border-border rounded-lg bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">User Control</h3>
                <p className="text-muted-foreground text-sm">You have full control over your personal data</p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Data Collection */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/5 to-background" />
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Data Collection" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              📊 Data We Collect
            </h2>
            <p className="text-muted-foreground mt-6">
              We collect different types of information to provide and improve our services.
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {dataTypes.map((data, index) => {
                const IconComponent = data.icon;
                return (
                  <div key={index} className="p-6 md:p-8 border border-border rounded-lg bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mr-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{data.type}</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">{data.description}</p>
                    <div className="text-sm text-primary font-medium">
                      Purpose: {data.usage}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* How We Use Data */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Data Usage" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              ⚙️ How We Use Your Data
            </h2>
            <p className="text-muted-foreground mt-6">
              Transparent information about how we use your data to provide and improve our services
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="space-y-8 w-full max-w-4xl">
              <div className="p-6 md:p-8 border border-border rounded-lg bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-4">Platform Operations</h3>
                <p className="text-muted-foreground mb-4">We use your information to:</p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Create and manage your account</li>
                  <li>• Facilitate connections between brands and influencers</li>
                  <li>• Process payments and transactions</li>
                  <li>• Provide customer support</li>
                  <li>• Send important platform notifications</li>
                </ul>
              </div>
              
              <div className="p-6 md:p-8 border border-border rounded-lg bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-4">Platform Improvement</h3>
                <p className="text-muted-foreground mb-4">We analyze usage data to:</p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Improve platform features and functionality</li>
                  <li>• Enhance user experience</li>
                  <li>• Develop new services</li>
                  <li>• Prevent fraud and abuse</li>
                  <li>• Ensure platform security</li>
                </ul>
              </div>
              
              <div className="p-6 md:p-8 border border-border rounded-lg bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-4">Marketing & Communication</h3>
                <p className="text-muted-foreground mb-4">With your consent, we may:</p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Send promotional emails about new features</li>
                  <li>• Share industry insights and tips</li>
                  <li>• Invite you to webinars and events</li>
                  <li>• Showcase success stories (with permission)</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Your Rights */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/5 to-background" />
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Your Rights" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              ⚖️ Your Privacy Rights
            </h2>
            <p className="text-muted-foreground mt-6">
              You have complete control over your personal data. Here are your rights:
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mb-12">
              {rights.map((right, index) => (
                <div key={index} className="flex items-center p-4 md:p-6 border border-border rounded-lg bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">{right}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center max-w-2xl">
              <p className="text-muted-foreground mb-6">
                To exercise any of these rights, contact our privacy team at privacy@collabuzz.com
              </p>
              <Button size="lg" asChild>
                <Link href="mailto:privacy@collabuzz.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Privacy Team
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Data Security */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Security" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              🔐 Data Security
            </h2>
            <p className="text-muted-foreground mt-6">
              We implement industry-standard security measures to protect your personal information
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="p-6 md:p-8 border border-border rounded-lg bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mx-auto mb-4">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Encryption</h3>
                  <p className="text-muted-foreground text-sm">All data is encrypted in transit and at rest</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Access Control</h3>
                  <p className="text-muted-foreground text-sm">Strict access controls and authentication</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mx-auto mb-4">
                    <Database className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Regular Audits</h3>
                  <p className="text-muted-foreground text-sm">Regular security audits and monitoring</p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-center">
                We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Contact */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <Container>
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions About Privacy? 🔒
            </h2>
            <p className="text-muted-foreground mb-8">
              Our privacy team is here to help answer any questions about how we handle your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="mailto:privacy@collabuzz.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Privacy Team
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/privacy/data-request">Data Request Form</Link>
              </Button>
            </div>
            <div className="mt-8 p-6 bg-card/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Privacy Team:</strong> privacy@collabuzz.com | 
                <strong> Phone:</strong> +91-8088081498 | 
                <strong> Response Time:</strong> Within 24 hours
              </p>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
}