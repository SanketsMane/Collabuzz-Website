import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Collabuzz",
  description: "Get in touch with Collabuzz for any queries about our influencer marketing platform. Contact us for data deletion requests or general inquiries.",
  openGraph: {
    title: "Contact Us - Collabuzz",
    description: "Get in touch with the Collabuzz team for support and inquiries",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}