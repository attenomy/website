import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ArrowRight, Sparkles, Zap, Rocket } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";
import { Newsletter } from "@/components/Newsletter";
import { Hero } from "@/components/products/Hero";
import ProductsList from "@/components/products/ProductsList";
import { FAQ } from "@/components/FAQ";


export const metadata = {
  title: "Attenomy | Our Products",
  description: "Discover Attenomy's innovative product suite - coming soon to transform your experience.",
  alternates: {
    canonical: "/products",
  },
};

export default function Products() {
  const portfolioItems = [
    {
      id: 1,
      title: "Coming Soon App",
      code: "Soon Industry",
      image: "/icons/placeholder-icon.png",
      description: "Soon Solution"
    }
  ];

  return (
    <>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://attenomy.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://attenomy.com/products"
              }
            ]
          })
        }}
      />
      <main className="min-h-screen bg-background">
      <Navbar />

      < Hero />
      < ProductsList />
      < Newsletter />
      < FAQ />

      <Footer />
    </main>
    </>
  );
}