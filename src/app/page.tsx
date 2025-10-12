import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import { Partners } from "@/components/services/Partners"
import { Reviews } from "@/components/services/Reviews"
import { ProductsSuite } from "@/components/landing/ProductsSuite";
import ServicesSuite from "@/components/landing/ServicesSuite";
import Footer from "@/components/landing/footer";
import { Features } from "@/components/services/Features";
import { Newsletter } from "@/components/landing/Newsletter";

export const metadata = {
  title: "Attenomy | Where Ideas & Innovation Meet!",
  description: "Developing innovative solutions for an ever-changing world. Transforming ideas into reality with cutting-edge technology.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />

      {/* <Partners /> Build immediate trust */}
      {/* <ProblemSolution /> Show you understand pain points */}
      {/*  <LiveDemo /> Let them experience value */}
      {/* <CaseStudies />  Prove with real results */}

      

      {/* <ProductFeatures /> Detailed benefits */}
      {/* <Reviews /> */}
      {/*  <FAQ /> Address objections */}
      <Newsletter /> {/* Capture leads */}

      {/* <ProductsSuite />  */}
      {/* <ServicesSuite /> */}


      <Footer />
    </main>
  );
}

/* 

- Coming Soon / Maintainance

Generate me a landing page in nextjs typescript. The landing page must have the following components.

- Header. The header has logo (is in public/attenomy.svg), the company name "Attenomy" on the left and /products and /services navigation buttons on the right.
- Hero. The hero section features the tagline "Developing innovative solutions for an everchanging world!" and has a 3d tech/globe/atom element.
- Partner Brands is a list of partner brands scrolling horizontally.

- Product Suite is a list of different apps icons each in a cube flowing / suspended in 3d / hover anim
- Services Suite has a bento box showcasing services and descriptions 
- Footer has logo and name following by social media icons in first column and in subsequent columns...
Company - Home About Contact Careers 
Explore - Products Services Blog
Legal - Terms Privacy Cookies

I want you to use the theme from existing globals.css. like foreground, background, etc. I want a super modern website that has interaction at every element and many animations. Someone seeing it should feel it is the pinnacle of frontend design. Some inspiration: https://resend.com/. You may use anything you want. I want you to keep each of the component of the landing page in a seperate file and import in the root page.tsx. 

- Reviews is 
*/