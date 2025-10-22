import { Container, Icons, Wrapper } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LampContainer } from "@/components/ui/lamp";
import Marquee from "@/components/ui/marquee";
import SectionBadge from "@/components/ui/section-badge";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, UserIcon, Zap, Search, Users, BarChart3, Sparkles, Target, HandHeart, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BrandsMarquee from "@/components/home/brands-marquee";
import InfluencersMarquee from "@/components/home/influencers-marquee";

const HomePage = () => {

    // Collabuzz testimonials data
    const collabuzzTestimonials = [
        {
            name: "Ameen Khan",
            username: "@ameenkhan",
            body: "Collabuzz has been instrumental in connecting us with the perfect influencers for our campaigns. Their platform is user-friendly and their support team is incredibly helpful."
        },
        {
            name: "Siba Lee",
            username: "@sibaleex",
            body: "As an influencer, Collabuzz has opened up a world of opportunities for me. I've been able to work with amazing brands and build strong relationships within the platform."
        },
        {
            name: "Pavan",
            username: "@pavan_feedmyev",
            body: "Finding Collabuzz was one of the biggest tools for our business to scale. We were able to take this one sales channel of influencer marketing and make it multiple sales channels."
        }
    ];

    // Collabuzz features
    const collabuzzFeatures = [
        {
            icon: Sparkles,
            title: "AI-Powered Matchmaking",
            description: "Our advanced algorithms analyze creator content, audience demographics, and brand values to find perfect partnerships that drive authentic engagement."
        },
        {
            icon: BarChart3,
            title: "Real-Time Analytics",
            description: "Get real-time insights and predictive analytics to optimize your campaigns before they launch, ensuring maximum return on investment."
        },
        {
            icon: Target,
            title: "Automated Campaign Workflow",
            description: "Streamline your entire campaign process from discovery to payment with our intelligent automation tools and seamless payment integrations."
        }
    ];

    // Brand & Creator services
    const brandServices = [
        {
            icon: Search,
            title: "Discover",
            subtitle: "Find Perfect Matches",
            description: "Our AI analyzes millions of data points to identify creators who align perfectly with your brand values and target audience."
        },
        {
            icon: HandHeart,
            title: "Collaborate",
            subtitle: "Seamless Partnerships",
            description: "Streamlined communication tools, contract management, and content approval workflows make collaboration effortless."
        },
        {
            icon: TrendingUp,
            title: "Measure",
            subtitle: "Track Success",
            description: "Real-time analytics and performance insights help you optimize campaigns and maximize your return on investment."
        }
    ];

    const creatorServices = [
        {
            icon: Search,
            title: "Discover Campaigns",
            description: "Instantly browse and filter exciting brand campaigns. Find opportunities that perfectly align with your niche and passion – then hit apply with ease!"
        },
        {
            icon: Users,
            title: "Pitch & Partner Up",
            description: "Craft compelling proposals for campaigns that excite you. Get expert support and be awarded by our team to kickstart amazing collaborations!"
        },
        {
            icon: Zap,
            title: "Create & Get Rewarded",
            description: "Bring your unique creativity to life for top brands. Complete your campaign content and get paid promptly for your awesome influence!"
        }
    ];

    const firstRow = collabuzzTestimonials.slice(0, Math.ceil(collabuzzTestimonials.length / 2));
    const secondRow = collabuzzTestimonials.slice(Math.ceil(collabuzzTestimonials.length / 2));

    return (
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">

            {/* hero */}
            <Wrapper>
                <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

                <Container>
                    <div className="flex flex-col items-center justify-center py-20 h-full">
                        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                                <Sparkles className="w-4 h-4" />
                                AI-Powered Influencer Marketing
                                <ChevronRight className="w-4 h-4" />
                            </span>
                        </button>

                        <div className="flex flex-col items-center mt-4 md:mt-8 w-full max-w-4xl px-4 sm:px-6 md:px-8">
                            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-semibold text-center">
                                <span className="text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">🌟</span> <span className="bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">Discover Exciting Collabs with Top Brands!</span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg text-foreground/80 mt-4 md:mt-6 text-center max-w-2xl">
                                Connect with top brands for easy collaborations! 🤝 We help you find the best campaigns that fit your style in just one click! Whether you&apos;re a brand or creator, unlock the power of authentic partnerships.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-6 md:mt-8 w-full">
                                <Button asChild size="lg" className="w-full sm:w-auto min-w-[140px]">
                                    <Link href="/brand">For Brands</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto min-w-[140px]">
                                    <Link href="/influencer">For Influencer</Link>
                                </Button>
                            </div>
                            <div className="hidden md:flex relative items-center justify-center mt-6 w-full">
                                <Link href="/about" className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-4 py-2 gap-4 shadow-3xl shadow-background/40 cursor-pointer select-none">
                                    <p className="text-foreground text-sm md:text-base font-medium">
                                        🚀 Start building your influence network now!
                                    </p>
                                </Link>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-4 md:py-10 lg:py-20 w-full min-h-[300px] md:min-h-[600px] px-4">
                            <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
                            <div className="w-full max-w-sm md:max-w-4xl mx-auto rounded-lg md:rounded-xl lg:rounded-2xl p-3 md:p-4 ring-1 md:ring-2 ring-primary/20 bg-card/30 backdrop-blur-xl border border-primary/10 md:border-2">
                                <div className="relative w-full h-[280px] md:h-[450px] lg:h-[550px] rounded-md md:rounded-lg lg:rounded-xl bg-gradient-to-br from-card/50 to-muted/30 shadow-xl md:shadow-2xl border border-border overflow-hidden">
                                    
                                    {/* LARGE VISIBLE CENTER ELEMENT - This should definitely show */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50">
                                        <div className="w-16 h-16 md:w-24 md:h-24 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center shadow-xl md:shadow-2xl mx-auto mb-2 md:mb-4">
                                            <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-primary-foreground" />
                                        </div>
                                        <h2 className="text-lg md:text-xl font-bold text-foreground mb-1 md:mb-2">Collabuzz</h2>
                                        <p className="text-xs md:text-sm text-muted-foreground">Influencer Marketing Platform</p>
                                    </div>
                                    
                                    {/* Dashboard Header - More Visible */}
                                    <div className="absolute top-2 md:top-6 left-2 md:left-6 right-2 md:right-6 h-8 md:h-14 bg-card backdrop-blur-md rounded-md md:rounded-xl border border-primary/20 shadow-lg flex items-center px-2 md:px-4">
                                        <div className="flex items-center space-x-1 md:space-x-3">
                                            <div className="w-5 h-5 md:w-8 md:h-8 bg-primary rounded-md md:rounded-lg flex items-center justify-center shadow-md">
                                                <Sparkles className="w-3 h-3 md:w-5 md:h-5 text-primary-foreground" />
                                            </div>
                                            <span className="font-bold text-foreground text-xs md:text-base">Collabuzz</span>
                                        </div>
                                        <div className="ml-auto flex items-center space-x-1 md:space-x-2">
                                            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse shadow-sm"></div>
                                            <span className="text-xs md:text-sm font-medium text-foreground">LIVE</span>
                                        </div>
                                    </div>

                                    {/* Campaign Cards - Hidden on mobile */}
                                    <div className="hidden md:block absolute top-24 left-6 w-48 h-32 bg-card backdrop-blur-sm rounded-xl border-2 border-primary/30 shadow-lg p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xs font-medium text-foreground">Active Campaigns</h3>
                                            <Target className="w-3 h-3 text-primary" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-sm"></div>
                                                <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                                                    <div className="w-3/4 h-full bg-gradient-to-r from-purple-500 to-violet-500 animate-pulse"></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm"></div>
                                                <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                                                    <div className="w-2/3 h-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Influencer Profiles */}
                                    <div className="absolute top-24 right-6 w-44 h-32 bg-card backdrop-blur-sm rounded-xl border-2 border-secondary/30 shadow-lg p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xs font-medium text-foreground">Top Creators</h3>
                                            <Users className="w-3 h-3 text-primary" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-1.5">
                                                    <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                                                    <span className="text-xs text-muted-foreground">@sarah_k</span>
                                                </div>
                                                <span className="text-xs text-green-600 font-medium">+12%</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-1.5">
                                                    <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                                                    <span className="text-xs text-muted-foreground">@mike_d</span>
                                                </div>
                                                <span className="text-xs text-green-600 font-medium">+8%</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connection Visualization */}
                                    <div className="absolute top-52 left-1/2 transform -translate-x-1/2 w-72 h-16 animate-fade-in-up" style={{animationDelay: '1s'}}>
                                        <div className="relative flex items-center justify-between">
                                            {/* Brand */}
                                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg animate-float">
                                                <span className="text-xs font-bold text-primary-foreground">B</span>
                                            </div>
                                            
                                            {/* Connection Line */}
                                            <div className="flex-1 relative mx-3">
                                                <div className="w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></div>
                                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                                                <div className="absolute -top-0.5 left-1/4 w-1 h-1 bg-primary/60 rounded-full animate-ping"></div>
                                                <div className="absolute -bottom-0.5 right-1/4 w-1 h-1 bg-secondary/60 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                                            </div>
                                            
                                            {/* Influencer */}
                                            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                                                <HandHeart className="w-6 h-6 text-secondary-foreground" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stats Dashboard */}
                                    <div className="absolute bottom-6 left-6 right-6 h-18 bg-card backdrop-blur-sm rounded-xl border-2 border-accent/30 shadow-lg p-4">
                                        <div className="flex items-center justify-between h-full">
                                            <div className="text-center">
                                                <div className="text-sm font-bold text-primary">2.4M</div>
                                                <div className="text-xs text-muted-foreground">Reach</div>
                                            </div>
                                            <div className="w-px h-8 bg-border"></div>
                                            <div className="text-center">
                                                <div className="text-sm font-bold text-green-600">97%</div>
                                                <div className="text-xs text-muted-foreground">Match</div>
                                            </div>
                                            <div className="w-px h-8 bg-border"></div>
                                            <div className="text-center">
                                                <div className="text-sm font-bold text-secondary">156</div>
                                                <div className="text-xs text-muted-foreground">Active</div>
                                            </div>
                                            <div className="w-px h-8 bg-border"></div>
                                            <div className="text-center">
                                                <TrendingUp className="w-4 h-4 text-accent mx-auto" />
                                                <div className="text-xs text-muted-foreground">Growth</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Particles */}
                                    <div className="absolute top-16 right-12 w-2 h-2 bg-primary/40 rounded-full animate-ping"></div>
                                    <div className="absolute bottom-20 left-8 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-pulse"></div>
                                    <div className="absolute top-28 left-1/3 w-1 h-1 bg-accent/40 rounded-full animate-bounce"></div>
                                </div>

                                <BorderBeam size={250} duration={12} delay={9} />
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Brand Logos Marquee */}
            <BrandsMarquee />

            {/* Influencers Marquee */}
            <InfluencersMarquee />

            {/* features section */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Why Choose Collabuzz" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            🚀 Why Choose Collabuzz for Influencer Marketing?
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Experience the power of AI-driven influencer marketing with our comprehensive platform
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
                            {collabuzzFeatures.map((feature) => (
                                <div key={feature.title} className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4 border border-border rounded-lg bg-card hover:bg-card/80 transition-colors">
                                    <div className="flex items-center justify-center mb-4">
                                        <feature.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-medium mt-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
                {/* Statistics */}
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-8 md:py-10 px-4">
                        <div className="text-center p-4 rounded-lg bg-card/20">
                            <h3 className="text-xl md:text-3xl font-bold text-primary">97%</h3>
                            <p className="text-xs md:text-sm text-muted-foreground mt-1">Match Score</p>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-card/20">
                            <h3 className="text-xl md:text-3xl font-bold text-primary">+340%</h3>
                            <p className="text-xs md:text-sm text-muted-foreground mt-1">ROI Boost</p>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-card/20">
                            <h3 className="text-xl md:text-3xl font-bold text-primary">80%</h3>
                            <p className="text-xs md:text-sm text-muted-foreground mt-1">Time Saved</p>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-card/20">
                            <h3 className="text-xl md:text-3xl font-bold text-primary">200+</h3>
                            <p className="text-xs md:text-sm text-muted-foreground mt-1">Influencers</p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* features */}
            <Wrapper className="flex flex-col items-center justify-center py-8 md:py-12 relative">
                <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
                <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-purple-600 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-md md:max-w-2xl mx-auto text-center px-4 md:px-0">
                        <SectionBadge title="Features" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6">
                            Discover our powerful features
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground mt-4 md:mt-6">
                            Collabuzz offers a range of features to help you build successful influencer partnerships in no time
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex items-center justify-center mx-auto mt-6 md:mt-8 px-4">
                        <Icons.feature className="w-auto h-48 md:h-80" />
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-8 md:py-20 w-full px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 md:gap-8">
                            {collabuzzFeatures.map((feature) => (
                                <div key={feature.title} className="flex flex-col items-start p-4 md:p-6 rounded-lg bg-card/20 border border-border/20">
                                    <div className="flex items-center justify-center mb-4">
                                        <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* pricing */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-purple-500 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <SectionBadge title="Get Started" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Ready to Transform Your Marketing?
                        </h2>
                        <p className="text-muted-foreground mt-6 text-lg">
                            Join thousands of brands and influencers who trust Collabuzz for their marketing success
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8 px-4 md:px-0">
                            <Link href="/brand" className="px-6 md:px-8 py-2.5 md:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm md:text-base text-center">
                                Start as Brand
                            </Link>
                            <Link href="/influencer" className="px-6 md:px-8 py-2.5 md:py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium text-sm md:text-base text-center">
                                Join as Influencer
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 md:mt-16 max-w-2xl mx-auto px-4 md:px-0">
                            <div className="text-center">
                                <div className="text-xl md:text-2xl font-bold text-primary">97%</div>
                                <div className="text-xs md:text-sm text-muted-foreground">Match Score</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-2xl font-bold text-primary">340%</div>
                                <div className="text-xs md:text-sm text-muted-foreground">ROI Increase</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-2xl font-bold text-primary">200+</div>
                                <div className="text-xs md:text-sm text-muted-foreground">Influencers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-2xl font-bold text-primary">100%</div>
                                <div className="text-xs md:text-sm text-muted-foreground">Verified</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* testimonials */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-purple-500 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-md md:max-w-2xl mx-auto text-center px-4">
                        <SectionBadge title="Our Customers" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6">
                            What people are saying
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground mt-4 md:mt-6">
                            See how Collabuzz empowers creators and brands. Here&apos;s what real people are saying
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="py-6 md:py-20 w-full">
                        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-6 md:py-10">
                            <Marquee pauseOnHover className="[--duration:20s] select-none">
                                {firstRow.map((review) => (
                                    <figure
                                        key={review.name}
                                        className={cn(
                                            "relative w-56 md:w-64 cursor-pointer overflow-hidden rounded-xl border p-3 md:p-4",
                                            "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                        )}
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserIcon className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <Marquee reverse pauseOnHover className="[--duration:20s] select-none">
                                {secondRow.map((review) => (
                                    <figure
                                        key={review.name}
                                        className={cn(
                                            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                            "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                        )}
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserIcon className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* newsletter */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                                From Idea to Launch <br /> Faster Than Ever
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                Build stunning websites with Astra&apos;s intuitive drag-and-drop builder and powerful AI assistant
                            </p>
                            <Button variant="white" className="mt-6" asChild>
                                <Link href="/sign-in">
                                    Get started for free
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </LampContainer>
                </Container>
                <Container className="relative z-[999999]">
                    <div className="flex items-center justify-center w-full -mt-40">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
                            <div className="flex flex-col items-start gap-4 w-full">
                                <h4 className="text-xl md:text-2xl font-semibold">
                                    Join our newsletter
                                </h4>
                                <p className="text-base text-muted-foreground">
                                    Be up to date with everything about AI builder
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                                <form action="#" className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
                                    <Input
                                        required
                                        type="email"
                                        placeholder="Enter your email"
                                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                                    />
                                    <Button type="submit" size="sm" variant="secondary" className="w-full md:w-max">
                                        Subscribe
                                    </Button>
                                </form>
                                <p className="text-xs text-muted-foreground">
                                    By subscribing you agree with our{" "}
                                    <Link href="#">
                                        Privacy Policy
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

        </section>
    )
};

export default HomePage
