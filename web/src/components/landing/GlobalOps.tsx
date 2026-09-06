"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function Features() {
  return (
    <div className="min-h-screen w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex items-center justify-center">
            <TextRevealCard
              text="We handle the  code."
              revealText="You focus on growth."
            >
              <TextRevealCardTitle>
                Complexity into clarity.
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                Let us manage the technical details while you scale your business effortlessly.
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>

          {/* Card 2 */}
          <div className="flex items-center justify-center">
            <TextRevealCard
              text="Built for performance."
              revealText="Engineered for scale."
            >
              <TextRevealCardTitle>
                High-performance solutions
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                Optimized systems that grow with your needs and handle increasing demands.
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>

          {/* Card 3 */}
          <div className="flex items-center justify-center">
            <TextRevealCard
              text="Secure by design."
              revealText="Trusted by default."
            >
              <TextRevealCardTitle>
                Enterprise-grade security
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                Built-in security measures to protect your data and ensure compliance.
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>

          {/* Card 4 */}
          <div className="flex items-center justify-center">
            <TextRevealCard
              text="Adaptable frameworks."
              revealText="Future-proof solutions."
            >
              <TextRevealCardTitle>
                Flexible architecture
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                Modular designs that adapt to changing requirements and technologies.
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>

          {/* Card 5 */}
          <div className="flex items-center justify-center">
            <TextRevealCard
              text="Intelligent automation."
              revealText="Smart workflows."
            >
              <TextRevealCardTitle>
                AI-powered efficiency
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                Leverage artificial intelligence to automate processes and enhance productivity.
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>

          {/* Card 6 */}
          <div className="flex items-center justify-center">
            <TextRevealCard
              text="Seamless integration."
              revealText="Unified ecosystem."
            >
              <TextRevealCardTitle>
                Connected experiences
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                Integrate seamlessly with your existing tools and create cohesive workflows.
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>
        </div>

        
      </div>
    </div>
  );
}