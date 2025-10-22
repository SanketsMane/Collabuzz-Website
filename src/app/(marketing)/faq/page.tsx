import { Metadata } from "next";
import { ChevronDown } from "lucide-react";

import { Wrapper, Container } from "@/components";
import SectionBadge from "@/components/ui/section-badge";

export const metadata: Metadata = {
  title: "FAQ - Collabuzz",
  description: "Frequently asked questions about Collabuzz influencer marketing platform. Learn how to get started, pricing, campaign types, and more.",
  openGraph: {
    title: "FAQ - Collabuzz",
    description: "Get answers to frequently asked questions about our influencer marketing platform",
    type: "website",
  },
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <details className="group border border-border rounded-lg">
      <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition-colors">
        <h3 className="text-lg font-semibold">{question}</h3>
        <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div className="px-6 pb-6">
        <p className="text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </details>
  );
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Collabuzz?",
      answer: "Collabuzz is a brand that specializes in creating collaborative and engaging brand experiences. We help brands and influencers work together to reach new audiences and drive meaningful engagement."
    },
    {
      question: "How does Collabuzz work?",
      answer: "Collabuzz facilitates partnerships between brands and influencers. Brands can create campaigns and share them with our network of influencers. Influencers can then review and add these campaigns to their personal wishlists. Brands can then reach out to the interested influencers to collaborate on the campaign."
    },
    {
      question: "Who can use Collabuzz?",
      answer: "Collabuzz is open to both brands and influencers. Brands can create campaigns and search for relevant influencers to work with. Influencers can browse the available campaigns and add the ones they're interested in to their wishlists."
    },
    {
      question: "What kind of campaigns can I create on Collabuzz?",
      answer: "Collabuzz allows brands to create a wide variety of campaigns, such as sponsored content, product placements, social media takeovers, giveaways, and more. The key is to create engaging and authentic collaborations that resonate with the influencer's audience."
    },
    {
      question: "How much does it cost to use Collabuzz?",
      answer: "Collabuzz offers both free and paid plans for brands and influencers. The free plan allows you to create a limited number of campaigns and access a basic set of features. Paid plans offer more campaign slots, advanced analytics, and dedicated account management."
    },
    {
      question: "How do I get started with Collabuzz?",
      answer: "To get started, simply sign up for a Collabuzz account as either a brand or an influencer. Once your account is set up, you can start creating campaigns, browsing the influencer network, and initiating collaborations."
    },
    {
      question: "What kind of support does Collabuzz provide?",
      answer: "Collabuzz offers various support resources, including a comprehensive knowledge base, email support, and access to a team of experienced campaign managers. We&apos;re committed to helping our users succeed with their brand collaborations."
    },
    {
      question: "Do you have any success stories to share?",
      answer: "Absolutely! We've helped numerous brands and influencers achieve impressive results through their collaborations on Collabuzz. You can check out our case studies and testimonials to learn more about the successful partnerships we've facilitated."
    },
    {
      question: "How do I measure the success of my Collabuzz campaigns?",
      answer: "Collabuzz provides detailed analytics and reporting to help you understand the performance of your campaigns. You can track metrics such as reach, engagement, conversions, and more. Our team can also provide customized insights and recommendations to help you optimize your future collaborations."
    },
    {
      question: "Can I work with multiple influencers on a single campaign?",
      answer: "Yes, Collabuzz allows you to collaborate with multiple influencers on a single campaign. This can help you reach a larger audience and create more engaging content."
    },
    {
      question: "How do I ensure my brand's values and guidelines are maintained in the collaborations?",
      answer: "Collabuzz provides tools and resources to help you establish clear brand guidelines and expectations with your influencer partners. You can also review and approve all content before it goes live to ensure it aligns with your brand's values and messaging."
    }
  ];

  return (
    <Wrapper>
      <div className="py-20">
        <Container>
          <div className="text-center mb-16">
            <SectionBadge title="FAQ" />
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our influencer marketing platform
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                If you have any other questions, feel free to reach out to our support team. 
                We&apos;re here to help you make the most of your brand collaborations on Collabuzz.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Contact Support
              </a>
            </div>
          </div>
        </Container>
      </div>
    </Wrapper>
  );
}