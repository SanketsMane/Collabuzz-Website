import { Metadata } from "next";
import { Shield, Lock, Eye, FileText, Users, Bell } from "lucide-react";

import { Wrapper, Container } from "@/components";
import SectionBadge from "@/components/ui/section-badge";

export const metadata: Metadata = {
  title: "Privacy Policy - Collabuzz",
  description: "Learn about Collabuzz's privacy policy, data collection practices, and how we protect your personal information on our influencer marketing platform.",
  openGraph: {
    title: "Privacy Policy - Collabuzz",
    description: "Privacy policy and data protection practices for Collabuzz platform",
    type: "website",
  },
};

const PolicySection = ({ 
  icon: Icon, 
  title, 
  content 
}: { 
  icon: any; 
  title: string; 
  content: string | string[]; 
}) => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      {Array.isArray(content) ? (
        <div className="space-y-4">
          {content.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground leading-relaxed">{content}</p>
      )}
    </div>
  );
};

export default function PrivacyPolicyPage() {
  return (
    <Wrapper>
      <div className="py-20">
        <Container>
          <div className="text-center mb-16">
            <SectionBadge title="Privacy Policy" />
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
              Privacy Policy for Collabuzz.com
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Effective Date: June 1, 2025
            </p>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              At Collabuzz.com, we are committed to protecting the privacy and security of our users. 
              This Privacy Policy explains how we collect, use, and protect the personal information 
              you provide to us when you use our website and services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <PolicySection
              icon={Eye}
              title="Information We Collect"
              content={[
                "Contact Information: This includes your name, email address, phone number, and mailing address.",
                "Account Information: If you create an account with us, we may collect your username, password, and other account details.",
                "Usage Data: We may collect information about how you use our website and services, such as the pages you visit, the links you click, and the search terms you use.",
                "Payment Information: If you make a purchase through our website, we may collect your payment details, such as your credit card number and billing address."
              ]}
            />

            <PolicySection
              icon={FileText}
              title="How We Use Your Information"
              content={[
                "To provide and improve our services: We use your information to deliver the services you request, respond to your inquiries, and enhance your experience on our website.",
                "To communicate with you: We may use your contact information to send you updates, newsletters, and other communications related to our services.",
                "To process payments: If you make a purchase, we use your payment information to process the transaction.",
                "To analyze and improve our website: We may use your usage data to understand how our website is being used and to make improvements.",
                "To comply with legal obligations: We may use your information as required by law or to protect our rights and the rights of others."
              ]}
            />

            <PolicySection
              icon={Users}
              title="Data Sharing and Disclosure"
              content={[
                "We may share your personal information with third-party service providers who assist us in operating our website and delivering our services. These providers are bound by confidentiality agreements and are only permitted to use your information for the purposes of providing their services to us.",
                "We may also disclose your information if required to do so by law or in the good-faith belief that such action is necessary to comply with legal obligations, protect and defend our rights or property, or act in urgent circumstances to protect the personal safety of our users or the public."
              ]}
            />

            <PolicySection
              icon={Lock}
              title="Data Security"
              content="We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission or storage system can be guaranteed to be 100% secure."
            />

            <PolicySection
              icon={Shield}
              title="Your Rights and Choices"
              content={[
                "You have the right to access, correct, or delete the personal information we have about you. You can also choose to opt-out of certain communications from us.",
                "If you have any questions or concerns about our privacy practices, please contact us at contact@collabuzz.com."
              ]}
            />

            <PolicySection
              icon={Bell}
              title="Changes to this Privacy Policy"
              content={[
                "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.",
                "Your continued use of our services after such changes constitutes your acceptance of the revised Privacy Policy."
              ]}
            />

            <div className="mt-16 p-8 bg-muted/30 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Questions About Our Privacy Policy?</h3>
              <p className="text-muted-foreground mb-6">
                If you have any questions or concerns about our privacy practices, please don&apos;t hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:contact@collabuzz.com"
                  className="text-primary hover:underline font-medium"
                >
                  contact@collabuzz.com
                </a>
                <span className="hidden sm:block text-muted-foreground">|</span>
                <a
                  href="tel:+919743111825"
                  className="text-primary hover:underline font-medium"
                >
                  +91-9743111825
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Wrapper>
  );
}