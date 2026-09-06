"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

interface ReviewItem {
    quote: string;
    name: string;
    title: string;
    rating?: number;
    link?: string; // Add this line
}

interface ReviewsProps {
    items?: ReviewItem[];
    direction?: "left" | "right";
    speed?: "slow" | "normal" | "fast";
    className?: string;
    showBackground?: boolean;
    height?: string;
    pauseOnHover?: boolean;
}

export function Reviews({
    items = defaultTestimonials,
    direction = "right",
    speed = "slow",
    className = "",
    showBackground = true,
    height = "50rem",
    pauseOnHover = true
}: ReviewsProps) {
    return (
        <div
            className={`
        rounded-md flex flex-col antialiased 
        ${showBackground ? 'bg-white dark:bg-black dark:bg-grid-white/[0.05]' : 'bg-transparent'}
        items-center justify-center relative overflow-hidden
        ${className}
      `}
            style={{ height }}
        >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold max-w-7xl mx-auto relative z-20 pb-6 px-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                What our clients say?
            </h2>
            <InfiniteMovingCards
                items={items}
                rows={2}
                speed="slow"
                direction="right"
                pauseOnHover={pauseOnHover}
            />
        </div>
    );
}

// Default testimonials that can be overridden
const defaultTestimonials = [
    {
        quote: "Attenomy's innovative solutions transformed our digital infrastructure completely. Their expertise in cloud architecture is unmatched.",
        name: "Sarah Chen",
        title: "CTO at TechCorp",
        link: "https://attenomy.com",
    },
    {
        quote: "The team delivered exceptional results, reducing our operational costs by 40% while improving system performance significantly.",
        name: "Michael Rodriguez",
        title: "Operations Director",
        link: "https://attenomy.com",
    },
    {
        quote: "Outstanding service and innovative approach to solving complex business challenges. Highly recommended!",
        name: "Emily Watson",
        title: "Product Lead",
        link: "https://attenomy.com",
    },
    {
        quote: "Their cutting-edge technology stack and professional team exceeded all our expectations. A true partnership.",
        name: "David Kim",
        title: "Head of Engineering",
        link: "https://attenomy.com",
    },
    {
        quote: "Attenomy helped us scale our platform to handle 10x more traffic without any downtime. Incredible work!",
        name: "Alex Thompson",
        title: "CEO at StartupXYZ",
        link: "https://attenomy.com",
    },
];