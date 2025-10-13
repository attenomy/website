"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Goal, Rocket, Target } from "lucide-react";
import { useTheme } from "next-themes";
import { SparklesCore } from "@/components/ui/sparkles";
import { FlipWords } from "../ui/flip-words";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";

export function Mission() {
    const words = ["building", "crafting", "imagining", "developing"];
    const { theme } = useTheme();

    return (
        <section className="py-20 relative overflow-hidden">
          <BackgroundRippleEffect />
          <div className="mx-auto max-w-7xl px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className=" hover:shadow-xl transition-all duration-300 group hover:scale-105 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] relative overflow-hidden">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                  <CardDescription className="text-lg">
                    To democratize access to cutting-edge technology solutions, empowering businesses
                    of all sizes to innovate, adapt, and thrive in the AI age.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We believe that transformative technology should be accessible, intuitive, and
                    purpose-driven. Our mission is to break down barriers to digital excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className=" hover:shadow-xl transition-all duration-300 group hover:scale-105 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] relative overflow-hidden">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                  <CardDescription className="text-lg">
                    A world where technology seamlessly enhances human potential and drives
                    meaningful progress across industries and communities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We envision a future where digital transformation is not just about technology,
                    but about creating sustainable value and positive impact for generations to come.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
    );
}

