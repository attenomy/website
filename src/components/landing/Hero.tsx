"use client";
import { Cover } from "@/components/ui/cover";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function Hero() {
  return (
    <>
      <section className="relative pt-160 flex items-center justify-center">

        <div className="absolute inset-0 flex items-center justify-center text-white font-bold px-4 ">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold max-w-7xl mx-auto relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              Developing <Cover>innovative solutions</Cover> for an ever-changing world!
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mt-8 max-w-3xl mx-auto text-neutral-700 dark:text-neutral-300 font-normal">
              Transforming ideas into reality with cutting-edge technology and creative thinking.
            </p>
          </div>
        </div>

      </section>
    </>
  );
}