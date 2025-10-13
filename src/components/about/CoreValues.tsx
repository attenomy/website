"use client";

import React from "react";
import { useTheme } from "next-themes";
import { CometCard } from "../ui/comet-card";
import { Lightbulb, Zap, Globe } from "lucide-react";

// Core values data separated from component
const coreValues = [
  {
    id: 1,
    title: "Innovation First",
    description: "We constantly push boundaries, exploring emerging technologies and novel approaches to solve complex problems with elegant simplicity.",
    icon: Lightbulb,
    color: "red",
  },
  {
    id: 2,
    title: "Excellence in Execution",
    description: "Every project receives our unwavering commitment to quality, precision, and attention to detail from concept to deployment.",
    icon: Zap,
    color: "green",
  },
  {
    id: 3,
    title: "Impact Driven",
    description: "We measure success by the tangible value we create for our clients and the positive change we enable in the digital landscape.",
    icon: Globe,
    color: "purple",
  }
];

// Color mapping for icons
const colorClasses = {
  blue: "bg-blue-500/10 text-blue-500",
  green: "bg-green-500/10 text-green-500",
  purple: "bg-purple-500/10 text-purple-500",
  orange: "bg-orange-500/10 text-orange-500",
  red: "bg-red-500/10 text-red-500",
  indigo: "bg-indigo-500/10 text-indigo-500"
};

export function CoreValues() {
  const { theme } = useTheme();

  return (
    <section className="py-20 px-6 bg-zinc-100/75 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-foreground/50 dark:border-foreground/25 text-sm font-semibold mb-4">
            Our Principles
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-700 dark:from-neutral-800 dark:to-white leading-tight">
            Core Values That Drive Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These fundamental beliefs shape every solution we create and every partnership we build.
          </p>
        </div>

        <div className={
          coreValues.length === 1
            ? "flex justify-center"
            : "grid grid-cols-1 md:grid-cols-3 gap-8"
        }>
          {coreValues.map((item) => {
            const IconComponent = item.icon;
            return (
              <CometCard key={item.id}>
                <button
                  type="button"
                  className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-1 border-foreground/50 dark:border-foreground/25 bg-background p-2 py-8 saturate-0 hover:saturate-100 group h-full"
                  aria-label={`Learn more about ${item.title}`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "none",
                    opacity: 1,
                  }}
                >
                  {/* Icon Section */}
                  <div className="mx-2 mt-2">
                    <div className={`w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${colorClasses[item.color as keyof typeof colorClasses]}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 px-4 pb-2">
                    <h3 className="text-lg font-semibold mb-3 text-center text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm text-center leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </button>
              </CometCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}