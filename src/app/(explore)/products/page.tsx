import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ArrowRight, Sparkles, Zap, Rocket } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";


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

      {/* Hero Section */}
      <div className="max-w-6xl py-20 mx-auto px-8">
        <div className="text-center space-y-8 py-20">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Innovation in Progress
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Something{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Amazing
            </span>
            <br />
            is Coming
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're crafting revolutionary solutions that will redefine how businesses
            leverage technology. Stay tuned for what's next.
          </p>
        </div>
      </div>

      {/* Portfolio Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            {/* <Badge variant="outline" className="px-4 py-2 text-sm font-semibold mb-4">
              Our Work
            </Badge> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our innovative projects and cutting-edge solutions that are shaping the future of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {portfolioItems.map((item) => (
              <CometCard key={item.id}>
                <button
                  type="button"
                  className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-background p-2 saturate-0 hover:saturate-100 transition-all duration-300 group"
                  aria-label={`View ${item.title}`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "none",
                    opacity: 1,
                  }}
                >
                  <div className="mx-2 flex-1">
                    <div className="relative mt-2 aspect-[1/1] w-full overflow-hidden rounded-[16px]">
                      <img
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover contrast-75 group-hover:contrast-100 group-hover:scale-105 transition-all duration-500"
                        alt={item.title}
                        src={item.image}
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                          opacity: 1,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                    <div className="text-xs text-foreground">{item.title}</div>
                    <div className="text-xs text-foreground opacity-75">{item.code}</div>
                  </div>
                </button>
              </CometCard>
            ))}
          </div>
        </div>
      </section>




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

      
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Be the First to Know
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join our waiting list and get exclusive early access when we launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="whitespace-nowrap">
                  Notify Me
                  <ArrowRight className="ml-2 w-4 h-4" />
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