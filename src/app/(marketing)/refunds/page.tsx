import { Metadata } from "next";
import { RefreshCw, Shield, CreditCard, AlertCircle, CheckCircle, Clock, FileText, Phone } from "lucide-react";
import { Wrapper, Container } from "@/components";
import SectionBadge from "@/components/ui/section-badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy - Collabuzz",
  description: "Understand Collabuzz's cancellation and refund policy for our SaaS platform and digital services.",
};

export default function RefundsPage() {
  const policyHighlights = [
    {
      icon: Shield,
      title: "Service Nature",
      description: "Digital SaaS platform with non-tangible services",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: RefreshCw,
      title: "Flexible Cancellation",
      description: "Cancel subscriptions anytime through your dashboard",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CreditCard,
      title: "Transparent Billing",
      description: "Clear pricing with no hidden fees or charges",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Refund requests processed within 7-10 business days",
      color: "from-orange-500 to-red-500"
    }
  ];

  const refundScenarios = [
    {
      icon: CheckCircle,
      title: "Technical Issues",
      description: "Platform malfunction preventing service access",
      eligible: true
    },
    {
      icon: CheckCircle,
      title: "Billing Errors",
      description: "Incorrect charges or duplicate payments",
      eligible: true
    },
    {
      icon: AlertCircle,
      title: "Service Delivered",
      description: "Digital services already accessed or activated",
      eligible: false
    },
    {
      icon: AlertCircle,
      title: "Change of Mind",
      description: "Personal preference changes after service use",
      eligible: false
    }
  ];

  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      {/* Hero Section */}
      <Wrapper>
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[100vh]" />
        
        <Container>
          <div className="flex flex-col items-center justify-center py-20 h-full">
            <SectionBadge title="Policy" />
            
            <div className="flex flex-col items-center mt-6 md:mt-8 max-w-4xl w-11/12 md:w-full px-4 md:px-0">
              <h1 className="hero-heading font-semibold text-center optimal-text-wrap"
                <span className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl">💰</span> <span className="bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">Cancellation & Refund Policy</span> <span className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl">🔄</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-foreground/80 mt-4 md:mt-6 text-center max-w-3xl px-2 md:px-0">
                Transparent policies for cancellations and refunds! 📋 We believe in fair and clear processes that protect both our users and our platform. Your satisfaction is our priority! ✨
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-6 md:mt-8 w-full">
                <Button asChild size="lg" className="w-full sm:w-auto min-w-[140px]">
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="w-full sm:w-auto min-w-[140px]">
                  <Link href="#policy-details">View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Policy Highlights */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
        <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-purple-600 rounded-full blur-[10rem] -z-10"></div>
        
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Key Points" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              🔍 Policy Highlights
            </h2>
            <p className="text-muted-foreground mt-6">
              Essential information about our refund process
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8">
              {policyHighlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="group flex flex-col items-center text-center p-6 border border-border rounded-lg bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105">
                    <div className={`flex items-center justify-center mb-6 w-16 h-16 rounded-xl bg-gradient-to-r ${highlight.color} shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground text-center">
                      {highlight.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Refund Scenarios */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Eligibility" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              ✅ Refund Scenarios
            </h2>
            <p className="text-muted-foreground mt-6">
              When refunds are and aren't applicable
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 max-w-4xl">
              {refundScenarios.map((scenario, index) => {
                const IconComponent = scenario.icon;
                return (
                  <div key={index} className={`flex flex-col items-start p-6 border rounded-lg transition-all duration-300 ${scenario.eligible ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5'}`}>
                    <div className={`flex items-center justify-center mb-4 w-12 h-12 rounded-full ${scenario.eligible ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                      <IconComponent className={`w-6 h-6 ${scenario.eligible ? 'text-green-500' : 'text-red-500'}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {scenario.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {scenario.description}
                    </p>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${scenario.eligible ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}`}>
                      {scenario.eligible ? 'Refund Eligible' : 'Not Eligible'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Policy Details */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Full Policy" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              📋 Complete Terms
            </h2>
            <p className="text-muted-foreground mt-6">
              Detailed cancellation and refund information
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-primary" />
                    Service Nature
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Collabuzz operates as a SaaS platform offering digital influencer marketing tools. Since we provide non-tangible, irrevocable digital services, refunds are generally not applicable once access has been granted.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                    <RefreshCw className="w-6 h-6 mr-3 text-primary" />
                    Cancellation Process
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Users may cancel subscriptions anytime through their dashboard. Cancellation prevents future renewals but doesn't automatically trigger refunds for prior payments.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-primary" />
                    Refund Process
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Contact our support team at <Link href="mailto:contact@collabuzz.com" className="text-primary hover:underline">contact@collabuzz.com</Link> within 7 days of transaction. Refunds are processed within 7-10 business days after verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Contact Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions About Refunds? 💬
            </h2>
            <p className="text-muted-foreground mb-8">
              Our support team is here to help with any questions about cancellations or refunds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="mailto:contact@collabuzz.com">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Support
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Live Chat</Link>
              </Button>
            </div>
            <div className="mt-8 p-6 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Effective Date:</strong> June 1, 2025 | 
                <strong> Phone:</strong> +91-8088081498 | 
                <strong> Email:</strong> contact@collabuzz.com
              </p>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
}