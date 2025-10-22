import { Metadata } from "next";
import { Scale, Users, ShieldCheck, CreditCard, XCircle, AlertTriangle, Gavel, Globe, FileEdit } from "lucide-react";

import { Wrapper, Container } from "@/components";
import SectionBadge from "@/components/ui/section-badge";

export const metadata: Metadata = {
  title: "Terms & Conditions - Collabuzz",
  description: "Read Collabuzz's terms and conditions for using our influencer marketing platform. Learn about user accounts, intellectual property, fees, and more.",
  openGraph: {
    title: "Terms & Conditions - Collabuzz",
    description: "Terms and conditions for using the Collabuzz influencer marketing platform",
    type: "website",
  },
};

const TermsSection = ({ 
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
        <div className="space-y-3">
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

export default function TermsConditionsPage() {
  return (
    <Wrapper>
      <div className="py-20">
        <Container>
          <div className="text-center mb-16">
            <SectionBadge title="Terms & Conditions" />
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Effective Date: June 21, 2025
            </p>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              Welcome to Collabuzz! By accessing or using our platform, you agree to be bound by 
              these terms and conditions (the &quot;Terms&quot;) and our Privacy Policy. If you do not agree 
              to these Terms, please do not use the Collabuzz platform.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <TermsSection
              icon={Scale}
              title="1. Definitions"
              content={[
                '&quot;Collabuzz&quot; or &quot;we&quot; or &quot;us&quot; or &quot;our&quot; refers to the Collabuzz brand and platform.',
                '&quot;You&quot; or &quot;your&quot; refers to the individual or entity using the Collabuzz platform.',
                '&quot;Platform&quot; refers to the Collabuzz website, mobile applications, and all related services.'
              ]}
            />

            <TermsSection
              icon={Globe}
              title="2. Use of the Platform"
              content={[
                "You must be at least 18 years old or the age of majority in your jurisdiction to use the Collabuzz platform.",
                "You agree to use the platform in compliance with all applicable laws and regulations.",
                "You shall not use the platform for any unlawful or unauthorized purpose.",
                "Collabuzz reserves the right to modify, suspend, or discontinue the platform at any time without prior notice."
              ]}
            />

            <TermsSection
              icon={Users}
              title="3. User Accounts"
              content={[
                "To use certain features of the platform, you may be required to create a user account.",
                "You are responsible for maintaining the confidentiality of your account information, including your username and password.",
                "You are solely responsible for all activities that occur under your user account."
              ]}
            />

            <TermsSection
              icon={ShieldCheck}
              title="4. Intellectual Property"
              content={[
                "The Collabuzz platform and all its content, features, and functionality are owned by Collabuzz or its licensors and are protected by copyright, trademark, and other intellectual property laws.",
                "You may not modify, copy, distribute, transmit, display, reproduce, or create derivative works from the Collabuzz platform without our prior written consent."
              ]}
            />

            <TermsSection
              icon={CreditCard}
              title="5. Fees and Payments"
              content={[
                "Collabuzz may offer both free and paid plans for using the platform.",
                "If you choose a paid plan, you agree to pay the applicable fees in accordance with the terms of the plan.",
                "All fees are non-refundable, and Collabuzz reserves the right to change the fees at any time."
              ]}
            />

            <TermsSection
              icon={XCircle}
              title="6. Termination"
              content={[
                "Collabuzz reserves the right to suspend or terminate your access to the platform at any time, for any reason, including if we reasonably believe that you have violated these Terms.",
                "Upon termination, your right to use the Collabuzz platform will immediately cease."
              ]}
            />

            <TermsSection
              icon={AlertTriangle}
              title="7. Limitation of Liability"
              content={[
                "Collabuzz shall not be liable for any indirect, special, incidental, or consequential damages arising out of or related to your use of the platform.",
                "The total liability of Collabuzz for any claims related to the platform shall not exceed the amount you have paid to Collabuzz in the last 12 months."
              ]}
            />

            <TermsSection
              icon={Gavel}
              title="8. Governing Law and Dispute Resolution"
              content={[
                "These Terms shall be governed by and construed in accordance with the laws of India.",
                "Any disputes arising from these Terms or your use of the Collabuzz platform shall be resolved through binding arbitration."
              ]}
            />

            <TermsSection
              icon={FileEdit}
              title="9. Changes to the Terms"
              content={[
                "Collabuzz reserves the right to modify these Terms at any time.",
                "Any changes will be effective upon posting the revised Terms on the Collabuzz platform.",
                "Your continued use of the platform after the effective date of the revised Terms constitutes your acceptance of the changes."
              ]}
            />

            <div className="mt-16 p-8 bg-muted/30 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Questions About Our Terms?</h3>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms and Conditions, please contact us.
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
              <p className="text-sm text-muted-foreground mt-4">
                Address: Bengaluru, India
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Wrapper>
  );
}