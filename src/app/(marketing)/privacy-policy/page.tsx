import { Metadata } from "next";
import { Shield, Eye, Lock, Database, Users, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Collabuzz",
  description: "Collabuzz privacy policy and data protection practices. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  const dataTypes = [
    {
      type: "Personal Information",
      description: "Name, email, phone number, and profile details",
      icon: Users,
      usage: "Account creation and communication"
    },
    {
      type: "Usage Data",
      description: "Platform interactions, clicks, and feature usage",
      icon: Eye,
      usage: "Platform improvement and analytics"
    },
    {
      type: "Financial Information",
      description: "Payment details and transaction history",
      icon: Lock,
      usage: "Payment processing and fraud prevention"
    },
    {
      type: "Content Data",
      description: "Posts, campaigns, and collaboration content",
      icon: Database,
      usage: "Platform functionality and matching"
    }
  ];

  const rights = [
    "Access your personal data",
    "Correct inaccurate information",
    "Delete your account and data",
    "Export your data",
    "Restrict data processing",
    "Object to data usage",
    "Withdraw consent",
    "File complaints with authorities"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="flex items-center justify-center text-purple-200">
              <AlertTriangle className="w-5 h-5 mr-2" />
              <span>Last updated: October 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Privacy Overview</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Collabuzz, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data when you use our influencer marketing platform.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <Lock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Secure Collection</h3>
                <p className="text-gray-600 text-sm">We only collect data necessary for platform functionality</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Protected Storage</h3>
                <p className="text-gray-600 text-sm">Your data is encrypted and stored securely</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">User Control</h3>
                <p className="text-gray-600 text-sm">You have full control over your personal data</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Collection */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Data We Collect</h2>
              <p className="text-xl text-gray-600">
                We collect different types of information to provide and improve our services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {dataTypes.map((data, index) => {
                const IconComponent = data.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-2xl p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 p-3 rounded-full mr-4">
                        <IconComponent className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{data.type}</h3>
                    </div>
                    <p className="text-gray-600 mb-3">{data.description}</p>
                    <div className="text-sm text-purple-600 font-medium">
                      Purpose: {data.usage}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* How We Use Data */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">How We Use Your Data</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Platform Operations</h3>
              <p className="text-gray-600 mb-4">We use your information to:</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Create and manage your account</li>
                <li>• Facilitate connections between brands and influencers</li>
                <li>• Process payments and transactions</li>
                <li>• Provide customer support</li>
                <li>• Send important platform notifications</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Platform Improvement</h3>
              <p className="text-gray-600 mb-4">We analyze usage data to:</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Improve platform features and functionality</li>
                <li>• Enhance user experience</li>
                <li>• Develop new services</li>
                <li>• Prevent fraud and abuse</li>
                <li>• Ensure platform security</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Marketing & Communication</h3>
              <p className="text-gray-600 mb-4">With your consent, we may:</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Send promotional emails about new features</li>
                <li>• Share industry insights and tips</li>
                <li>• Invite you to webinars and events</li>
                <li>• Showcase success stories (with permission)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Your Rights */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Your Rights</h2>
              <p className="text-xl text-gray-600">
                You have complete control over your personal data. Here are your rights:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {rights.map((right, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">{right}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                To exercise any of these rights, contact our privacy team at privacy@collabuzz.com
              </p>
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Contact Privacy Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Data Security */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Data Security</h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Encryption</h3>
                <p className="text-gray-600 text-sm">All data is encrypted in transit and at rest</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Access Control</h3>
                <p className="text-gray-600 text-sm">Strict access controls and authentication</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Regular Audits</h3>
                <p className="text-gray-600 text-sm">Regular security audits and monitoring</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-center">
              We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Questions About Privacy?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Our privacy team is here to help answer any questions about how we handle your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Email Privacy Team
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Data Request Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}