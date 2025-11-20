import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "Collabuzz - AI-Powered Influencer Marketing Platform | Created by Sanket Mane",
        template: `%s | Collabuzz`
    },
    description: "Collabuzz is a cutting-edge AI-powered influencer marketing platform created by Sanket Mane. Connect brands with ideal influencers through intelligent matchmaking, real-time analytics, and automated campaign workflows. Experience the future of influencer marketing with beautiful gradient animations and seamless user experience.",
    keywords: "Sanket Mane, Collabuzz, influencer marketing, AI-powered platform, brand partnerships, social media marketing, content creators, influencer campaigns, digital marketing, gradient animations, Next.js, TypeScript, React, modern web development, SanketsMane GitHub",
    authors: [
        {
            name: "Sanket Mane",
            url: "https://github.com/SanketsMane"
        }
    ],
    creator: "Sanket Mane",
    publisher: "Sanket Mane",
    icons: {
        icon: [
            {
                url: "/favicon.ico",
                href: "/favicon.ico",
            },
            {
                url: "/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                url: "/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            }
        ],
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
        other: [
            {
                rel: "android-chrome",
                url: "/android-chrome-192x192.png",
                sizes: "192x192",
            }
        ]
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Collabuzz - AI-Powered Influencer Marketing Platform by Sanket Mane",
        description: "Revolutionary AI-powered influencer marketing platform created by Sanket Mane. Features intelligent matchmaking, real-time analytics, and beautiful gradient animations built with Next.js.",
        url: "https://github.com/SanketsMane/Collabuzz-Website",
        siteName: "Collabuzz by Sanket Mane",
        images: [
            {
                url: "/collabuzz/collabuzz.com/hero8.png",
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        creator: "@SanketsMane",
        title: "Collabuzz - AI-Powered Platform by Sanket Mane",
        description: "Revolutionary influencer marketing platform with AI matchmaking, gradient animations, and modern UI. Created by Sanket Mane using Next.js & TypeScript.",
        images: [
            {
                url: "/collabuzz/collabuzz.com/hero8.png",
            }
        ]
    },
    metadataBase: new URL("https://collabuzz-website.vercel.app"),
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        }
    }
};
