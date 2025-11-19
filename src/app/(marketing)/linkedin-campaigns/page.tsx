import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { Wrapper, Container } from "@/components";
import { Linkedin, Target, Users, TrendingUp, Award, Zap, Play, Check, Phone, Mail, BarChart3 } from "lucide-react";

const campaignTypes = [
    {
      title: "Thought Leadership",
      description: "Position your brand as an industry expert through strategic content partnerships with LinkedIn influencers.",
      features: ["Industry expertise content", "Professional networking", "B2B audience targeting", "Executive positioning"],
      icon: Award
    },
    {
      title: "Product Launches",
      description: "Generate buzz and professional credibility for new products or services through LinkedIn creator networks.",
      features: ["Product demonstrations", "Professional testimonials", "B2B lead generation", "Launch event coverage"],
      icon: Zap
    },
    {
      title: "Recruitment Campaigns",
      description: "Attract top talent by showcasing company culture and opportunities through authentic employee advocacy.",
      features: ["Company culture content", "Employee testimonials", "Talent attraction", "Employer branding"],
      icon: Users
    },
    {
      title: "Lead Generation",
      description: "Drive qualified B2B leads through targeted content and strategic partnerships with industry influencers.",
      features: ["Lead magnets", "Professional networking", "Industry insights", "Conversion optimization"],
      icon: Target
    }
  ];

  const process = [
    {
      step: "1",
      title: "Strategy Development",
      description: "We analyze your goals, target audience, and industry to create a customized LinkedIn campaign strategy."
    },
    {
      step: "2",
      title: "Creator Matching",
      description: "Our AI-powered platform identifies LinkedIn creators who align with your brand values and audience demographics."
    },
    {
      step: "3",
      title: "Content Planning",
      description: "Collaborative content calendar development ensuring authentic messaging that resonates with professional audiences."
    },
    {
      step: "4",
      title: "Campaign Execution",
      description: "Launch and monitor campaigns with real-time tracking, optimization, and performance reporting."
    },
    {
      step: "5",
      title: "Performance Analysis",
      description: "Comprehensive reporting on reach, engagement, lead generation, and ROI measurement for continuous improvement."
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "₹1,50,000",
      duration: "Per Campaign",
      features: [
        "5-10 LinkedIn creators",
        "30-day campaign duration",
        "Content strategy & planning",
        "Performance analytics",
        "Dedicated account manager"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "₹4,50,000",
      duration: "Per Campaign",
      features: [
        "15-25 LinkedIn creators",
        "60-day campaign duration",
        "Advanced targeting options",
        "Lead generation tracking",
        "Custom content creation",
        "Detailed ROI reporting"
      ],
      popular: true
    },
    {
      name: "Strategic",
      price: "₹12,00,000",
      duration: "Quarterly",
      features: [
        "30+ LinkedIn creators",
        "Ongoing campaign management",
        "Executive thought leadership",
        "Multi-format content (video, articles, posts)",
        "Advanced analytics & insights",
        "Dedicated strategy team",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const benefits = [
    { metric: "3x", description: "Higher engagement than traditional LinkedIn ads" },
    { metric: "5x", description: "Better lead quality through creator partnerships" },
    { metric: "70%", description: "Increase in brand awareness among professionals" },
    { metric: "2.5x", description: "More cost-effective than direct LinkedIn advertising" }
];

export const metadata: Metadata = {
  title: "LinkedIn Influencer Campaigns - Collabuzz",
  description: "Create powerful LinkedIn influencer campaigns with Collabuzz. Connect with professional creators and B2B audiences across India.",
};

export default function LinkedInCampaignsPage() {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      {/* Hero Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <Container>
          <div className="flex flex-col items-center justify-center py-20 w-full">
            <div className="max-w-md mx-auto text-start md:text-center">
              <SectionBadge title="LinkedIn Campaigns" />
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
                💼 Professional
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  LinkedIn Marketing
                </span>
              </h1>
              <p className="text-muted-foreground mt-6 text-center px-4 md:px-0 leading-relaxed optimal-text-wrap max-w-3xl mx-auto">
                Connect with India's professional audience through authentic LinkedIn creator partnerships that drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" asChild>
                  <Link href="#pricing">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Launch Campaign
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#benefits">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Benefits Stats */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Proven Results" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0 optimal-text-wrap"
              📊 Why LinkedIn Marketing Works
            </h2>
            <p className="text-muted-foreground mt-6">
              Data-driven results that speak for themselves
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-8 max-w-6xl">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-6 border border-border rounded-lg bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-primary mb-2">{benefit.metric}</div>
                  <p className="text-muted-foreground font-medium text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* CTA Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <Container>
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Launch Your LinkedIn Campaign? 🚀
            </h2>
            <p className="text-muted-foreground mb-8">
              Connect with India's top LinkedIn creators and drive meaningful business results through authentic professional partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="mailto:campaigns@collabuzz.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="tel:+918088081498">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Link>
              </Button>
            </div>
            <div className="mt-8 p-6 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Campaign Specialist:</strong> campaigns@collabuzz.com | 
                <strong> Phone:</strong> +91-8088081498 | 
                <strong> Response Time:</strong> Within 4 hours
              </p>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Results Section */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Why LinkedIn Influencer <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Marketing Works</span>
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">Proven results that speak for themselves</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-2">{benefit.metric}</div>
                <p className="text-gray-600 font-medium">{benefit.description}</p>
              </div>
            ))}
          </div>
          </div>
        </Container>
      </Wrapper>

      {/* Campaign Types */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              LinkedIn Campaign <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Types</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-12">
              Choose the campaign type that best aligns with your business objectives and target audience.
            </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {campaignTypes.map((campaign, index) => {
            const IconComponent = campaign.icon;
            return (
              <div key={index} className="bg-muted/20 rounded-xl p-8 border hover:bg-muted/30 transition-colors">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{campaign.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{campaign.description}</p>
                <ul className="space-y-2">
                  {campaign.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
          </div>
        </Container>
      </Wrapper>

      {/* Process */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Our Campaign <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-12">
              From strategy to execution, we handle every aspect of your LinkedIn influencer campaign.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Wrapper>

      {/* Pricing */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Campaign <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-12">
              Flexible pricing options designed to fit your budget and campaign scope.
            </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
              plan.popular 
                ? 'bg-gradient-to-b from-purple-600 to-purple-700 text-white transform scale-105' 
                : 'bg-white'
            }`}>
              {plan.popular && (
                <div className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-full text-sm font-bold text-center mb-6">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <div className={`text-4xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-primary'}`}>
                  {plan.price}
                </div>
                <p className={`${plan.popular ? 'text-primary/80' : 'text-muted-foreground'}`}>
                  {plan.duration}
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 ${plan.popular ? 'text-primary/80' : 'text-primary'}`} />
                    <span className={plan.popular ? 'text-white' : ''}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.popular
                  ? 'bg-white text-purple-600 hover:bg-gray-100'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}>
                Start Campaign
              </button>
            </div>
          ))}
        </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
}