"use client";

import { LinkedinIcon, InstagramIcon, YoutubeIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";

const influencers = [
  {
    id: 1,
    name: "Aarav Sharma",
    username: "in",
    country: "��",
    countryName: "India",
    avatar: "/images/influencers/male-3.png",
    badge: "TOP 5%",
    category: "Gaming & Streaming",
    socialIcons: ["linkedin", "twitter", "instagram", "tiktok"]
  },
  {
    id: 2,
    name: "Priya Patel",
    username: "",
    country: "��",
    countryName: "India",
    avatar: "/images/influencers/female-1.png",
    badge: "TOP 1%",
    category: "Business & Startups",
    socialIcons: ["tiktok", "instagram", "twitter"]
  },
  {
    id: 3,
    name: "Kavya Singh",
    username: "",
    country: "��",
    countryName: "India",
    avatar: "/images/influencers/female-2.png",
    badge: "TOP 3%",
    category: "Lifestyle & Fashion",
    socialIcons: ["linkedin", "instagram", "twitter"]
  },
  {
    id: 4,
    name: "Rohan Gupta",
    username: "",
    country: "��",
    countryName: "India",
    avatar: "/images/influencers/male-4.png",
    badge: "TOP 8%",
    category: "Business & Startups",
    socialIcons: ["linkedin", "instagram", "youtube", "tiktok"]
  },
  {
    id: 5,
    name: "Ananya Iyer",
    username: "",
    country: "🇮🇳",
    countryName: "India",
    avatar: "/images/influencers/female-6.png",
    badge: "TOP 2%",
    category: "Career & Education",
    socialIcons: ["instagram", "linkedin"]
  },
  {
    id: 6,
    name: "Arjun Reddy",
    username: "",
    country: "��",
    countryName: "India",
    avatar: "/images/influencers/male-5.png",
    badge: "TOP 8%",
    category: "Marketing & Sales",
    socialIcons: ["linkedin"]
  },
  {
    id: 7,
    name: "Sneha Kapoor",
    username: "in 💌",
    country: "��",
    countryName: "India",
    avatar: "/images/influencers/female-4.png",
    badge: "TOP 1%",
    category: "Health & Fitness",
    socialIcons: ["linkedin", "instagram", "tiktok", "youtube", "twitter"]
  },
  {
    id: 8,
    name: "Vikram Joshi",
    username: "",
    country: "��",
    countryName: "India",
    avatar: "/images/influencers/male-6.png",
    badge: "TOP 4%",
    category: "IT & Tech",
    socialIcons: ["twitter", "linkedin"]
  },
  {
    id: 9,
    name: "Ishita Mehta",
    username: "",
    country: "��",
    countryName: "India",
    avatar: "/images/influencers/female-5.png",
    badge: "TOP 5%",
    category: "Food & Travel",
    socialIcons: ["linkedin", "youtube", "twitter"]
  }
];

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "linkedin":
      return (
        <div className="w-5 h-5 bg-purple-600 rounded-sm flex items-center justify-center">
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
    <section className="py-16 bg-black overflow-x-hidden">
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-ltr space-x-4 sm:space-x-6 min-w-max">
          {/* First set of influencers - Exact design from screenshot */}
          {influencers.map((influencer) => (
            <div
              key={`first-${influencer.id}`}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="bg-gray-900/50 rounded-2xl p-6 w-96 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl relative overflow-hidden border border-gray-800/30">
                {/* Purple gradient circle background like in screenshot */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full opacity-80"></div>
                
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
                    {/* Category with purple icon */}
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-purple-500 rounded-sm flex items-center justify-center">
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

                {/* Profile Image - Top Right with purple border */}
                <div className="absolute -top-2 -right-2 w-24 h-24 rounded-full overflow-hidden border-4 border-purple-500 z-20">
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
              <div className="bg-gray-900/50 rounded-2xl p-4 sm:p-6 w-80 sm:w-96 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl relative overflow-hidden border border-gray-800/30">
                {/* Purple gradient circle background */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full opacity-80"></div>
                
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
                      <div className="w-4 h-4 bg-purple-500 rounded-sm flex items-center justify-center">
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
                <div className="absolute -top-2 -right-2 w-24 h-24 rounded-full overflow-hidden border-4 border-purple-500 z-20">
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