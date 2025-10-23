import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { Wrapper, Container } from "@/components";
import { Zap, Globe, Clock, CheckCircle, Shield, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Delivery Policy - Collabuzz",
  description: "Learn about Collabuzz's instant digital service delivery. All services are delivered electronically with immediate access.",
};

const deliveryFeatures = [
  {
    icon: Zap,
    title: "Instant Access",
    description: "Services activated immediately upon payment confirmation"
  },
  {
    icon: Globe,
    title: "Digital Only",
    description: "100% cloud-based platform with no physical shipping required"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access your services anytime, anywhere with internet connection"
  },
  {
    icon: CheckCircle,
    title: "Email Confirmation",
    description: "Receive detailed activation confirmation and access instructions"
  }
];

const deliverySteps = [
  {
    step: "01",
    title: "Complete Purchase",
    description: "Choose your plan and complete secure payment processing"
  },
  {
    step: "02", 
    title: "Instant Activation",
    description: "Services automatically activated within minutes of payment"
  },
  {
    step: "03",
    title: "Email Confirmation",
    description: "Receive confirmation email with plan details and access info"
  },
  {
    step: "04",
    title: "Start Using",
    description: "Login to your dashboard and access all premium features"
  }
];

export default function ShippingPage() {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      {/* Hero Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <Container>
          <div className="flex flex-col items-center justify-center py-20 w-full">
            <div className="max-w-md mx-auto text-start md:text-center">
              <SectionBadge title="Digital Delivery" />
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
                📦 Instant Digital
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Service Access
                </span>
              </h1>
              <p className="text-muted-foreground mt-6 text-center px-4 md:px-0">
                100% digital SaaS platform with immediate activation. No physical shipping, no waiting periods.
              </p>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Delivery Features */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="How It Works" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              ⚡ Digital Delivery Features
            </h2>
            <p className="text-muted-foreground mt-6">
              Experience the benefits of instant digital service activation
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8 max-w-6xl">
              {deliveryFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={index} 
                    className="flex flex-col items-start p-6 border border-border rounded-lg bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Policy Details & Support combined */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <Container>
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <div className="mb-12">
              <SectionBadge title="Details" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                📋 Digital Delivery Policy
              </h2>
              <p className="text-muted-foreground mb-8">
                Complete information about our instant digital service delivery
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <div className="p-6 border border-border rounded-lg bg-background/50 backdrop-blur-sm text-left">
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-primary" />
                  100% Digital Platform
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Collabuzz delivers all services electronically through our online platform. No physical goods are shipped, eliminating delivery costs and wait times.
                </p>
              </div>

              <div className="p-6 border border-border rounded-lg bg-background/50 backdrop-blur-sm text-left">
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-primary" />
                  Instant Activation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Services activate immediately upon payment confirmation. Access your dashboard, campaigns, and analytics within minutes of purchase.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="mailto:contact@collabuzz.com">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Support
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/getting-started">View Setup Guide</Link>
              </Button>
            </div>
            
            <div className="mt-8 p-6 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Effective Date:</strong> June 1, 2025 | 
                <strong> Response Time:</strong> Within 24 hours | 
                <strong> Email:</strong> contact@collabuzz.com
              </p>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
}