import { Metadata } from "next";

export const metadata: Metadata = {
    title: "For Brands - Collabuzz",
    description: "Discover authentic influencer partnerships that drive real results. Connect with verified creators who align with your brand values and reach your target audience effectively.",
};

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}