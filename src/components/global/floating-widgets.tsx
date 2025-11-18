"use client";

import { MessageCircle } from "lucide-react";
import { useEffect } from "react";

// Extend Window interface for Calendly
declare global {
    interface Window {
        Calendly?: {
            initBadgeWidget: (options: {
                url: string;
                text: string;
                color: string;
                textColor: string;
                branding: boolean;
            }) => void;
        };
    }
}

const FloatingWidgets = () => {
    useEffect(() => {
        // Load Calendly widget script
        const link = document.createElement('link');
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.type = 'text/javascript';
        script.async = true;
        
        script.onload = () => {
            if (window.Calendly) {
                window.Calendly.initBadgeWidget({ 
                    url: 'https://calendly.com/collabuzzz/30min?hide_gdpr_banner=1&background_color=5b008b&text_color=ffffff&primary_color=9300b7', 
                    text: 'Schedule time with me', 
                    color: '#5200b7', 
                    textColor: '#ffffff', 
                    branding: true 
                });
                
                // Force Calendly badge to left side
                setTimeout(() => {
                    const calendlyBadge = document.querySelector('.calendly-badge-widget') as HTMLElement;
                    if (calendlyBadge) {
                        calendlyBadge.style.left = '24px';
                        calendlyBadge.style.right = 'auto';
                    }
                }, 100);
            }
        };
        
        document.body.appendChild(script);

        return () => {
            // Cleanup
            if (document.head.contains(link)) {
                document.head.removeChild(link);
            }
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <>
            {/* WhatsApp Support Button - Bottom Right */}
            <a
                href="https://wa.me/919743111825"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
                aria-label="Chat with us on WhatsApp"
            >
                                {/* Latest Official WhatsApp Logo SVG (2023) */}
                                <svg className="w-7 h-7" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <circle cx="20" cy="20" r="20" fill="#25D366"/>
                                        <path d="M28.1 25.2c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.7 1-.9 1.2-.2.2-.4.2-.7.1-.4-.2-1.4-.5-2.7-1.6-1-1-1.7-2.1-1.9-2.4-.2-.3 0-.5.1-.7.1-.1.2-.3.3-.4.1-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6-.2 0-.4 0-.7 0-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7 0 1.6 1.1 3.1 1.3 3.3.2.2 2.3 3.5 5.7 4.8.8.3 1.4.5 1.8.6.8.1 1.4.1 1.9.1.6-.1 1.9-.7 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.7-.5z" fill="#fff"/>
                                        <path d="M20 12.2c-4.3 0-7.8 3.5-7.8 7.8 0 1.4.4 2.7 1.1 3.9l-1.1 4c-.1.3.2.6.5.5l4-1.1c1.1.6 2.4 1 3.7 1 4.3 0 7.8-3.5 7.8-7.8s-3.5-7.8-7.8-7.8zm0 14.2c-1.2 0-2.3-.3-3.3-.8l-.3-.2-2.4.7.6-2.3-.2-.3c-.6-1-.9-2.1-.9-3.3 0-3.5 2.9-6.4 6.4-6.4s6.4 2.9 6.4 6.4-2.9 6.4-6.4 6.4z" fill="#fff"/>
                                    </g>
                                </svg>
                <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    Chat with us on WhatsApp
                </span>
            </a>

            {/* Calendly badge will be injected and moved to bottom left by script */}
        </>
    );
};

export default FloatingWidgets;
