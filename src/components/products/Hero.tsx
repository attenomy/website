"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Goal } from "lucide-react";
import { useTheme } from "next-themes";
import { SparklesCore } from "@/components/ui/sparkles";
import { FlipWords } from "../ui/flip-words";

export function Hero() {
    const words = ["innovative", "creative", "revolutionary", "modern"];
    const { theme } = useTheme();

    return (
        <div className="mx-auto py-20 pt-28 px-8 relative">
            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={25}
                className="w-full h-full absolute inset-0"
                key={theme} // Force re-render when theme changes
            />

            <div className="text-center space-y-8 py-20 relative z-10">
                {/* <Badge variant="secondary" className="relative px-4 py-2 text-sm font-semibold mb-4 overflow-hidden">
                    <Goal className="w-4 h-4 mr-2" />
                    Transforming Processes
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 left-0 w-30 h-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent transform -skew-x-12 animate-slow-shine"></div>
                    </div>
                </Badge> */}

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold max-w-7xl mx-auto relative z-20 pb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                    Crafting{" "}
                    <span className="hidden xl:inline lg:inline">
                        <FlipWords words={words} />
                    </span>
                    <span className="inline xl:hidden lg:hidden">
                        revolutionary
                    </span>{" "}
                    applications!
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    See the revolutionary apps and solutions we are crafting that will redefine how technology is leveraged. Stay tuned for what's next.
                </p>

                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
      <Button size="lg" className="group">
        Get Early Access
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
      <Button size="lg" variant="outline">
        Schedule Consultation
      </Button>
    </div> */}
            </div>
        </div>
    );
}

