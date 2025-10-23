import Icons from "@/components/global/icons"
import { Heart } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">

            <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
            <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                    <div className="flex items-start">
                        <Icons.logo className="w-7 h-7" />
                    </div>
                    <p className="text-muted-foreground mt-4 text-sm text-start">
                        Connect creators with brands for authentic influencer partnerships
                    </p>
                    <span className="mt-4 text-neutral-200 text-sm flex items-center">
                        Made in India with
                        <Heart className="w-3.5 h-3.5 ml-1 fill-primary text-primary" />
                    </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16 xl:col-span-2 xl:mt-0">
                    {/* Product Section */}
                    <div className="">
                        <h3 className="text-base font-medium text-white mb-4">
                            Product
                        </h3>
                        <ul className="text-sm text-muted-foreground space-y-2">
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    Influencer Search
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    Influencer Database
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    Influencers CRM
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    Influencer Analytics
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    Influencer Tracking
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    Influencer Campaigns
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    Brand Deals for Influencers
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    Influencer Analytics Extension
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    Pricing for Business
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    Pricing for Influencers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Use Cases Section */}
                    <div className="">
                        <h3 className="text-base font-medium text-white mb-4">
                            Use cases
                        </h3>
                        <ul className="text-sm text-muted-foreground space-y-2">
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    For B2B Brands
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    For B2C Brands
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    For Agencies
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    For Creators
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    For Small Businesses
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    Social Listening
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    Influencer Marketing
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    Employee Advocacy
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    Social Media Rankings
                                </Link>
                            </li>
                            <li>
                                <Link href="/brand" className="hover:text-foreground transition-all duration-300">
                                    LinkedIn Analytics
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className="">
                        <h3 className="text-base font-medium text-white mb-4">
                            Resources
                        </h3>
                        <ul className="text-sm text-muted-foreground space-y-2">
                            <li>
                                <Link href="/rankings" className="hover:text-foreground transition-all duration-300">
                                    Rankings
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-foreground transition-all duration-300">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-foreground transition-all duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/sponsoring" className="hover:text-foreground transition-all duration-300">
                                    Sponsoring
                                </Link>
                            </li>
                            <li>
                                <Link href="/linkedin-campaigns" className="hover:text-foreground transition-all duration-300">
                                    Launch LinkedIn Campaigns
                                </Link>
                            </li>
                            <li>
                                <Link href="/all-resources" className="hover:text-foreground transition-all duration-300">
                                    All Resources
                                </Link>
                            </li>
                            <li>
                                <Link href="/affiliate" className="hover:text-foreground transition-all duration-300">
                                    Affiliate Program
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div className="">
                        <h3 className="text-base font-medium text-white mb-4">
                            Support
                        </h3>
                        <ul className="text-sm text-muted-foreground space-y-2">
                            <li>
                                <Link href="/getting-started" className="hover:text-foreground transition-all duration-300">
                                    Getting started
                                </Link>
                            </li>
                            <li>
                                <Link href="/report-bug" className="hover:text-foreground transition-all duration-300">
                                    Report a bug
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal" className="hover:text-foreground transition-all duration-300">
                                    Legal
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-foreground transition-all duration-300">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-foreground transition-all duration-300">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-influencers" className="hover:text-foreground transition-all duration-300">
                                    Privacy Policy for Influencers
                                </Link>
                            </li>
                            <li>
                                <Link href="/refunds" className="hover:text-foreground transition-all duration-300">
                                    Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="hover:text-foreground transition-all duration-300">
                                    Shipping Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Tools Section */}
                    <div className="">
                        <h3 className="text-base font-medium text-white mb-4">
                            Tools
                        </h3>
                        <ul className="text-sm text-muted-foreground space-y-2">
                            <li>
                                <Link href="/influencer" className="hover:text-foreground transition-all duration-300">
                                    Find Instagram Influencer
                                </Link>
                            </li>
                            <li>
                                <Link href="/influencer" className="hover:text-foreground transition-all duration-300">
                                    Find YouTube Influencer
                                </Link>
                            </li>
                            <li>
                                <Link href="/influencer" className="hover:text-foreground transition-all duration-300">
                                    Find TikTok Influencer
                                </Link>
                            </li>
                            <li>
                                <Link href="/influencer" className="hover:text-foreground transition-all duration-300">
                                    Find LinkedIn Influencer
                                </Link>
                            </li>
                            <li>
                                <Link href="/influencer" className="hover:text-foreground transition-all duration-300">
                                    Find Twitter Influencer
                                </Link>
                            </li>
                            <li>
                                <Link href="/influencer" className="hover:text-foreground transition-all duration-300">
                                    Find B2B Influencer
                                </Link>
                            </li>
                            <li>
                                <Link href="/influencer" className="hover:text-foreground transition-all duration-300">
                                    Find Local Influencer
                                </Link>
                            </li>
                            <li>
                                <Link href="/influencer" className="hover:text-foreground transition-all duration-300">
                                    Find Micro Influencer
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4 md:gap-0">
                <p className="text-sm text-muted-foreground text-center md:text-left">
                    &copy; {new Date().getFullYear()} Collabuzz. All rights reserved.
                </p>
                <p className="text-sm text-muted-foreground text-center md:text-right">
                    Empowering Creators & Brands Worldwide
                </p>
            </div>

        </footer>
    )
}

export default Footer
