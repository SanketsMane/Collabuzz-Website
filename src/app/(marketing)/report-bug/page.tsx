import { Metadata } from "next";
import { Bug, Send, Upload, MessageSquare, AlertTriangle, CheckCircle, Shield, Zap, Smartphone, User, Palette, Cog } from "lucide-react";
import { Wrapper, Container } from "@/components";
import SectionBadge from "@/components/ui/section-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Report a Bug - Collabuzz",
  description: "Report bugs and technical issues on Collabuzz platform. Help us improve your experience by reporting any problems you encounter.",
};

export default function ReportBugPage() {
  const bugTypes = [
    {
      type: "UI/UX Issue",
      description: "Layout problems, broken designs, or user interface issues",
      icon: Palette,
      priority: "Medium",
      color: "from-blue-500 to-cyan-500"
    },
    {
      type: "Functionality Bug",
      description: "Features not working as expected or throwing errors",
      icon: Cog,
      priority: "High",
      color: "from-red-500 to-pink-500"
    },
    {
      type: "Performance Issue",
      description: "Slow loading times, lag, or timeout problems",
      icon: Zap,
      priority: "Medium",
      color: "from-yellow-500 to-orange-500"
    },
    {
      type: "Security Concern",
      description: "Potential security vulnerabilities or data issues",
      icon: Shield,
      priority: "Critical",
      color: "from-purple-500 to-violet-500"
    },
    {
      type: "Mobile App Bug",
      description: "Issues specific to mobile application experience",
      icon: Smartphone,
      priority: "High",
      color: "from-green-500 to-emerald-500"
    },
    {
      type: "Account/Login Issue",
      description: "Problems with authentication, passwords, or account access",
      icon: User,
      priority: "High",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const reportingTips = [
    {
      title: "Be Specific",
      description: "Provide detailed steps to reproduce the issue",
      icon: CheckCircle
    },
    {
      title: "Include Screenshots",
      description: "Visual evidence helps us understand the problem faster",
      icon: Upload
    },
    {
      title: "Browser/Device Info",
      description: "Tell us what browser, device, and OS you're using",
      icon: MessageSquare
    },
    {
      title: "Expected vs Actual",
      description: "Describe what should happen vs what actually happens",
      icon: AlertTriangle
    }
  ];

  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      {/* Hero Section */}
      <Wrapper>
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[100vh]" />
        
        <Container>
          <div className="flex flex-col items-center justify-center py-20 h-full">
            <SectionBadge title="Support" />
            
            <div className="flex flex-col items-center mt-6 md:mt-8 max-w-4xl w-11/12 md:w-full px-4 md:px-0">
              <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl leading-tight md:!leading-snug font-semibold text-center">
                <span className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl">🐛</span> <span className="bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">Report a Bug & Help Us Improve</span> <span className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl">✨</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-foreground/80 mt-4 md:mt-6 text-center max-w-3xl px-2 md:px-0">
                Found something that's not working right? 🤔 Help us make Collabuzz better by reporting bugs! 🚀 Your feedback is invaluable in creating the perfect influencer marketing experience. 💪
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-6 md:mt-8 w-full">
                <Button asChild size="lg" className="w-full sm:w-auto min-w-[140px]">
                  <Link href="#report-form">Report Bug</Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="w-full sm:w-auto min-w-[140px]">
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Bug Report Form */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Submit Report" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              🔧 Help Us Fix It Together
            </h2>
            <p className="text-muted-foreground mt-6">
              Fill out the form below with as much detail as possible
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="w-full max-w-4xl mx-auto">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      className="h-12"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Bug Title *
                  </label>
                  <Input
                    type="text"
                    placeholder="Brief description of the issue"
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Detailed Description *
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Please provide detailed steps to reproduce the issue, what you expected to happen, and what actually happened..."
                    required
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Browser/Device
                    </label>
                    <Input
                      type="text"
                      placeholder="Chrome, Safari, Mobile App, etc."
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Priority Level
                    </label>
                    <select className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="low">Low - Minor issue</option>
                      <option value="medium">Medium - Affects functionality</option>
                      <option value="high">High - Major problem</option>
                      <option value="critical">Critical - System breaking</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Attach Screenshots/Files
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors bg-card/30">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Drag and drop files here, or click to browse</p>
                    <p className="text-sm text-muted-foreground/60">PNG, JPG, PDF up to 10MB each</p>
                    <input type="file" className="hidden" multiple accept=".png,.jpg,.jpeg,.pdf" />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Bug Report
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Bug Types */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
        <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
        
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Bug Categories" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              🎯 Common Issue Types
            </h2>
            <p className="text-muted-foreground mt-6">
              Help us categorize your issue for faster resolution
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
              {bugTypes.map((bug, index) => {
                const IconComponent = bug.icon;
                return (
                  <div key={index} className="group flex flex-col items-start px-6 py-8 border border-border rounded-lg bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105">
                    <div className={`flex items-center justify-center mb-6 w-16 h-16 rounded-xl bg-gradient-to-r ${bug.color} shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center justify-between w-full mb-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {bug.type}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        bug.priority === 'Critical' ? 'bg-red-500/10 text-red-400' :
                        bug.priority === 'High' ? 'bg-orange-500/10 text-orange-400' :
                        'bg-yellow-500/10 text-yellow-400'
                      }`}>
                        {bug.priority}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-start">
                      {bug.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Reporting Tips */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center mb-12">
            <SectionBadge title="Pro Tips" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-center px-4 md:px-0">
              💡 Effective Bug Reporting
            </h2>
            <p className="text-muted-foreground mt-6">
              Follow these guidelines for faster resolution
            </p>
          </div>
        </Container>
        
        <Container>
          <div className="flex flex-col items-center justify-center py-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8">
              {reportingTips.map((tip, index) => {
                const IconComponent = tip.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{tip.title}</h3>
                    <p className="text-muted-foreground">{tip.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Support CTA */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Immediate Help? 🚨
            </h2>
            <p className="text-muted-foreground mb-8">
              For urgent issues or if you need immediate assistance, contact our support team directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Live Chat Support</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="mailto:support@collabuzz.com">Email Support</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
}