import { Metadata } from "next";
import { Scale, FileText, Clock, User, Shield, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions - Collabuzz",
  description: "Read Collabuzz terms and conditions, user agreements, and platform policies. Understand your rights and responsibilities.",
};

export default function TermsConditionsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using Collabuzz platform, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service constitute a legally binding agreement between you and Collabuzz."
    },
    {
      title: "2. User Accounts",
      content: "You are responsible for safeguarding the password and for maintaining the confidentiality of your account. You agree not to disclose your password to any third party and to take sole responsibility for activities that occur under your account."
    },
    {
      title: "3. Platform Usage",
      content: "Collabuzz provides a platform for brands and influencers to connect and collaborate. Users must use the platform in accordance with applicable laws and regulations. Prohibited activities include spam, fraud, harassment, or any illegal content."
    },
    {
      title: "4. Content Ownership",
      content: "Users retain ownership of content they create and upload. By using our platform, you grant Collabuzz a non-exclusive license to use, display, and distribute your content for platform operations and marketing purposes."
    },
    {
      title: "5. Payment Terms",
      content: "All payments are processed securely through our payment partners. Fees are clearly disclosed before transactions. Refunds are subject to our refund policy. Users are responsible for applicable taxes."
    },
    {
      title: "6. Privacy & Data Protection",
      content: "We are committed to protecting your privacy. Our Privacy Policy details how we collect, use, and protect your personal information. By using our platform, you consent to our privacy practices."
    },
    {
      title: "7. Intellectual Property",
      content: "Collabuzz platform, including all software, designs, and trademarks, is protected by intellectual property laws. Users may not copy, modify, or distribute our proprietary content without permission."
    },
    {
      title: "8. Limitation of Liability",
      content: "Collabuzz shall not be liable for any indirect, incidental, special, or consequential damages arising from platform use. Our liability is limited to the amount paid by the user in the preceding 12 months."
    },
    {
      title: "9. Termination",
      content: "Either party may terminate this agreement at any time. Upon termination, your access to the platform will be revoked, but provisions regarding privacy, intellectual property, and limitation of liability shall survive."
    },
    {
      title: "10. Governing Law",
      content: "These terms are governed by the laws of India. Any disputes shall be resolved through arbitration in Mumbai, Maharashtra, in accordance with Indian Arbitration and Conciliation Act."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              Please read these terms carefully before using the Collabuzz platform. Last updated: October 2025.
            </p>
            <div className="flex items-center justify-center text-purple-200">
              <Clock className="w-5 h-5 mr-2" />
              <span>Effective Date: October 1, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Quick Overview</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <User className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">User Rights</h3>
                <p className="text-gray-600 text-sm">Your rights and responsibilities as a platform user</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Data Protection</h3>
                <p className="text-gray-600 text-sm">How we protect and handle your personal information</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Platform Rules</h3>
                <p className="text-gray-600 text-sm">Guidelines for acceptable use of our platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Sections */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0">
                  <h3 className="text-2xl font-bold text-foreground mb-6">{section.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8">
            <div className="flex items-start">
              <AlertCircle className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-3">Important Notice</h3>
                <p className="text-purple-800 mb-4">
                  These terms may be updated from time to time. We will notify users of any material changes via email or platform notifications. Continued use of the platform after changes constitutes acceptance of the new terms.
                </p>
                <p className="text-purple-800">
                  If you have questions about these terms, please contact our legal team at legal@collabuzz.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Questions About Our Terms?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Our legal team is here to help clarify any aspects of our terms and conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Contact Legal Team
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}