"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  const { theme } = useTheme();

  return (
    <section className="py-20 bg-zinc-100/50 dark:bg-zinc-900/10">
      <div className="max-w-4xl mx-auto text-center px-6">
        <Card className="rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] relative overflow-hidden">
          {/* Shine Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute top-0 left-0 w-30 h-full bg-gradient-to-r from-transparent via-foreground/5 to-transparent transform -skew-x-12 animate-slow-shine"></div>
          </div>

          <CardContent className="p-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Be among the first to experience our comprehensive service offerings.
              Schedule a preliminary consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="xl" className="group relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 hover:from-primary hover:via-primary/80 hover:to-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-95 dark:from-primary/90 dark:via-primary/80 dark:to-primary/70 dark:hover:from-primary dark:hover:via-primary/90 dark:hover:to-primary/80">
                  <span className="relative z-10 flex items-center">
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300 ease-out" />
                  </span>
                  {/* Bottom line - light mode: white shine, dark mode: subtle glow */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 dark:via-white/30" />

                  {/* Top overlay - light mode: white highlight, dark mode: subtle brightness */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-white/10" />

                  {/* Additional dark mode specific shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 opacity-0 group-hover:opacity-100 dark:via-white/10" />
                </Button>
              </Link>
              {/* <Button size="lg" variant="outline">
            Download Brochure
          </Button> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

