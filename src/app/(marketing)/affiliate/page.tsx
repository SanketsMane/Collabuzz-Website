import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { Wrapper, Container } from "@/components";
import { Users, DollarSign, TrendingUp, Award, Star, Handshake, Target, Zap, Mail, Phone, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliate Partnership Program - Collabuzz",
  description: "Join the Collabuzz Affiliate Program and earn commissions by referring brands and creators to India's leading influencer marketing platform.",
};

export default function AffiliatePage() {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      {/* Hero Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <Container>
          <div className="flex flex-col items-center justify-center py-20 w-full">
            <div className="max-w-md mx-auto text-start md:text-center">
              <SectionBadge title="Affiliate Program" />
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
                💰 Earn with
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Affiliate Program
                </span>
              </h1>
              <p className="text-muted-foreground mt-6 text-center px-4 md:px-0 leading-relaxed optimal-text-wrap max-w-3xl mx-auto">
                Partner with India's leading influencer marketing platform and earn substantial commissions by referring brands and creators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" asChild>
                  <Link href="#benefits">
                    <Handshake className="w-5 h-5 mr-2" />
                    Join Program
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#commission">View Commission</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Stats Section */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Partner With <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Collabuzz?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <div className="flex flex-col items-center text-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2">₹50L+</div>
                <div className="text-muted-foreground">Monthly Payouts</div>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2">10K+</div>
                <div className="text-muted-foreground">Active Affiliates</div>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2">25%</div>
                <div className="text-muted-foreground">Commission Rate</div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Commission Structure */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-16" id="commission">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Commission <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Structure</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="p-8 bg-muted/20 rounded-lg border hover:bg-muted/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Brand Referrals</h3>
                <p className="text-muted-foreground mb-6">Earn for every brand you bring to our platform</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-muted">
                    <span className="text-muted-foreground">Startup Plans</span>
                    <span className="font-semibold text-primary">20%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-muted">
                    <span className="text-muted-foreground">Business Plans</span>
                    <span className="font-semibold text-primary">25%</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Enterprise Plans</span>
                    <span className="font-semibold text-primary">30%</span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-muted/20 rounded-lg border hover:bg-muted/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Creator Referrals</h3>
                <p className="text-muted-foreground mb-6">Earn for every creator who joins through you</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-muted">
                    <span className="text-muted-foreground">Per Creator</span>
                    <span className="font-semibold text-primary">₹500</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-muted">
                    <span className="text-muted-foreground">Monthly Active</span>
                    <span className="font-semibold text-primary">₹200</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Campaign Complete</span>
                    <span className="font-semibold text-primary">₹1000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Benefits Section */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-16" id="benefits">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Affiliate <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Benefits</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              <div className="flex flex-col items-center text-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">High Commissions</h3>
                <p className="text-muted-foreground">Industry-leading commission rates up to 30%</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quick Payouts</h3>
                <p className="text-muted-foreground">Get paid within 7 days of successful referral</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Bonuses</h3>
                <p className="text-muted-foreground">Extra rewards for top-performing affiliates</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Marketing Support</h3>
                <p className="text-muted-foreground">Promotional materials and marketing assets</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-time Tracking</h3>
                <p className="text-muted-foreground">Live dashboard to monitor your performance</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
                <p className="text-muted-foreground">Personal affiliate manager for assistance</p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* How It Works */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How It <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Works</span>
            </h2>
            <div className="space-y-8 w-full max-w-3xl">
              <div className="flex items-start space-x-6 p-6 bg-muted/20 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                  <p className="text-muted-foreground">Complete our simple application form and get approved within 24 hours.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 bg-muted/20 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Promote</h3>
                  <p className="text-muted-foreground">Share your unique referral link through your network and marketing channels.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 bg-muted/20 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Earn</h3>
                  <p className="text-muted-foreground">Get paid for every successful referral that converts to our platform.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Requirements */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Affiliate <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Requirements</span>
            </h2>
            <div className="w-full max-w-3xl bg-muted/20 rounded-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="p-1 bg-green-500 text-white rounded-full mr-3">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>Strong network in digital marketing or business</span>
                </li>
                <li className="flex items-center">
                  <div className="p-1 bg-green-500 text-white rounded-full mr-3">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>Active on social media or professional networks</span>
                </li>
                <li className="flex items-center">
                  <div className="p-1 bg-green-500 text-white rounded-full mr-3">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>Experience in affiliate marketing (preferred)</span>
                </li>
                <li className="flex items-center">
                  <div className="p-1 bg-green-500 text-white rounded-full mr-3">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>Commitment to quality referrals</span>
                </li>
                <li className="flex items-center">
                  <div className="p-1 bg-green-500 text-white rounded-full mr-3">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>Ability to provide marketing insights</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* CTA Section */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-16">
            <div className="max-w-3xl mx-auto text-center p-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Earning?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of affiliates already earning with Collabuzz. Apply now and start your journey to success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="mailto:affiliates@collabuzz.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Apply Now - Free!
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="tel:+918088081498">
                    <Phone className="w-5 h-5 mr-2" />
                    Speak with Team
                  </Link>
                </Button>
              </div>
              <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Affiliate Support:</strong> affiliates@collabuzz.com | 
                  <strong> Phone:</strong> +91-8088081498 | 
                  <strong> Response Time:</strong> Within 24 hours
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
}