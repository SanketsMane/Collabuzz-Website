import { Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { Sparkles, Users, Shield, TrendingUp, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - Collabuzz",
    description: "Collabuzz is the premier platform connecting creators and brands. We foster authentic partnerships that empower influencers to build thriving businesses while helping brands achieve their marketing goals.",
};

const AboutPage = () => {
    const stats = [
        { value: "100%", label: "Verified Creators" },
        { value: "90%", label: "Resources" },
        { value: "100%", label: "Stellar Support" },
        { value: "10+", label: "Brands With Us" },
        { value: "200+", label: "Influencers" }
    ];

    const features = [
        {
            icon: Sparkles,
            title: "Versatile Platform",
            description: "Collabuzz offers a versatile platform equipped with comprehensive resources and privacy!"
        },
        {
            icon: Shield,
            title: "Expert Legal Guidance",
            description: "We provide verified data on influencers, offer expert consultation with brand analysis."
        },
        {
            icon: TrendingUp,
            title: "Real-Time Analytics",
            description: "Experience significant growth with real-time analytics and performance stabilization!"
        }
    ];

    return (
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
            {/* Hero Section */}
            <Wrapper>
                <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[100vh]" />
                
                <Container>
                    <div className="flex flex-col items-center justify-center py-20 h-full">
                        <SectionBadge title="About Us" />
                        
                        <div className="flex flex-col items-center mt-6 md:mt-8 max-w-6xl w-11/12 md:w-full px-4 md:px-0">
                            <h1 className="hero-heading font-semibold text-center optimal-text-wrap">
                                <span className="hero-heading">🎯</span> <span className="bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">The Ultimate Digital Platform for Influencer Marketing Campaigns</span> <span className="hero-heading">✨</span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg text-foreground/80 mt-4 md:mt-6 text-center max-w-4xl px-2 md:px-0 leading-relaxed optimal-text-wrap">
                                Collabuzz 🤝 is the premier platform connecting 🧑‍💻 creators and 💼 brands. We foster authentic partnerships 🤝 that empower ✨ influencers to build thriving businesses 🚀 while helping brands achieve their marketing goals 🎯. Join our vibrant community 🎉 and unlock the power of collaborative success! 💪
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-6 md:mt-8 w-full">
                                <Button asChild size="lg" className="w-full sm:w-auto min-w-[140px]">
                                    <Link href="/contact">Get Started</Link>
                                </Button>
                                <Button variant="outline" asChild size="lg" className="w-full sm:w-auto min-w-[140px]">
                                    <Link href="/services">Learn More</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Statistics Section */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 py-6 md:py-10 px-4 md:px-0">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary optimal-text-wrap">{stat.value}</h3>
                                <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Wrapper>

            {/* Features Section */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
                <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
                
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center mb-12">
                        <SectionBadge title="Why Choose Us" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0 optimal-text-wrap">
                            🚀 Why Choose Collabuzz for Influencer Marketing?
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Discover what makes Collabuzz the preferred platform for creators and brands
                        </p>
                    </div>
                </Container>
                
                <Container>
                    <div className="flex flex-col items-center justify-center py-10 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col items-start px-6 py-8 border border-border rounded-lg bg-card hover:bg-card/80 transition-colors">
                                    <div className="flex items-center justify-center mb-4 w-12 h-12 rounded-lg bg-primary/10">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* CTA Section */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Join thousands of creators and brands who trust Collabuzz for their influencer marketing success.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" asChild>
                                <Link href="/contact">Get Started Today</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/faq">Learn More</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Wrapper>
        </section>
    );
};

export default AboutPage;