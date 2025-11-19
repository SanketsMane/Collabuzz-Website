"use client";

import { Container, Icons } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="px-3 sm:px-4 h-12 sm:h-14 fixed top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
            <Container reverse>
                <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
                    <div className="flex items-start">
                        <Link href="/" className="flex items-center gap-2 md:gap-3">
                            <img 
                                src="/images/web_logo_white.png" 
                                alt="Collabuzz" 
                                className="h-8 md:h-10 lg:h-12 w-auto object-cover object-center"
                                style={{ objectPosition: 'center', imageRendering: 'crisp-edges' }}
                            />
                            <span className="text-white font-bold italic text-base md:text-lg lg:text-xl">
                                Collabuzz
                            </span>
                        </Link>
                    </div>
                    <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center justify-center gap-8">
                            <Link href="/about" className="hover:text-foreground/80 text-sm">About</Link>
                            <Link href="/brand" className="hover:text-foreground/80 text-sm">For Brands</Link>
                            <Link href="/influencer" className="hover:text-foreground/80 text-sm">For Influencers</Link>
                            <Link href="/faq" className="hover:text-foreground/80 text-sm">FAQ</Link>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-2 md:gap-4">
                        <Link href="/demo" className={buttonVariants({ size: "sm", variant: "ghost", className: "hidden md:flex text-xs md:text-sm px-2 md:px-4" })}>
                            Schedule Demo
                        </Link>
                        <a 
                            href="https://play.google.com/store/apps/details?id=in.collabuzz.influencers" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={buttonVariants({ size: "sm", className: "hidden md:flex text-xs md:text-sm px-2 md:px-4" })}
                        >
                            Download App
                        </a>
                        <button
                            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
                
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-12 sm:top-14 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border">
                        <div className="flex flex-col space-y-4 p-4">
                            <Link href="/about" className="hover:text-foreground/80 text-sm py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                            <Link href="/brand" className="hover:text-foreground/80 text-sm py-2" onClick={() => setIsMobileMenuOpen(false)}>For Brands</Link>
                            <Link href="/influencer" className="hover:text-foreground/80 text-sm py-2" onClick={() => setIsMobileMenuOpen(false)}>For Influencers</Link>
                            <Link href="/faq" className="hover:text-foreground/80 text-sm py-2" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
                            <div className="flex flex-col space-y-2 pt-2 border-t border-border">
                                <Link href="/demo" className={buttonVariants({ size: "sm", variant: "ghost", className: "text-sm justify-start" })} onClick={() => setIsMobileMenuOpen(false)}>
                                    Schedule Demo
                                </Link>
                                <a 
                                    href="https://play.google.com/store/apps/details?id=in.collabuzz.influencers" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={buttonVariants({ size: "sm", className: "text-sm justify-start" })}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Download App
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    )
};

export default Navbar
