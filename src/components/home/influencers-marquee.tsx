"use client";

import { LinkedinIcon, InstagramIcon, YoutubeIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";

const influencers = [
  {
    id: 1,
    name: "Arin Goldsmith",
    username: "in",
    country: "🇺🇸",
    countryName: "United States",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b970?w=150&h=150&fit=crop&crop=face",
    badge: "TOP 5%",
    category: "Gaming & Streaming",
    socialIcons: ["linkedin", "twitter", "instagram", "tiktok"]
  },
  {
    id: 2,
    name: "Levelsio",
    username: "",
    country: "🇳🇱",
    countryName: "Netherlands",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    badge: "TOP 1%",
    category: "Business & Startups",
    socialIcons: ["tiktok", "instagram", "twitter"]
  },
  {
    id: 3,
    name: "Heba Rashed",
    username: "",
    country: "🇪🇬",
    countryName: "Egypt",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    badge: "TOP 3%",
    category: "Inclusion & Social Impact",
    socialIcons: ["linkedin", "instagram", "twitter"]
  },
  {
    id: 4,
    name: "Codie Sanchez",
    username: "",
    country: "🇺🇸",
    countryName: "United States",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    badge: "TOP 8%",
    category: "Business & Startups",
    socialIcons: ["linkedin", "instagram", "youtube", "tiktok"]
  },
  {
    id: 5,
    name: "Temi B",
    username: "",
    country: "🇳🇬",
    countryName: "Nigeria",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    badge: "TOP 2%",
    category: "Career",
    socialIcons: ["instagram", "linkedin"]
  },
  {
    id: 6,
    name: "Maxim Poulsen",
    username: "",
    country: "🇫🇷",
    countryName: "France",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    badge: "TOP 8%",
    category: "Marketing & Sales",
    socialIcons: ["linkedin"]
  },
  {
    id: 7,
    name: "Shadé Zahrai",
    username: "in 💌",
    country: "🇦🇺",
    countryName: "Australia",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    badge: "TOP 1%",
    category: "Careers & Office",
    socialIcons: ["linkedin", "instagram", "tiktok", "youtube", "twitter"]
  },
  {
    id: 8,
    name: "Lior Sinclair",
    username: "",
    country: "🇺🇸",
    countryName: "United States",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    badge: "TOP 4%",
    category: "IT & Tech",
    socialIcons: ["twitter", "linkedin"]
  },
  {
    id: 9,
    name: "Milan Jovanovic",
    username: "",
    country: "🇷🇸",
    countryName: "Serbia",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face",
    badge: "TOP 5%",
    category: "IT & Tech",
    socialIcons: ["linkedin", "youtube", "twitter"]
  }
];

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "linkedin":
      return (
        <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
          <LinkedinIcon className="w-3 h-3 text-white" />
        </div>
      );
    case "instagram":
      return (
        <div className="w-5 h-5 bg-gradient-to-br from-purple-600 to-pink-600 rounded-sm flex items-center justify-center">
          <InstagramIcon className="w-3 h-3 text-white" />
        </div>
      );
    case "youtube":
      return (
        <div className="w-5 h-5 bg-red-600 rounded-sm flex items-center justify-center">
          <YoutubeIcon className="w-3 h-3 text-white" />
        </div>
      );
    case "twitter":
      return (
        <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
          <TwitterIcon className="w-3 h-3 text-white" />
        </div>
      );
    case "tiktok":
      return (
        <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
          <div className="text-white font-bold text-xs">⚡</div>
        </div>
      );
    default:
      return null;
  }
};

export default function InfluencersMarquee() {
  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-ltr space-x-6">
          {/* First set of influencers - Exact design from screenshot */}
          {influencers.map((influencer) => (
            <div
              key={`first-${influencer.id}`}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="bg-gray-900/50 rounded-2xl p-6 w-96 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl relative overflow-hidden border border-gray-800/30">
                {/* Blue gradient circle background like in screenshot */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-80"></div>
                
                {/* Content matching the screenshot layout */}
                <div className="relative z-10">
                  {/* Name and Country - Top Left */}
                  <div className="mb-4">
                    <h3 className="text-white font-bold text-xl mb-1">
                      {influencer.name}
                    </h3>
                    <p className="text-gray-400 text-sm flex items-center space-x-1">
                      <span>{influencer.country}</span>
                      <span>{influencer.countryName}</span>
                    </p>
                  </div>

                  {/* Social Icons - Middle Left */}
                  <div className="flex items-center space-x-2 mb-6">
                    {influencer.socialIcons.map((platform, index) => (
                      <SocialIcon key={index} platform={platform} />
                    ))}
                  </div>

                  {/* Bottom section with category and badge */}
                  <div className="flex items-center justify-between">
                    {/* Category with blue icon */}
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
                        <span className="text-white text-xs">📊</span>
                      </div>
                      <span className="text-white text-sm font-medium">{influencer.category}</span>
                    </div>
                    
                    {/* TOP Badge - Bottom Right */}
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded-lg">
                      <span className="text-xs font-bold">{influencer.badge}</span>
                    </div>
                  </div>
                </div>

                {/* Profile Image - Top Right with blue border */}
                <div className="absolute -top-2 -right-2 w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 z-20">
                  <img 
                    src={influencer.avatar} 
                    alt={influencer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {influencers.map((influencer) => (
            <div
              key={`second-${influencer.id}`}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="bg-gray-900/50 rounded-2xl p-6 w-96 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl relative overflow-hidden border border-gray-800/30">
                {/* Blue gradient circle background */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-80"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Name and Country */}
                  <div className="mb-4">
                    <h3 className="text-white font-bold text-xl mb-1">
                      {influencer.name}
                    </h3>
                    <p className="text-gray-400 text-sm flex items-center space-x-1">
                      <span>{influencer.country}</span>
                      <span>{influencer.countryName}</span>
                    </p>
                  </div>

                  {/* Social Icons */}
                  <div className="flex items-center space-x-2 mb-6">
                    {influencer.socialIcons.map((platform, index) => (
                      <SocialIcon key={index} platform={platform} />
                    ))}
                  </div>

                  {/* Category and Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
                        <span className="text-white text-xs">📊</span>
                      </div>
                      <span className="text-white text-sm font-medium">{influencer.category}</span>
                    </div>
                    
                    {/* TOP Badge */}
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded-lg">
                      <span className="text-xs font-bold">{influencer.badge}</span>
                    </div>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="absolute -top-2 -right-2 w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 z-20">
                  <img 
                    src={influencer.avatar} 
                    alt={influencer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}