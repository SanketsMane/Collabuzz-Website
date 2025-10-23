import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { Wrapper, Container } from "@/components";
import { Handshake, Star, Target, Zap, Users, Award, ArrowRight, Check, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Brand Partnerships - Collabuzz",
  description: "Partner with Collabuzz for brand sponsorships and collaborative marketing opportunities. Reach authentic audiences through strategic partnerships.",
};
const sponsorshipTiers = [
    {
      name: "Event Partner",
      price: "₹2,50,000",
      duration: "Per Event",
      features: [
        "Logo placement at events",
        "Speaking opportunities",
        "Networking sessions",
        "Social media promotion",
        "Event recordings access"
      ],
      popular: false
    },
    {
      name: "Community Partner",
      price: "₹8,00,000",
      duration: "Quarterly",
      features: [
        "Platform co-branding",
        "Exclusive creator access",
        "Custom campaign support",
        "Analytics and insights",
        "Priority customer support",
        "Marketing collaboration"
      ],
      popular: true
    },
    {
      name: "Strategic Partner",
      price: "₹25,00,000",
      duration: "Annually",
      features: [
        "Full platform integration",
        "White-label solutions",
        "Dedicated account team",
        "Custom feature development",
        "Executive advisory access",
        "Exclusive market insights",
        "Joint PR opportunities"
      ],
      popular: false
    }
  ];

const benefits = [
    {
      icon: Target,
      title: "Targeted Reach",
      description: "Access to India's most engaged creator community with authentic audience connections."
    },
    {
      icon: Users,
      title: "Quality Audience",
      description: "Connect with high-intent marketers and creators actively seeking partnership opportunities."
    },
    {
      icon: Zap,
      title: "Brand Amplification",
      description: "Leverage our platform's reach to amplify your message across multiple touchpoints."
    },
    {
      icon: Award,
      title: "Thought Leadership",
      description: "Establish your brand as an industry leader through strategic content and speaking opportunities."
    }
  ];

const pastPartners = [
    { name: "TechCorp India", category: "Technology", logo: "/images/partners/techcorp.jpg" },
    { name: "Fashion Forward", category: "Fashion", logo: "/images/partners/fashion.jpg" },
    { name: "Digital Marketing Pro", category: "Marketing", logo: "/images/partners/marketing.jpg" },
    { name: "Creator Tools", category: "Software", logo: "/images/partners/tools.jpg" }
];

export default function SponsoringPage() {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      {/* Hero Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <Container>
          <div className="flex flex-col items-center justify-center py-20 w-full">
            <div className="max-w-md mx-auto text-start md:text-center">
              <SectionBadge title="Brand Partnerships" />
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
                🤝 Partner with
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Collabuzz
                </span>
              </h1>
              <p className="text-muted-foreground mt-6 text-center px-4 md:px-0">
                Join leading brands sponsoring India's premier influencer marketing platform and reach authentic creator communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" asChild>
                  <Link href="#partnership-tiers">
                    <Handshake className="w-5 h-5 mr-2" />
                    Explore Partnership
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#contact">Schedule Call</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Benefits Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Benefits" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              🎯 Why Partner with Us?
            </h2>
            <p className="text-muted-foreground mt-6">
              Connect with India's most engaged creator economy and establish your brand leadership
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8 max-w-6xl">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div 
                    key={index} 
                    className="flex flex-col items-center text-center p-6 border border-border rounded-lg bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-center mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Partnership Tiers */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/5 to-background" />
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Opportunities" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              💼 Partnership Tiers
            </h2>
            <p className="text-muted-foreground mt-6">
              Choose the partnership level that aligns with your marketing goals
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 max-w-6xl">
              {sponsorshipTiers.map((tier, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col p-8 border rounded-lg transition-all duration-300 ${
                    tier.popular 
                      ? 'border-primary bg-gradient-to-b from-primary/10 to-secondary/10 transform scale-105' 
                      : 'border-border bg-background/50 backdrop-blur-sm hover:border-primary/30'
                  }`}
                >
                  {tier.popular && (
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">
                      {tier.name}
                    </h3>
                    <div className="text-4xl font-bold mb-2 text-primary">
                      {tier.price}
                    </div>
                    <p className="text-muted-foreground">
                      {tier.duration}
                    </p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-5 h-5 mr-3 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={tier.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Contact Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <Container>
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <div className="mb-12">
              <SectionBadge title="Get Started" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Partner with Us? 🚀
              </h2>
              <p className="text-muted-foreground mb-8">
                Get in touch with our partnerships team to discuss how we can help amplify your brand's reach and impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-primary">50,000+</div>
                <p className="text-muted-foreground">Active Creators</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-primary">2M+</div>
                <p className="text-muted-foreground">Monthly Platform Visits</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-primary">15M+</div>
                <p className="text-muted-foreground">Combined Audience Reach</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full max-w-2xl">
              <div className="p-6 border border-border rounded-lg bg-background/50 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-foreground mb-4">Partnership Inquiries</h4>
                <p className="text-muted-foreground mb-4">partnerships@collabuzz.com</p>
                <p className="text-muted-foreground">+91-8088081498</p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-background/50 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-foreground mb-4">Media & PR</h4>
                <p className="text-muted-foreground mb-4">media@collabuzz.com</p>
                <p className="text-muted-foreground">Response within 24 hours</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="mailto:partnerships@collabuzz.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Start Partnership
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="tel:+918088081498">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Call
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
}