import { Metadata } from "next";
import { 
  Search, 
  Users, 
  BarChart3, 
  Lightbulb, 
  MessageSquare, 
  DollarSign,
  Target,
  Handshake,
  TrendingUp,
  Sparkles,
  Edit,
  Gift
} from "lucide-react";

import { Wrapper, Container } from "@/components";
import SectionBadge from "@/components/ui/section-badge";

export const metadata: Metadata = {
  title: "Our Services - Collabuzz",
  description: "Discover our comprehensive solutions for brands and influencers. AI-powered matching, seamless collaboration tools, and real-time analytics to maximize your influencer marketing success.",
  openGraph: {
    title: "Our Services - Collabuzz",
    description: "Comprehensive influencer marketing solutions for brands and creators",
    type: "website",
  },
};

const BrandServices = () => {
  const services = [
    {
      icon: Target,
      title: "Discover",
      subtitle: "Find Perfect Matches",
      description: "Our AI analyzes millions of data points to identify creators who align perfectly with your brand values and target audience.",
      color: "text-blue-600"
    },
    {
      icon: Handshake,
      title: "Collaborate",
      subtitle: "Seamless Partnerships",
      description: "Streamlined communication tools, contract management, and content approval workflows make collaboration effortless.",
      color: "text-green-600"
    },
    {
      icon: BarChart3,
      title: "Measure",
      subtitle: "Track Success",
      description: "Real-time analytics and performance insights help you optimize campaigns and maximize your return on investment.",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="py-20">
      <Container>
        <div className="text-center mb-16">
          <SectionBadge title="🚀 What Solutions We Provide" />
          <h2 className="text-3xl md:text-4xl font-bold mt-6">For Brands</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <h4 className="text-lg font-medium text-muted-foreground mb-4">{service.subtitle}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

const InfluencerServices = () => {
  const services = [
    {
      icon: Search,
      title: "Discover",
      subtitle: "Campaigns",
      description: "Instantly browse and filter exciting brand campaigns. Find opportunities that perfectly align with your niche and passion – then hit apply with ease!",
      color: "text-orange-600"
    },
    {
      icon: Sparkles,
      title: "Pitch & Partner",
      subtitle: "Up",
      description: "Craft compelling proposals for campaigns that excite you. Get expert support and be awarded by our team to kickstart amazing collaborations!",
      color: "text-pink-600"
    },
    {
      icon: Gift,
      title: "Create & Get",
      subtitle: "Rewarded",
      description: "Bring your unique creativity to life for top brands. Complete your campaign content and get paid promptly for your awesome influence!",
      color: "text-green-600"
    }
  ];

  return (
    <div className="py-20 bg-muted/30">
      <Container>
        <div className="text-center mb-16">
          <SectionBadge title="🚀 What Solutions We Provide" />
          <h2 className="text-3xl md:text-4xl font-bold mt-6">For Influencers</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <h4 className="text-lg font-medium text-muted-foreground mb-4">{service.subtitle}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

const CTASection = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of brands and influencers who trust Collabuzz for their marketing campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Start as Brand
            </button>
            <button className="px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium">
              Join as Influencer
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <div className="w-full relative">
      {/* Grid background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <Wrapper>
        <BrandServices />
        <InfluencerServices />
        <CTASection />
      </Wrapper>
    </div>
  );
}