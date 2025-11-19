"use client";

import { Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { ArrowRight, Target, TrendingUp, Users, BarChart3, Shield, Zap, CheckCircle, Star, Building2, Globe, MessageSquare, Loader2, AlertCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Define types for the API response
interface SubscriptionPlan {
    _id: string;
    planName: string;
    planType: string;
    price: number;
    durationDays: number;
    features: string[];
    isActive: boolean;
}

interface APIResponse {
    success: boolean;
    data: SubscriptionPlan[];
}

const BrandPage = () => {
    const brandFeatures = [
        {
            icon: Target,
            title: "Precision Targeting",
            description: "Find influencers who perfectly match your brand values, audience demographics, and campaign goals."
        },
        {
            icon: Shield,
            title: "Verified Creators",
            description: "All influencers are thoroughly vetted and verified to ensure authentic engagement and professional conduct."
        },
        {
            icon: BarChart3,
            title: "Real-Time Analytics",
            description: "Track campaign performance with detailed metrics, ROI analysis, and engagement insights."
        },
        {
            icon: Zap,
            title: "Campaign Automation",
            description: "Streamline your influencer outreach with automated workflows and AI-powered matching."
        },
        {
            icon: Users,
            title: "Scale Your Reach",
            description: "Connect with micro and macro influencers across multiple platforms and niches."
        },
        {
            icon: Globe,
            title: "Global Network",
            description: "Access influencers worldwide to expand your brand's international presence."
        }
    ];

    const brandBenefits = [
        "Save 80% time on influencer discovery and outreach",
        "Increase campaign ROI by 340% with better targeting", 
        "Access to 200+ verified influencers across all niches",
        "Real-time campaign tracking and performance analytics",
        "Dedicated account manager for enterprise clients",
        "Fraud protection and authenticity verification"
    ];

    const [subscriptionPlans, setSubscriptionPlans] = useState<SubscriptionPlan[]>([]);
    const [isLoadingPlans, setIsLoadingPlans] = useState(true);
    const [plansError, setPlansError] = useState<string | null>(null);

    // Fetch subscription plans on component mount
    useEffect(() => {
        const fetchSubscriptionPlans = async () => {
            try {
                setIsLoadingPlans(true);
                setPlansError(null);
                
                // Add timeout to prevent hanging requests
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 5000);
                
                const response = await fetch("https://api.collabuzz.com/api/public/subscription/plans", {
                    signal: controller.signal,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                });
                
                clearTimeout(timeoutId);
                
                if (response.ok) {
                    const data: APIResponse = await response.json();
                    if (data.success && data.data && data.data.length > 0) {
                        setSubscriptionPlans(data.data);
                        console.log("Successfully loaded pricing plans from API");
                    } else {
                        console.log("API returned no plans, using fallback pricing");
                    }
                } else {
                    console.log("API request failed, using fallback pricing");
                }
            } catch (error) {
                console.log("Failed to fetch pricing plans, using fallback pricing:", error);
                // Don't set error state - just use fallback pricing
            } finally {
                setIsLoadingPlans(false);
            }
        };

        fetchSubscriptionPlans();
    }, []);

    // Fallback static pricing data
    const staticPricingPlans = [
        {
            name: "Starter",
            price: "Free",
            period: "",
            description: "Perfect for small businesses getting started",
            features: [
                "Up to 5 influencer contacts per month",
                "Basic analytics dashboard",
                "Email support",
                "Campaign templates",
                "Community access"
            ],
            highlighted: false
        },
        {
            name: "Growth",
            price: "₹9,999",
            period: "/ month",
            description: "Ideal for growing brands and agencies",
            features: [
                "Up to 50 influencer contacts per month",
                "Advanced analytics & reporting",
                "Priority email support",
                "Custom campaign workflows",
                "Bulk outreach tools",
                "Contract management"
            ],
            highlighted: false
        },
        {
            name: "Pro",
            price: "₹19,999",
            period: "/ month",
            description: "For established brands with high volume",
            features: [
                "Unlimited influencer contacts",
                "Real-time campaign tracking",
                "Phone & chat support",
                "White-label reporting",
                "API access",
                "Dedicated account manager",
                "Advanced filtering & search"
            ],
            highlighted: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            description: "Tailored solutions for large organizations",
            features: [
                "Custom integrations",
                "On-premise deployment option",
                "24/7 premium support",
                "Custom reporting dashboards",
                "Team collaboration tools",
                "Advanced security features",
                "Training & onboarding"
            ],
            highlighted: false
        }
    ];

    // Transform API data to match component expectations, fallback to static data
    const transformedPlans = subscriptionPlans.length > 0 
        ? subscriptionPlans.map((plan, index) => ({
            name: plan.planName,
            price: plan.price === 0 ? "Free" : `₹${plan.price}`,
            period: plan.price === 0 ? "" : `/ ${plan.durationDays} days`,
            description: `${plan.planType} plan for ${plan.durationDays} days`,
            features: plan.features,
            highlighted: index === 2 // Make the 3rd plan highlighted by default
        }))
        : staticPricingPlans;

    return (
        <div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
            {/* Grid background */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            
            {/* Hero Section */}
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center justify-center py-20 h-full">
                        <div className="flex flex-col items-center mt-6 md:mt-8 w-full max-w-4xl px-4 sm:px-6 md:px-8">
                            <SectionBadge title="For Brands" />
                            <h1 className="hero-heading font-semibold text-center optimal-text-wrap mt-6">
                                <span className="hero-heading">🎯</span> <span className="bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">Scale Your Brand with Authentic Influencer Partnerships</span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg text-foreground/80 mt-4 md:mt-6 text-center max-w-2xl">
                                Connect with verified influencers who align with your brand values. Drive authentic engagement, increase conversions, and build lasting customer relationships through strategic influencer collaborations.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-6 md:mt-8 w-full">
                                <Button asChild size="lg" className="w-full sm:w-auto min-w-[160px]">
                                    <Link href="https://brand.collabuzz.com" target="_blank" rel="noopener noreferrer">Start Your Campaign</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto min-w-[160px]">
                                    <Link href="/services">View Pricing</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Key Features */}
            <Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 relative">
                <Container>
                    <div className="max-w-md md:max-w-2xl mx-auto text-center px-4 md:px-0">
                        <SectionBadge title="Why Choose Collabuzz" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6">
                            Everything Your Brand Needs to Succeed
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground mt-4 md:mt-6">
                            From discovery to campaign execution, we provide all the tools and insights you need to run successful influencer marketing campaigns.
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-8 md:py-20 w-full px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 md:gap-8">
                            {brandFeatures.map((feature) => (
                                <div key={feature.title} className="flex flex-col items-start p-4 md:p-6 rounded-lg bg-card/20 border border-border/20">
                                    <div className="flex items-center justify-center mb-4">
                                        <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-medium text-foreground mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Benefits Section */}
            <Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 relative">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionBadge title="Brand Benefits" />
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-6 mb-6">
                                Why 1000+ Brands Trust Collabuzz
                            </h2>
                            <div className="space-y-4">
                                {brandBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <p className="text-foreground/80">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <Button asChild size="lg">
                                    <Link href="/contact">Get Started Today <ArrowRight className="w-4 h-4 ml-2" /></Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl p-8 border border-primary/10">
                                <div className="text-center">
                                    <Building2 className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Enterprise Ready</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Trusted by Fortune 500 companies and growing startups alike
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-primary">1000+</div>
                                            <div className="text-sm text-muted-foreground">Active Brands</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-primary">$50M+</div>
                                            <div className="text-sm text-muted-foreground">Campaign Value</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Pricing Section */}
            <Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 relative">
                <Container>
                    <div className="max-w-md md:max-w-2xl mx-auto text-center px-4 md:px-0 mb-12">
                        <SectionBadge title="Pricing" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6">
                            Choose Your Plan
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground mt-4 md:mt-6">
                            Flexible pricing that grows with your brand. No hidden fees, cancel anytime.
                        </p>
                    </div>
                    {/* Loading State */}
                    {isLoadingPlans && (
                        <div className="flex justify-center items-center py-12">
                            <Loader2 className="w-8 h-8 animate-spin text-primary" />
                            <span className="ml-2 text-muted-foreground">Loading pricing plans...</span>
                        </div>
                    )}

                    {/* Error State - Only show if no fallback plans available */}
                    {plansError && transformedPlans.length === 0 && (
                        <div className="flex justify-center items-center py-12">
                            <div className="text-center">
                                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                                <p className="text-muted-foreground mb-4">{plansError}</p>
                                <Button onClick={() => window.location.reload()} variant="outline">
                                    Try Again
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Pricing Plans - Always show if not loading */}
                    {!isLoadingPlans && transformedPlans.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {transformedPlans.map((tier) => (
                                <div key={tier.name} className={`relative rounded-2xl p-4 md:p-6 border ${tier.highlighted ? 'border-primary bg-primary/5' : 'border-border bg-card/20'}`}>
                                    {tier.highlighted && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}
                                    <div className="text-center mb-6">
                                        <h3 className="text-lg md:text-xl font-semibold mb-2">{tier.name}</h3>
                                        <div className="mb-3">
                                            <span className="text-2xl md:text-3xl font-bold">{tier.price}</span>
                                            <span className="text-muted-foreground text-sm">{tier.period}</span>
                                        </div>
                                        <p className="text-xs md:text-sm text-muted-foreground">{tier.description}</p>
                                    </div>
                                    <ul className="space-y-2 mb-6">
                                        {tier.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button asChild className={`w-full ${tier.highlighted ? '' : 'variant-outline'}`} variant={tier.highlighted ? 'default' : 'outline'}>
                                        <Link href="/contact">Get Started</Link>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Empty State */}
                    {!isLoadingPlans && !plansError && transformedPlans.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">No pricing plans available at the moment.</p>
                        </div>
                    )}
                </Container>
            </Wrapper>

            {/* CTA Section */}
            <Wrapper className="flex flex-col items-center justify-center py-12 md:py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
                            Ready to Scale Your Brand?
                        </h2>
                        <p className="text-foreground/80 mb-8 text-sm md:text-base">
                            Join thousands of successful brands who've transformed their marketing with authentic influencer partnerships. Start your first campaign today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                            <Button asChild size="lg">
                                <Link href="/contact">Start Free Trial</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="/contact">Schedule Demo</Link>
                            </Button>
                        </div>
                        
                        {/* App Download Option */}
                        <div className="mt-8 pt-8 border-t border-border">
                            <p className="text-sm text-muted-foreground mb-4">Or manage campaigns on mobile:</p>
                            <a 
                                href="https://play.google.com/store/apps/details?id=in.collabuzz.influencers" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block transition-transform hover:scale-105"
                            >
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                                    alt="Get it on Google Play" 
                                    style={{ height: '45px', width: 'auto' }} 
                                    height="45"
                                />
                            </a>
                        </div>
                        <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto">
                            <div className="text-center">
                                <div className="text-xl md:text-2xl font-bold text-primary">97%</div>
                                <div className="text-xs md:text-sm text-muted-foreground">Success Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-2xl font-bold text-primary">340%</div>
                                <div className="text-xs md:text-sm text-muted-foreground">Avg ROI</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-2xl font-bold text-primary">30D</div>
                                <div className="text-xs md:text-sm text-muted-foreground">Free Trial</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>
        </div>
    );
};

export default BrandPage;