import { Metadata } from "next";
import { Trophy, Star, TrendingUp, Users, Award, Crown } from "lucide-react";

export const metadata: Metadata = {
  title: "Influencer Rankings - Collabuzz",
  description: "Discover top-performing influencers across India. View rankings by engagement, reach, and performance metrics.",
};

export default function RankingsPage() {
  const topInfluencers = [
    { rank: 1, name: "Priya Sharma", category: "Lifestyle", followers: "2.5M", engagement: "8.2%", score: 98 },
    { rank: 2, name: "Arjun Kapoor", category: "Tech", followers: "1.8M", engagement: "7.9%", score: 95 },
    { rank: 3, name: "Kavya Singh", category: "Fashion", followers: "3.1M", engagement: "7.5%", score: 92 },
    { rank: 4, name: "Rohan Gupta", category: "Business", followers: "1.2M", engagement: "9.1%", score: 90 },
    { rank: 5, name: "Sneha Patel", category: "Travel", followers: "2.8M", engagement: "6.8%", score: 88 },
  ];

  const categories = [
    { name: "Fashion & Beauty", count: "15,000+", icon: Star },
    { name: "Technology", count: "8,500+", icon: TrendingUp },
    { name: "Lifestyle", count: "22,000+", icon: Users },
    { name: "Business", count: "12,000+", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-12 h-12 text-primary mr-3" />
            <h1 className="text-5xl font-bold text-foreground">
              Influencer Rankings
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover India's top-performing influencers ranked by engagement, reach, and authentic audience connection.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
                <IconComponent className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{category.name}</h3>
                <p className="text-primary font-bold text-2xl">{category.count}</p>
                <p className="text-muted-foreground text-sm">Active Influencers</p>
              </div>
            );
          })}
        </div>

        {/* Top Influencers Table */}
        <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border">
          <div className="bg-primary text-primary-foreground p-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Crown className="w-6 h-6 mr-2" />
              Top Performing Influencers
            </h2>
            <p className="text-primary-foreground/80 mt-2">Based on overall performance metrics and engagement quality</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/30">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Influencer</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Followers</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Engagement</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {topInfluencers.map((influencer) => (
                  <tr key={influencer.rank} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          influencer.rank === 1 ? 'bg-yellow-500' : 
                          influencer.rank === 2 ? 'bg-gray-400' :
                          influencer.rank === 3 ? 'bg-amber-600' : 'bg-primary'
                        }`}>
                          {influencer.rank}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-foreground">{influencer.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {influencer.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-foreground font-medium">{influencer.followers}</td>
                    <td className="px-6 py-4 text-green-600 font-medium">{influencer.engagement}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-16 bg-muted rounded-full h-2 mr-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${influencer.score}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-foreground">{influencer.score}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">Want to see your ranking?</h3>
          <p className="text-xl text-primary-foreground/80 mb-8">Join thousands of influencers who trust Collabuzz for authentic brand partnerships</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-background text-primary px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors">
              Join as Influencer
            </button>
            <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors">
              Find Influencers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}