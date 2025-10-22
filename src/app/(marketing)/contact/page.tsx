import { Metadata } from "next";
import { MapPin, Phone, Mail, Send } from "lucide-react";

import { Wrapper, Container } from "@/components";
import SectionBadge from "@/components/ui/section-badge";

export const metadata: Metadata = {
  title: "Contact Us - Collabuzz",
  description: "Get in touch with Collabuzz for any queries about our influencer marketing platform. Contact us for data deletion requests or general inquiries.",
  openGraph: {
    title: "Contact Us - Collabuzz",
    description: "Get in touch with the Collabuzz team for support and inquiries",
    type: "website",
  },
};

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      value: "Bengaluru, India",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-9743111825",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@collabuzz.com",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {contactDetails.map((detail, index) => {
        const Icon = detail.icon;
        return (
          <div key={index} className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                <Icon className={`w-8 h-8 ${detail.color}`} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{detail.title}</h3>
            <p className="text-muted-foreground">{detail.value}</p>
          </div>
        );
      })}
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
            placeholder="What's this about?"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-none"
            placeholder="Tell us how we can help you..."
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 font-medium"
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </form>
    </div>
  );
};

const PrivacyNotice = () => {
  return (
    <div className="bg-muted/30 rounded-lg p-8 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Data Privacy & Rights</h3>
      </div>
      
      <div className="space-y-4 text-sm text-muted-foreground">
        <p>
          You have the right to access, correct, or delete the personal information we have about you. 
          You can also choose to opt-out of certain communications from us.
        </p>
        
        <p className="flex items-center gap-2">
          <span className="text-lg">🔐</span>
          If you have any questions or concerns about our privacy practices, please contact us at{" "}
          <a href="mailto:contact@collabuzz.com" className="text-primary hover:underline font-medium">
            contact@collabuzz.com
          </a>
        </p>
        
        <p className="flex items-center gap-2">
          <span className="text-lg">📧</span>
          We respond to all inquiries within 24-48 hours during business days.
        </p>
      </div>
    </div>
  );
};

export default function ContactPage() {
  return (
    <Wrapper>
      <div className="py-20">
        <Container>
          <div className="text-center mb-16">
            <SectionBadge title="Contact Us" />
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact for any query or data deletion. We&apos;re here to help you with all your 
              influencer marketing needs.
            </p>
          </div>
          
          <ContactInfo />
          <ContactForm />
        </Container>
      </div>
      
      <div className="py-16 bg-muted/20">
        <Container>
          <PrivacyNotice />
        </Container>
      </div>
    </Wrapper>
  );
}