"use client";

import { Container, Icons } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="px-3 sm:px-4 h-12 sm:h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
            <Container reverse>
                <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
                    <div className="flex items-start">
                        <Link href="/" className="flex items-center gap-2">
                            <Icons.logo className="w-6 h-6 md:w-8 md:h-8" />
                            <span className="text-base md:text-lg font-medium">
                                Collabuzz
                            </span>
                        </Link>
                    </div>
                    <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center justify-center gap-8">
                            <Link href="/about" className="hover:text-foreground/80 text-sm">About</Link>
                            <Link href="/services" className="hover:text-foreground/80 text-sm">Services</Link>
                            <Link href="/contact" className="hover:text-foreground/80 text-sm">Contact</Link>
                            <Link href="/faq" className="hover:text-foreground/80 text-sm">FAQ</Link>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-2 md:gap-4">
                        <Link href="/services" className={buttonVariants({ size: "sm", variant: "ghost", className: "hidden md:flex text-xs md:text-sm px-2 md:px-4" })}>
                            Learn More
                        </Link>
                        <Link href="/contact" className={buttonVariants({ size: "sm", className: "hidden md:flex text-xs md:text-sm px-2 md:px-4" })}>
                            Get Started
                        </Link>
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
                    <div className="md:hidden absolute top-14 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border">
                        <div className="flex flex-col space-y-4 p-4">
                            <Link href="/about" className="hover:text-foreground/80 text-sm py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                            <Link href="/services" className="hover:text-foreground/80 text-sm py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                            <Link href="/contact" className="hover:text-foreground/80 text-sm py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                            <Link href="/faq" className="hover:text-foreground/80 text-sm py-2" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
                            <div className="flex flex-col space-y-2 pt-2 border-t border-border">
                                <Link href="/services" className={buttonVariants({ size: "sm", variant: "ghost", className: "text-sm justify-start" })} onClick={() => setIsMobileMenuOpen(false)}>
                                    Learn More
                                </Link>
                                <Link href="/contact" className={buttonVariants({ size: "sm", className: "text-sm justify-start" })} onClick={() => setIsMobileMenuOpen(false)}>
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    )
};

export default Navbar
