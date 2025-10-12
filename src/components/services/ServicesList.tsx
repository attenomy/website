"use client";

import React from "react";
import { useTheme } from "next-themes";
import { CometCard } from "../ui/comet-card";
import { Brain, Cloud, Code, BarChart3, Users, Shield, Settings, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

// Service data separated from component
const serviceItems = [
    {
        id: 1,
        title: "AI Automation",
        description: "Intelligent automation solutions leveraging artificial intelligence to streamline workflows and boost productivity",
        icon: Brain,
        color: "red",
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

export function ServicesList() {
    const { theme } = useTheme();

    return (
        <section className="py-20 px-6 bg-zinc-100/75 dark:bg-zinc-900/25">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-700 dark:from-neutral-800  dark:to-white leading-tight">
                        Comprehensive Service Solutions
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Our expert team offers specialized services to address every aspect
                        of your transformation journey.
                    </p>
                </div>

                <div className={
                    serviceItems.length === 1
                        ? "flex justify-center"
                        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                }>
                    {serviceItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <CometCard key={item.id}>
                                <button
                                    type="button"
                                    className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-1 border-foreground/50 dark:border-foreground/25 bg-background p-2 py-8 saturate-0 hover:saturate-100  group h-full max-w-md "
                                    aria-label={`View ${item.title}`}
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

                                    {/* Footer with Code 
                          <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono">
                            <div className="text-xs text-foreground/70">Learn more</div>
                            <div className="text-xs text-foreground/50">{item.code}</div>
                          </div> */}

                                    {/* Hover Arrow Indicator 
                          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowRight className="w-4 h-4 text-foreground/60" />
                          </div> */}
                                </button>
                            </CometCard>
                        );
                    })}
                </div>

                {/* CTA Section 
                <div className="text-center mt-12">
                  <Button size="lg" className="group">
                    Explore All Services
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div> */}
            </div>
        </section>
    );
}