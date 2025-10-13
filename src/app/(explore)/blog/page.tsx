import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/footer";
import { Hero } from "@/components/blog/Hero";
import { Newsletter } from "@/components/Newsletter";
import { FAQ } from "@/components/FAQ";
import { BlogCategories } from "@/components/blog/BlogCategories";
import { TopArticles } from "@/components/blog/TopArticles";

export const metadata = {
  title: "Attenomy | Blog",
  description: "Stay tuned for insightful articles, industry trends, and expert perspectives from Attenomy - coming soon.",
};

export default function Blog() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      
      < Hero />
      < TopArticles />
      < BlogCategories />
      < Newsletter />
      < FAQ />


      <Footer />
    </main>
  );
}