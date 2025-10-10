import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ArrowRight, PenTool, Calendar, TrendingUp, BookOpen, Users, Lightbulb } from "lucide-react";
import { GlareCard } from "@/components/ui/glare-card";

export const metadata = {
  title: "Attenomy | Blog",
  description: "Stay tuned for insightful articles, industry trends, and expert perspectives from Attenomy - coming soon.",
};

export default function Blog() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto py-20 px-8">
        <div className="text-center space-y-8 py-20">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold mb-4">
            <PenTool className="w-4 h-4 mr-2" />
            Knowledge Hub
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Insights That{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Inspire
            </span>
            <br />
            Innovation
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're curating a knowledge platform filled with cutting-edge insights,
            industry analysis, and transformative ideas to fuel your digital journey.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="group">
              Get Notified
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              View Topics
            </Button>
          </div> */}
        </div>
      </div>

      {/* Coming Soon Articles 
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Thought Leadership in Development
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our experts are preparing insightful content across various technology domains 
              to keep you at the forefront of digital innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                  </div>
                  <Badge variant="outline" className="text-xs">Industry Trends</Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  The Future of AI in Enterprise
                </CardTitle>
                <CardDescription>
                  Exploring how artificial intelligence is reshaping business operations and strategy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Coming Soon</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Q1 2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-5 h-5 text-green-500" />
                  </div>
                  <Badge variant="outline" className="text-xs">Innovation</Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  Digital Transformation Strategies
                </CardTitle>
                <CardDescription>
                  Proven frameworks for successful digital transformation in modern organizations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Coming Soon</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Q1 2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-5 h-5 text-purple-500" />
                  </div>
                  <Badge variant="outline" className="text-xs">Tutorials</Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  Cloud Architecture Best Practices
                </CardTitle>
                <CardDescription>
                  Essential patterns and anti-patterns for building scalable cloud infrastructure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Coming Soon</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Q1 2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
*/}
      {/* Blog Categories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Content Categories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dive deep into specialized topics that matter to technology leaders and innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                label: "Industry Trends",
                count: "12+ articles",
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5" />
                  </svg>
                )
              },
              {
                icon: Lightbulb,
                label: "Innovation",
                count: "8+ articles",
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                  </svg>
                )
              },
              {
                icon: BookOpen,
                label: "Tutorials",
                count: "15+ articles",
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                  </svg>
                )
              },
              {
                icon: Users,
                label: "Leadership",
                count: "10+ articles",
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                    <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                  </svg>
                )
              }
            ].map((category, index) => (
              <GlareCard key={index} className="flex flex-col items-center justify-center py-8 px-6 cursor-pointer group">
  <div className="mb-4">
    {category.svg}
  </div>
  <h3 className="font-bold text-xl text-foreground mb-2 text-center">{category.label}</h3>
  <p className="text-foreground/50 text-sm text-center mb-4">{category.count}</p>
  <div className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
    <svg 
      className="w-4 h-4 text-foreground/60 group-hover:text-primary transition-colors duration-300" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M14 5l7 7m0 0l-7 7m7-7H3" 
      />
    </svg>
  </div>
</GlareCard>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA 
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <PenTool className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Never Miss an Insight
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join our newsletter and be the first to access our expert content when we launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
*/}
      <Footer />
    </main>
  );
}