import { SITE_CONFIG } from "@/config";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { FloatingWidgets } from "@/components";

const font = Inter({ subsets: ["latin"] });

export const metadata = SITE_CONFIG;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const buildTime = Date.now();
    return (
        <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
            <head>
                <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                <meta httpEquiv="Pragma" content="no-cache" />
                <meta httpEquiv="Expires" content="0" />
                <meta name="build-time" content={buildTime.toString()} />
                <meta name="cache-bust" content={`v${buildTime}`} />
                <meta name="referrer" content="strict-origin-when-cross-origin" />
                <meta httpEquiv="Content-Security-Policy" content="frame-src 'self' https://www.youtube-nocookie.com https://calendly.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube-nocookie.com https://www.googletagmanager.com https://assets.calendly.com;" />
                
                {/* Google Analytics */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-5TWSSK9KH0"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-5TWSSK9KH0');
                        `
                    }}
                />
                
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            // Suppress YouTube embed console errors
                            (function() {
                                const originalError = console.error;
                                console.error = function(...args) {
                                    const message = args.join(' ');
                                    if (message.includes('doubleclick.net') || 
                                        message.includes('googleads') || 
                                        message.includes('ERR_BLOCKED_BY_CLIENT') ||
                                        message.includes('ERR_INTERNET_DISCONNECTED')) {
                                        return;
                                    }
                                    originalError.apply(console, args);
                                };
                            })();
                        `
                    }}
                />
            </head>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased overflow-x-hidden",
                    font.className,
                )}
                data-build-time={buildTime}
            >
                {children}
                <FloatingWidgets />
            </body>
        </html>
    );
};
