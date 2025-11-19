import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { Wrapper, Container } from "@/components";
import { FileText, Shield, Scale, Users, Mail, Phone, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Information - Collabuzz",
  description: "Legal information, terms of service, privacy policy, and compliance details for Collabuzz influencer marketing platform.",
};

export default function LegalPage() {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      {/* Hero Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <Container>
          <div className="flex flex-col items-center justify-center py-20 w-full">
            <div className="max-w-md mx-auto text-start md:text-center">
              <SectionBadge title="Legal Information" />
              <h1 className="hero-heading font-semibold text-center optimal-text-wrap mt-4 md:mt-6 px-4 md:px-0">
                ⚖️ Legal
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Information Hub
                </span>
              </h1>
              <p className="text-muted-foreground mt-6 text-center px-4 md:px-0 leading-relaxed optimal-text-wrap max-w-3xl mx-auto">
                Find all legal information, terms of service, privacy policies, and compliance details for Collabuzz platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" asChild>
                  <Link href="#documents">
                    <FileText className="w-5 h-5 mr-2" />
                    View Documents
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#contact">Contact Legal</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Legal Documents */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-16" id="documents">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Legal <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Documents</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              <div className="p-8 bg-muted/20 rounded-lg border hover:bg-muted/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Terms of Service</h3>
                <p className="text-muted-foreground mb-6">Comprehensive terms and conditions for using Collabuzz platform</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    Last Updated: January 2024
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Version 2.1
                  </div>
                </div>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/terms">View Terms</Link>
                </Button>
              </div>

              <div className="p-8 bg-muted/20 rounded-lg border hover:bg-muted/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Privacy Policy</h3>
                <p className="text-muted-foreground mb-6">How we collect, use, and protect your personal information</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    Last Updated: January 2024
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    GDPR Compliant
                  </div>
                </div>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/privacy">View Policy</Link>
                </Button>
              </div>

              <div className="p-8 bg-muted/20 rounded-lg border hover:bg-muted/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Scale className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Cookie Policy</h3>
                <p className="text-muted-foreground mb-6">Information about cookies and tracking technologies we use</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    Last Updated: December 2023
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    EU Compliant
                  </div>
                </div>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/cookies">View Policy</Link>
                </Button>
              </div>

              <div className="p-8 bg-muted/20 rounded-lg border hover:bg-muted/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Influencer Agreement</h3>
                <p className="text-muted-foreground mb-6">Terms and conditions for influencers joining our platform</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    Last Updated: January 2024
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Creator Focused
                  </div>
                </div>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/influencer-terms">View Agreement</Link>
                </Button>
              </div>

              <div className="p-8 bg-muted/20 rounded-lg border hover:bg-muted/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Scale className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Brand Agreement</h3>
                <p className="text-muted-foreground mb-6">Legal terms for brands and agencies using Collabuzz</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    Last Updated: January 2024
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Enterprise Ready
                  </div>
                </div>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/brand-terms">View Agreement</Link>
                </Button>
              </div>

              <div className="p-8 bg-muted/20 rounded-lg border hover:bg-muted/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Data Processing</h3>
                <p className="text-muted-foreground mb-6">Information about how we process and protect your data</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    Last Updated: January 2024
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    ISO 27001
                  </div>
                </div>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/data-processing">View DPA</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Compliance Section */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Compliance & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Certifications</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <div className="p-6 bg-muted/20 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Data Protection</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    GDPR Compliant (EU)
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    CCPA Compliant (California)
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    IT Act 2000 (India)
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    ISO 27001 Certified
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-muted/20 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Security Standards</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    SSL/TLS Encryption
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    SOC 2 Type II
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    PCI DSS Compliant
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Regular Security Audits
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-muted/20 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Business Compliance</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    GST Registered (India)
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Company Registration
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    FTC Guidelines Compliant
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    ASCI Code Adherence
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-muted/20 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Platform Standards</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Content Moderation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Anti-Fraud Measures
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Quality Assurance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Transparency Reports
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Contact Legal Team */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-16" id="contact">
            <div className="max-w-3xl mx-auto text-center p-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 optimal-text-wrap">
                Legal <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Support</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Have questions about our legal documents or need legal assistance? Our legal team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="mailto:legal@collabuzz.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Legal Team
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="tel:+918088081498">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Support
                  </Link>
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <strong>Legal Email:</strong><br />
                  legal@collabuzz.com
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <strong>Response Time:</strong><br />
                  Within 48 hours
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <strong>Office Hours:</strong><br />
                  Mon-Fri, 9 AM - 6 PM IST
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
}