"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { useTheme } from "next-themes";

const items = [
    {
        title: "What services do you offer?",
        content: "We provide comprehensive digital transformation services including web development, mobile applications, cloud solutions, AI integration, and ongoing technical support to help businesses scale efficiently.",
    },
    {
        title: "How long does a typical project take?",
        content: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, custom web applications 6-12 weeks, and enterprise solutions 3-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
        title: "Do you provide ongoing support?",
        content: "Yes, we offer various support packages including maintenance, updates, security monitoring, and technical assistance. Our support plans are tailored to your business needs and can scale as you grow.",
    },
    {
        title: "What technologies do you work with?",
        content: "We work with modern technologies including React, Next.js, Node.js, Python, AWS, Google Cloud, and various databases. We choose the best stack for your specific project requirements.",
    },
    {
        title: "Can you work with our existing team?",
        content: "Absolutely! We seamlessly integrate with your existing teams through collaborative tools and agile methodologies. We can augment your team or work as an independent unit based on your preference.",
    },
    {
        title: "What is your pricing structure?",
        content: "We offer flexible pricing models: fixed-price for well-defined projects, time-and-materials for evolving requirements, and dedicated team models for long-term partnerships. We provide transparent quotes with no hidden costs.",
    },
];

export function FAQ() {
    const { theme } = useTheme();

    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left side - Title and description */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-900 dark:via-neutral-300 dark:to-white">
                            Frequently Asked Questions (FAQs)
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Get answers to common questions about our digital transformation services,
                            project processes, and partnership opportunities. Can't find what you're looking for?
                            <span className="block mt-2 font-medium text-primary">
                                Email us directly for personalized assiatance:

                            </span>
                            <a
                                href="mailto:contact@attenomy.com"
                                className="text-primary/80 hover:underline font-medium"
                            >
                                contact@attenomy.com
                            </a>
                        </p>
                    </div>

                    {/* Right side - Accordion */}
                    <div className="w-full">
                        <Accordion
                            type="single"
                            collapsible
                            className="space-y-4"
                        >
                            {items.map(({ title, content }, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border-none rounded-lg px-6 bg-secondary relative w-full shrink-0 border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] hover:shadow-md transition-shadow duration-200"
                                >
                                    <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                                        {title}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                                        {content}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}