import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ArrowRight, Sparkles, Zap, Rocket } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";
import { Newsletter } from "@/components/landing/Newsletter";
import { Hero } from "@/components/products/Hero";
import ProductsList from "@/components/products/ProductsList";


export const metadata = {
  title: "Attenomy | Our Products",
  description: "Discover Attenomy's innovative product suite - coming soon to transform your digital experience.",
};

export default function Products() {
  const portfolioItems = [
    {
      id: 1,
      title: "Coming Soon App",
      code: "Soon Industry",
      image: "placeholder-icon.png",
      description: "Soon Solution"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <Hero />

      < ProductsList />




      {/* 
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary Products in Development
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our team is working tirelessly to bring you cutting-edge solutions 
              that will transform your digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI-Powered Platform</h3>
                <p className="text-muted-foreground">
                  Intelligent solutions that learn and adapt to your business needs in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Enterprise Suite</h3>
                <p className="text-muted-foreground">
                  Comprehensive tools designed for scalability and enterprise-grade performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation Hub</h3>
                <p className="text-muted-foreground">
                  Next-generation technology stack pushing the boundaries of what's possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      */}

      < Newsletter />

      <Footer />
    </main>
  );
}