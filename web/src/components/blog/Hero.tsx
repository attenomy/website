"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Goal } from "lucide-react";
import { useTheme } from "next-themes";
import { SparklesCore } from "@/components/ui/sparkles";
import { FlipWords } from "../ui/flip-words";

export function Hero() {
    const words = ["inspire", "cause", "influence", "incite"];
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

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold max-w-7xl mx-auto relative z-20 pb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                    Insights that{" "}
                    <span className="hidden xl:inline lg:inline">
                        <FlipWords words={words} />
                    </span>
                    <span className="inline xl:hidden lg:hidden">
                        inspire
                    </span>{" "}
                    innovation.
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Explore our curated knowledge platform filled with cutting-edge insights,
                    industry analysis, and transformative ideas to fuel your imagination.
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

