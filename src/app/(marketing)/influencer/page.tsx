import { Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { ArrowRight, Camera, DollarSign, Star, TrendingUp, Users, Shield, Zap, CheckCircle, Heart, MessageSquare, BarChart3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "For Influencers - Collabuzz",
    description: "Monetize your influence with authentic brand partnerships. Connect with brands that align with your values and grow your creator business with Collabuzz.",
};

const InfluencerPage = () => {
    const influencerFeatures = [
        {
            icon: DollarSign,
            title: "Maximize Earnings",
            description: "Connect with premium brands and negotiate fair compensation for your creative work and influence."
        },
        {
            icon: Shield,
            title: "Secure Partnerships",
            description: "All brand partnerships are verified and contracts are handled professionally with payment protection."
        },
        {
            icon: TrendingUp,
            title: "Grow Your Audience",
            description: "Partner with brands that resonate with your audience and enhance your personal brand value."
        },
        {
            icon: Camera,
            title: "Creative Freedom",
            description: "Maintain your authentic voice while creating compelling content that engages your audience."
        },
        {
            icon: BarChart3,
            title: "Performance Insights",
            description: "Track your campaign performance and showcase your value to potential brand partners."
        },
        {
            icon: Users,
            title: "Community Support",
            description: "Join a community of creators sharing tips, experiences, and collaboration opportunities."
        }
    ];

    const influencerBenefits = [
        "Access to 1000+ verified brand partnerships",
        "Fair and transparent payment processing",
        "Professional contract management and support", 
        "Performance analytics to showcase your impact",
        "Dedicated creator success manager",
        "Exclusive access to high-paying campaigns"
    ];

    const earnings = [
        {
            followerRange: "1K - 10K",
            category: "Nano Influencer",
            avgEarning: "₹4,000-40,000",
            campaignType: "Product reviews, stories"
        },
        {
            followerRange: "10K - 100K", 
            category: "Micro Influencer",
            avgEarning: "₹40,000-4,00,000",
            campaignType: "Sponsored posts, videos"
        },
        {
            followerRange: "100K - 1M",
            category: "Macro Influencer", 
            avgEarning: "₹4,00,000-40,00,000",
            campaignType: "Brand partnerships, campaigns"
        },
        {
            followerRange: "1M+",
            category: "Mega Influencer",
            avgEarning: "₹40,00,000+",
            campaignType: "Major brand ambassadorships"
        }
    ];

    const testimonials = [
        {
            name: "Priya Sharma",
            handle: "@priyalifestyle",
            followers: "85K",
            quote: "Collabuzz helped me turn my passion into a sustainable business. I've earned over ₹12L in just 3 months!",
            avatar: "PS"
        },
        {
            name: "Arjun Singh",
            handle: "@arjunfitness",
            followers: "120K", 
            quote: "The brand partnerships are authentic and align perfectly with my content. My audience loves the collaborations!",
            avatar: "AS"
        },
        {
            name: "Kavya Patel",
            handle: "@kavyafoodie",
            followers: "45K",
            quote: "Professional support and fair payments. Collabuzz treats creators with respect and transparency.",
            avatar: "KP"
        }
    ];

    return (
        <div className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
            {/* Grid background */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            
            {/* Hero Section */}
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center justify-center py-20 h-full">
                        <div className="flex flex-col items-center mt-6 md:mt-8 w-full max-w-4xl px-4 sm:px-6 md:px-8">
                            <SectionBadge title="For Creators" />
                            <h1 className="hero-heading font-semibold text-center optimal-text-wrap mt-6">
                                <span className="hero-heading">✨</span> <span className="bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">Turn Your Influence into Income</span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg text-foreground/80 mt-4 md:mt-6 text-center max-w-2xl">
                                Connect with brands that value your creativity. Build authentic partnerships, grow your audience, and create a sustainable income stream from your passion.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-6 md:mt-8 w-full">
                                <Button asChild size="lg" className="w-full sm:w-auto min-w-[140px]">
                                    <Link href="/contact">Join as Creator</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto min-w-[140px]">
                                    <Link href="/about">Learn More</Link>
                                </Button>
                            </div>

                            {/* App Store Download Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                                <a 
                                    href="#" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-block transition-transform hover:scale-105"
                                >
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                                        alt="Download on the App Store" 
                                        style={{ height: '50px', width: 'auto' }} 
                                        height="50"
                                    />
                                </a>
                                <a 
                                    href="#" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-block transition-transform hover:scale-105"
                                >
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                                        alt="Get it on Google Play" 
                                        style={{ height: '50px', width: 'auto' }} 
                                        height="50"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Key Features */}
            <Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 relative">
                <Container>
                    <div className="max-w-md md:max-w-2xl mx-auto text-center px-4 md:px-0">
                        <SectionBadge title="Creator Benefits" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6">
                            Everything You Need to Monetize Your Influence
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground mt-4 md:mt-6">
                            From brand discovery to payment processing, we handle the business side so you can focus on creating amazing content.
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-8 md:py-20 w-full px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 md:gap-8">
                            {influencerFeatures.map((feature) => (
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

            {/* Earnings Potential */}
            <Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 relative">
                <Container>
                    <div className="max-w-md md:max-w-2xl mx-auto text-center px-4 md:px-0 mb-12">
                        <SectionBadge title="Earnings Potential" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6">
                            See What You Can Earn
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground mt-4 md:mt-6">
                            Your earning potential grows with your influence. Here's what creators typically earn on our platform.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {earnings.map((tier) => (
                            <div key={tier.category} className="rounded-2xl p-6 border border-border bg-card/20 text-center">
                                <div className="mb-4">
                                    <h3 className="font-semibold text-lg text-primary">{tier.category}</h3>
                                    <p className="text-sm text-muted-foreground">{tier.followerRange} followers</p>
                                </div>
                                <div className="mb-4">
                                    <div className="text-2xl font-bold text-foreground">{tier.avgEarning}</div>
                                    <div className="text-xs text-muted-foreground">per campaign</div>
                                </div>
                                <p className="text-sm text-muted-foreground">{tier.campaignType}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Wrapper>

            {/* Benefits Section */}
            <Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 relative">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl p-8 border border-primary/10">
                                <div className="text-center">
                                    <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Creator-First Platform</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Built by creators, for creators. We understand what you need to succeed.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-primary">10K+</div>
                                            <div className="text-sm text-muted-foreground">Active Creators</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-primary">$2M+</div>
                                            <div className="text-sm text-muted-foreground">Paid to Creators</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <SectionBadge title="Why Creators Choose Us" />
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-6 mb-6">
                                Join 10,000+ Successful Creators
                            </h2>
                            <div className="space-y-4">
                                {influencerBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <p className="text-foreground/80">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <Button asChild size="lg">
                                    <Link href="/contact">Start Earning Today <ArrowRight className="w-4 h-4 ml-2" /></Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Creator Testimonials */}
            <Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 relative">
                <Container>
                    <div className="max-w-md md:max-w-2xl mx-auto text-center px-4 md:px-0 mb-12">
                        <SectionBadge title="Success Stories" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6">
                            Hear from Our Creators
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground mt-4 md:mt-6">
                            See how creators like you are building successful businesses with Collabuzz.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.name} className="rounded-2xl p-6 border border-border bg-card/20">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{testimonial.name}</h4>
                                        <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                                        <p className="text-xs text-primary">{testimonial.followers} followers</p>
                                    </div>
                                </div>
                                <blockquote className="text-sm text-foreground/80 italic">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="flex items-center gap-1 mt-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Wrapper>

            {/* Application Process */}
            <Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 relative">
                <Container>
                    <div className="max-w-md md:max-w-2xl mx-auto text-center px-4 md:px-0 mb-12">
                        <SectionBadge title="Getting Started" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6">
                            Start Your Creator Journey
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground mt-4 md:mt-6">
                            Join our platform in three simple steps and start monetizing your influence today.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-primary">1</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Apply</h3>
                            <p className="text-sm text-muted-foreground">
                                Submit your application with your social media profiles and content examples.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-primary">2</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Get Verified</h3>
                            <p className="text-sm text-muted-foreground">
                                Our team reviews your profile and verifies your audience authenticity.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-primary">3</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Start Earning</h3>
                            <p className="text-sm text-muted-foreground">
                                Browse available campaigns and start collaborating with amazing brands.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* CTA Section */}
            <Wrapper className="flex flex-col items-center justify-center py-12 md:py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
                            Ready to Monetize Your Influence?
                        </h2>
                        <p className="text-foreground/80 mb-8 text-sm md:text-base">
                            Join thousands of creators who are already earning from their passion. Start building authentic brand partnerships and grow your creator business today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                            <Button asChild size="lg">
                                <Link href="/contact">Apply Now - It's Free</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="/faq">Have Questions?</Link>
                            </Button>
                        </div>
                        <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto">
                            <div className="text-center">
                                <div className="text-xl md:text-2xl font-bold text-primary">Free</div>
                                <div className="text-xs md:text-sm text-muted-foreground">To Join</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-2xl font-bold text-primary">24H</div>
                                <div className="text-xs md:text-sm text-muted-foreground">Approval</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-2xl font-bold text-primary">No</div>
                                <div className="text-xs md:text-sm text-muted-foreground">Hidden Fees</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>
        </div>
    );
};

export default InfluencerPage;