import { SITE_CONFIG } from "@/config";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export const metadata = SITE_CONFIG;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const buildTime = Date.now();
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                <meta httpEquiv="Pragma" content="no-cache" />
                <meta httpEquiv="Expires" content="0" />
                <meta name="build-time" content={buildTime.toString()} />
                <meta name="cache-bust" content={`v${buildTime}`} />
            </head>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
                    font.className,
                )}
                data-build-time={buildTime}
            >
                {children}
            </body>
        </html>
    );
};
