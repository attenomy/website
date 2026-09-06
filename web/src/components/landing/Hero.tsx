"use client";

import React from "react";
import { useTheme } from "next-themes";
import { StarsBackground } from "@/components/ui/stars-background";
import { Cover } from "@/components/ui/cover";
import { cn } from "@/lib/utils";
import { SparklesCore } from "../ui/sparkles";
import { FlipWords } from "../ui/flip-words";

export default function Hero() {
  const words = ["innovative", "creative", "transformative", "modern"];
  const { theme } = useTheme();

  return (
    <>
      <div className="xl:h-[40rem] h-[40rem] bg-zinc-100 dark:bg-zinc-950 flex flex-col items-center justify-center relative">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={25}
          className="w-full h-full absolute"
          
          key={theme} // Force re-render when theme changes
        />
        <div className="relative flex w-full items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold max-w-7xl mx-auto relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              Developing{" "}
              <span className="hidden xl:inline lg:inline">
                <FlipWords words={words} />
              </span>
              <span className="inline xl:hidden lg:hidden">
                innovative
              </span>{" "}
              solutions for an ever-changing world!
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mt-8 max-w-3xl mx-auto text-neutral-700 dark:text-neutral-300 font-normal">
              Transforming ideas into reality with cutting-edge technology and creative thinking.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}