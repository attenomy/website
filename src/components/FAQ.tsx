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
        title: "What AI automation services do you offer?",
        content: "We provide AI automation services built on proven technology we use ourselves. Our solutions include workflow automation, intelligent document processing, AI-powered customer engagement, and custom automation agents, all battle-tested in our own SaaS products.",
    },
    {
        title: "Do you actually use AI automation in your own products?",
        content: "Yes! Every AI service we offer is actively used and refined in our own SaaS products. This real-world testing ensures our solutions are practical, effective, and deliver measurable results before we recommend them to clients.",
    },
    {
        title: "How does running your own SaaS benefit your clients?",
        content: "Running our own SaaS products means we understand the challenges of product development, scaling, and customer retention firsthand. We bring this operational expertise to every client engagement, offering insights beyond just technical implementation.",
    },
    {
        title: "What's your approach to AI implementation?",
        content: "We follow a 'product-led' approach, implementing AI solutions that we would use ourselves. This means focusing on practical ROI, user experience, and sustainable scaling rather than just technical novelty.",
    },
    {
        title: "Can you help automate our specific business processes?",
        content: "Absolutely! We analyze your workflows through the lens of operational efficiency we've developed running our own products. We identify automation opportunities that deliver real business value, not just technical solutions.",
    },
    {
        title: "What makes your AI services different from other providers?",
        content: "We're practitioners, not just consultants. We face the same challenges you do, scaling, customer support, operational efficiency. Our AI solutions are born from solving real problems in our own business, making them more practical and effective.",
    },
    {
        title: "Do you offer ongoing support and improvements?",
        content: "Yes, and we treat client products with the same care as our own. As we improve our AI automation stack internally, those enhancements flow to our clients. It's a continuous improvement cycle that benefits everyone.",
    },
    {
        title: "What's your pricing structure?",
        content: "We offer project-based pricing for initial implementations and subscription models for ongoing AI services. Since we use these same services internally, we're focused on delivering value that justifies the investment.",
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