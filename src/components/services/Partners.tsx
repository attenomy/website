"use client";

import React from "react";
import { InfiniteMovingBrands } from "../ui/infinite-moving-brands";

interface PartnerItem {
  name: string;
  logo: string; // Path to SVG in public folder
  url?: string;
}

interface PartnersProps {
  items?: PartnerItem[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  className?: string;
  showBackground?: boolean;
  height?: string;
  pauseOnHover?: boolean;
}

export function Partners({
  items = defaultPartners,
  direction = "right",
  speed = "slow",
  className = "",
  showBackground = true,
  height = "20rem",
  pauseOnHover = true
}: PartnersProps) {
  return (
    <div
      className={`
        rounded-md flex flex-col antialiased 
        ${showBackground ? 'bg-zinc-100 dark:bg-black dark:bg-grid-white/[0.05]' : 'bg-transparent'}
        items-center justify-center relative overflow-hidden
        ${className}
      `}
      style={{ height }}
    >
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto relative z-20 pb-2 pt-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-700 dark:from-neutral-800 dark:via-neutral-700 dark:to-white">
        Our Partners
      </h1>
      <InfiniteMovingBrands
        items={items}
        direction={direction}
        speed={speed}
        pauseOnHover={pauseOnHover}
      />
    </div>
  );
}

// Default partners with SVG file paths
const defaultPartners = [
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/acme-logo.svg",
  },
  {
    name: " ",
    logo: "/partners/example-logo.svg",
  },
];