

import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/Navbar";

import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";
import { AnimatedText } from "@/components/ui/animated-text";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";



import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Lightbulb, Rocket, Target, Zap } from "lucide-react";

export const metadata = {
  title: "About Us | Attenomy",
  description: "Discover Attenomy's mission and vision transforming ideas into reality with cutting-edge technology.",
};


export default async function About() {
  return (
    <>
      <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
        <Navbar />

        {/* Hero Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-24 pt-32 md:pt-40">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="px-4 py-1 text-sm font-semibold">
              Innovating Tomorrow, Today
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Transforming Vision into
              <span className="block text-primary">Digital Reality</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Attenomy bridges the gap between ambitious ideas and cutting-edge solutions.
              We architect the future by transforming complex challenges into elegant digital experiences.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 relative overflow-hidden">
          <BackgroundRippleEffect />
          <div className="mx-auto max-w-7xl px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 bg-background/80 backdrop-blur-sm">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                  <CardDescription className="text-lg">
                    To democratize access to cutting-edge technology solutions, empowering businesses
                    of all sizes to innovate, adapt, and thrive in the digital age.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We believe that transformative technology should be accessible, intuitive, and
                    purpose-driven. Our mission is to break down barriers to digital excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 bg-background/80 backdrop-blur-sm">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                  <CardDescription className="text-lg">
                    A world where technology seamlessly enhances human potential and drives
                    meaningful progress across industries and communities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We envision a future where digital transformation is not just about technology,
                    but about creating sustainable value and positive impact for generations to come.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="px-4 py-1 text-sm font-semibold mb-4">
                Our Principles
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values That Drive Us</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These fundamental beliefs shape every solution we create and every partnership we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-5 h-5 text-red-500" />
                  </div>
                  <CardTitle>Innovation First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We constantly push boundaries, exploring emerging technologies and
                    novel approaches to solve complex problems with elegant simplicity.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-5 h-5 text-green-500" />
                  </div>
                  <CardTitle>Excellence in Execution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every project receives our unwavering commitment to quality, precision,
                    and attention to detail from concept to deployment.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-5 h-5 text-purple-500" />
                  </div>
                  <CardTitle>Impact Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We measure success by the tangible value we create for our clients
                    and the positive change we enable in the digital landscape.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="px-4 py-1 text-sm font-semibold">
                  Our Methodology
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Building the Future, One Innovation at a Time</h2>
                <p className="text-muted-foreground text-lg">
                  Our approach combines strategic thinking with technical excellence,
                  ensuring that every solution not only meets today's needs but anticipates tomorrow's challenges.
                </p>
                <div className="space-y-4">
                  {[
                    "Strategic digital transformation consulting",
                    "Cutting-edge technology implementation",
                    "Scalable architecture design",
                    "Continuous innovation and optimization"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                {/* <Button size="lg" className="group">
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button> */}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Digital Innovation", value: "100+" },
                  { title: "Projects Delivered", value: "50+" },
                  { title: "Technologies", value: "25+" },
                  { title: "Industries Served", value: "15+" }
                ].map((stat, index) => (
                  <Card key={index} className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.title}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Card className="border-0 shadow-1xl bg-gradient-to-r from-primary/5 to-primary/10">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Vision?</h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Join the forward-thinking businesses that trust Attenomy to bring their most ambitious ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="default" className="group">
                    Start a Project
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section> */}




        <div className="py-20 dark:bg-black bg-white w-full px-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
              Global{" "}
              <AnimatedText
                text="Team"
                className="text-neutral-400"
              />
            </p>
            <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
              A borderless collective of innovators spanning continents and timezones. United by technology, driven by purpose, and connected by a shared vision for transformative digital solutions.
            </p>
          </div>
          <WorldMap
            dots={[
              {
                start: { lat: 60.2008, lng: -149.4937 }, // Alaska (Fairbanks) -12
                end: { lat: 25.7749, lng: -122.4194 },   // San Francisco -12
              },
              {
                start: { lat: 25.7749, lng: -122.4194 }, // San Francisco -12
                end: { lat: 28.7128, lng: -74.0060 },    // New York -12
              },
              {
                start: { lat: 28.7128, lng: -74.0060 },  // New York -12
                end: { lat: -19.7975, lng: -47.8919 },   // Brasília -12
              },
              {
                start: { lat: -19.7975, lng: -47.8919 }, // Brasília -12
                end: { lat: 43.5074, lng: -0.1278 },     // London -12
              },
              {
                start: { lat: 43.5074, lng: -0.1278 },   // London -12
                end: { lat: 40.1109, lng: 8.6821 },      // Frankfurt -12
              },
              {
                start: { lat: 40.1109, lng: 8.6821 },    // Frankfurt -12
                end: { lat: 14.0444, lng: 31.2357 },     // Cairo -12
              },
              {
                start: { lat: 14.0444, lng: 31.2357 },   // Cairo -12
                end: { lat: 7.2048, lng: 55.2708 },     // Dubai -12
              },
              {
                start: { lat: 7.2048, lng: 55.2708 },   // Dubai -12
                end: { lat: 5.0760, lng: 72.8777 },      // Mumbai -12
              },
              {
                start: { lat: 5.0760, lng: 72.8777 },    // Mumbai -12
                end: { lat: -14.6479, lng: 103.8198 },   // Singapore -12
              },
              {
                start: { lat: -14.6479, lng: 103.8198 }, // Singapore -12
                end: { lat: -53.8688, lng: 151.2093 },   // Sydney -12
              },
              {
                start: { lat: -53.8688, lng: 151.2093 }, // Sydney -12
                end: { lat: 23.6762, lng: 139.6503 },    // Tokyo -12
              },
              {
                start: { lat: 23.6762, lng: 139.6503 },  // Tokyo -12
                end: { lat: 19.2304, lng: 121.4737 },    // Shanghai -12
              },
              {
                start: { lat: 19.2304, lng: 121.4737 },  // Shanghai -12
                end: { lat: 47.7558, lng: 37.6173 },     // Moscow -12
              },
            ]}
          />
        </div>




        

        <Footer />

      </main>
    </>
  );
}