import { Metadata } from "next";
import { Play, Users, Search, MessageCircle, BookOpen, Zap, ArrowRight, Target, TrendingUp, Sparkles } from "lucide-react";
import { Wrapper, Container } from "@/components";
import SectionBadge from "@/components/ui/section-badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Getting Started - Collabuzz",
  description: "Get started with Collabuzz platform. Step-by-step guide for brands and creators to launch successful influencer marketing campaigns.",
};

export default function GettingStartedPage() {
  const steps = [
    {
      step: "01",
      title: "Create Your Account",
      description: "Sign up and complete your profile with all essential details to get started on your influencer marketing journey.",
      icon: Users,
      estimated: "5 min",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02", 
      title: "Define Your Goals",
      description: "Set clear objectives, target audience, budget, and success metrics for maximum campaign effectiveness.",
      icon: Target,
      estimated: "10 min",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Discover Creators",
      description: "Use our AI-powered search to find the perfect creators who align with your brand values and audience.",
      icon: Search,
      estimated: "15 min",
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Launch Campaign",
      description: "Connect with creators, negotiate terms, and launch your first successful influencer marketing campaign.",
      icon: TrendingUp,
      estimated: "30 min",
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Matching",
      description: "Smart algorithms find the perfect creator-brand partnerships"
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get started in minutes with our streamlined onboarding process"
    },
    {
      icon: MessageCircle,
      title: "24/7 Support",
      description: "Expert support team ready to help you succeed at every step"
    }
  ];

  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      {/* Hero Section */}
      <Wrapper>
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[100vh]" />
        
        <Container>
          <div className="flex flex-col items-center justify-center py-20 h-full">
            <SectionBadge title="Getting Started" />
            
            <div className="flex flex-col items-center mt-6 md:mt-8 max-w-4xl w-11/12 md:w-full px-4 md:px-0">
              <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl leading-tight md:!leading-snug font-semibold text-center">
                <span className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl">🚀</span> <span className="bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">Launch Your First Campaign in Minutes</span> <span className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl">⚡</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-foreground/80 mt-4 md:mt-6 text-center max-w-3xl px-2 md:px-0">
                Ready to dive into influencer marketing? 🌟 Follow our step-by-step guide to launch your first successful campaign! Whether you're a brand or creator, we'll get you started in no time. 💪
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-6 md:mt-8 w-full">
                <Button asChild size="lg" className="w-full sm:w-auto min-w-[140px]">
                  <Link href="/brand">Start as Brand</Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="w-full sm:w-auto min-w-[140px]">
                  <Link href="/influencer">Start as Creator</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Steps Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
        <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-purple-600 rounded-full blur-[10rem] -z-10"></div>
        
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Simple Process" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              🎯 4 Easy Steps to Success
            </h2>
            <p className="text-muted-foreground mt-6">
              From setup to launch - everything you need to know
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 max-w-6xl">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="group flex flex-col items-start p-8 border border-border rounded-lg bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-between w-full mb-6">
                      <div className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} shadow-lg group-hover:shadow-xl transition-shadow`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary/30">
                          {step.step}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {step.estimated}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-start leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Features Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Why Choose Us" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              ✨ Built for Your Success
            </h2>
            <p className="text-muted-foreground mt-6">
              Everything you need to succeed in influencer marketing
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
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

      {/* CTA Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started? 🎉
            </h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of brands and creators who trust Collabuzz for their influencer marketing success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
}