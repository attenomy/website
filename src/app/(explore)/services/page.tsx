import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ArrowRight, Goal, Cloud, Code, BarChart3, Users, Shield } from "lucide-react";
import { Reviews } from "@/components/landing/Reviews"

export const metadata = {
  title: "Attenomy | Our Services",
  description: "Discover Attenomy's comprehensive service offerings - coming soon to elevate your business to new heights.",
};

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto py-20 px-8">
        <div className="text-center space-y-8 py-20">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold mb-4">
            <Goal className="w-4 h-4 mr-2" />
            Transforming Processes
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Elevating Your{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Digital
            </span>
            <br />
            Journey
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're architecting a comprehensive service portfolio designed to transform 
            your business operations and drive unprecedented growth.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="group">
              Get Early Access
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div> */}
        </div>
      </div>

      <Reviews />

      {/* Service Categories
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Service Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our expert team is building specialized services to address every aspect 
              of your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cloud Transformation</h3>
                <p className="text-muted-foreground">
                  End-to-end cloud migration, architecture design, and optimization services for scalable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Custom Development</h3>
                <p className="text-muted-foreground">
                  Bespoke software solutions tailored to your unique business requirements and challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data & Analytics</h3>
                <p className="text-muted-foreground">
                  Advanced data strategy, business intelligence, and actionable insights implementation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Digital Consulting</h3>
                <p className="text-muted-foreground">
                  Strategic technology advisory and digital roadmap development for sustainable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
                <p className="text-muted-foreground">
                  Comprehensive cybersecurity solutions and regulatory compliance framework implementation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-8 h-8 text-indigo-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Managed Services</h3>
                <p className="text-muted-foreground">
                  24/7 monitoring, maintenance, and optimization services for your digital infrastructure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
       */}

      {/* Process Section 
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Service Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Discovery & Analysis", desc: "Deep dive into your business needs and challenges" },
              { step: "02", title: "Strategy & Planning", desc: "Customized roadmap and solution architecture" },
              { step: "03", title: "Execution & Delivery", desc: "Agile implementation with continuous collaboration" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      */}

      {/* CTA Section 
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Be among the first to experience our comprehensive service offerings. 
                Schedule a preliminary consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Book Consultation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Download Brochure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}