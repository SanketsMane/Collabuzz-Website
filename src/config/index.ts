import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "Collabuzz - Influencer Marketing Platform | Collabs from Top Brands & Find Top Influencers",
        template: `%s | Collabuzz`
    },
    description: "Collabuzz is your premier AI-enabled platform for influencer marketing, dedicated to connecting brands with the ideal influencers to create impactful and engaging marketing campaigns. Our comprehensive tools and analytics empower brands to identify, collaborate, and manage influencer partnerships effectively, ensuring maximum reach and engagement. Whether you're a small business or a large enterprise, Collabuzz simplifies the influencer selection process, enabling you to amplify your brand message and achieve your marketing goals with precision and creativity.",
    keywords: "influencer marketing, brand partnerships, social media marketing, content creators, influencer campaigns, digital marketing, social media influencers, brand collaborations, marketing strategy, social media strategy, top influencer marketing, influencer outreach, brand collaborations, influencer networks, campaign management, social media advertising, influencer discovery, user-generated content, UGC marketing, UGC campaigns, customer engagement, collabs from top brands, find top influencers",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Collabuzz - Influencer Marketing Platform",
        description: "Collabuzz is your premier AI-enabled platform for influencer marketing, dedicated to connecting brands with the ideal influencers to create impactful and engaging marketing campaigns.",
        images: [
            {
                url: "/collabuzz/collabuzz.com/hero8.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@collabuzz",
        title: "Collabuzz - Influencer Marketing Platform",
        description: "Connect brands with ideal influencers for impactful marketing campaigns. AI-enabled platform for maximum reach and engagement.",
        images: [
            {
                url: "/collabuzz/collabuzz.com/hero8.png",
            }
        ]
    },
    metadataBase: new URL("https://collabuzz.com"),
};
