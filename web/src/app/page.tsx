import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import { Partners } from "@/components/services/Partners";
import { Reviews } from "@/components/services/Reviews";
import Footer from "@/components/landing/footer";
import { Newsletter } from "@/components/Newsletter";
import { FAQ } from "@/components/FAQ";
import { ProductsCall } from "@/components/landing/ProductsCall";
import { ServicesCall } from "@/components/landing/ServicesCall";
import { BlogCall } from "@/components/landing/BlogCall";

export const metadata = {
  title: "Attenomy | Developing Innovative Solutions for an Ever-Changing World",
  description: "Developing innovative solutions for an ever-changing world. Transforming ideas into reality with cutting-edge technology.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <Hero />

      {/* SEO Content Section: Rich paragraphs & internal links for search crawlers */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 dark:from-white dark:via-neutral-200 dark:to-neutral-400">
          Pioneering Next-Generation AI & Enterprise Software
        </h2>
        <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 max-w-3xl mx-auto">
          Attenomy is an enterprise technology company dedicated to building transformative digital products, artificial intelligence automation systems, and scalable HR talent ecosystems. We empower modern organizations to streamline operations, optimize digital workflows, and drive innovation with cutting-edge web applications.
        </p>
        <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 max-w-3xl mx-auto">
          Our product ecosystem includes intelligent ATS candidate evaluation tools, instant credential verification infrastructure, and custom cloud software tailored for high-growth enterprises.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link href="/products" className="px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-medium hover:opacity-90 transition">
            Explore Products
          </Link>
          <Link href="/services" className="px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition">
            Our Services
          </Link>
          <Link href="/about" className="px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition">
            About Attenomy
          </Link>
          <Link href="/blog" className="px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition">
            Latest Insights
          </Link>
        </div>
      </section>

      <ProductsCall />
      <ServicesCall />
      <BlogCall />

      <Newsletter />
      <FAQ />

      <Footer />
    </main>
  );
}
