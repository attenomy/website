

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
import { Newsletter } from "@/components/Newsletter";
import { Hero } from "@/components/about/Hero";
import { Mission } from "@/components/about/Mission";
import { GlobalTeam } from "@/components/about/GlobalTeam";
import { CoreValues } from "@/components/about/CoreValues";
import { FAQ } from "@/components/FAQ";

export const metadata = {
  title: "About Us | Attenomy",
  description: "Discover Attenomy's mission and vision transforming ideas into reality with cutting-edge technology.",
};


export default async function About() {
  return (
    <>
      <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
        <Navbar />


        < Hero />
        < Mission />
        < CoreValues />
        < GlobalTeam />
        < Newsletter />
        < FAQ />

        <Footer />
      </main>
    </>
  );
}