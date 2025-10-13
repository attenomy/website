import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/footer";

import { Hero } from "@/components/services/Hero"
import Methodology  from "@/components/services/Methodology"
import { Reviews } from "@/components/services/Reviews"
import { Partners } from "@/components/services/Partners"
import { CTA } from "@/components/services/CTA"
import { useTheme } from "next-themes";
import { ServicesList } from "@/components/services/ServicesList";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/services/Features";

export const metadata = {
  title: "Attenomy | Our Services",
  description: "Discover Attenomy's comprehensive service offerings that will elevate your business to new heights.",
};

export default function Services() {


  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      {/* */}


      < Hero />   
      {/* < Partners />  Add Real Businesses */}
      < ServicesList />
      < Methodology />
      < Features />
      {/* < Reviews />  Add Real Reviews */}
      < CTA />      
      < FAQ />


      {/* */}
      <Footer />
    </main>
  );
}