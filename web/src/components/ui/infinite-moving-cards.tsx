"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  rows = 1,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    link?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  rows?: number;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRefs = React.useRef<(HTMLUListElement | null)[]>([]);
  
  useEffect(() => {
    scrollerRefs.current = scrollerRefs.current.slice(0, rows);
  }, [rows]);

  useEffect(() => {
    addAnimation();
  }, [rows]);

  const [start, setStart] = useState(false);

  function addAnimation() {
    scrollerRefs.current.forEach((scrollerRef, index) => {
      if (containerRef.current && scrollerRef) {
        const scrollerContent = Array.from(scrollerRef.children);

        const currentChildren = Array.from(scrollerRef.children);
        const originalItemsCount = currentChildren.length / 2;
        if (currentChildren.length > items.length) {
          for (let i = originalItemsCount; i < currentChildren.length; i++) {
            scrollerRef.removeChild(currentChildren[i]);
          }
        }

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.appendChild(duplicatedItem);
        });

        if (rows > 1) {
          const delay = index * (0.5 / rows);
          scrollerRef.style.animationDelay = `${delay}s`;
        }
      }
    });

    getDirection();
    getSpeed();
    setStart(true);
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const getItemsForRow = (rowIndex: number) => {
    if (rows === 1) return items;
    
    const itemsPerRow = Math.ceil(items.length / rows);
    const startIndex = rowIndex * itemsPerRow;
    return items.slice(startIndex, startIndex + itemsPerRow);
  };

  const handleCardClick = (e: React.MouseEvent, link?: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleLinkClick = (e: React.MouseEvent, link?: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <ul
          key={rowIndex}
          ref={(el) => {
            scrollerRefs.current[rowIndex] = el;
          }}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]",
            rowIndex > 0 && "mt-4"
          )}
          style={{
            animationDelay: rowIndex * (0.5 / rows) + 's'
          }}
        >
          {getItemsForRow(rowIndex).map((item, idx) => (
            <li
              className={cn(
                "relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]",
                item.link && "cursor-pointer hover:shadow-lg transition-all duration-200"
              )}
              key={`${item.name}-${rowIndex}-${idx}`}
              onClick={(e) => handleCardClick(e, item.link)}
            >
              <div className="hover:scale-105 transition-transform duration-200">
                <div
                  aria-hidden="true"
                  className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                
                {/* Quote section with external link icon */}
                <div className="flex items-start justify-between mb-6">
                  <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100 flex-1">
                    {item.quote}
                  </span>
                  {item.link && (
                    <button
                      onClick={(e) => handleLinkClick(e, item.link)}
                      className="flex-shrink-0 ml-3 mt-0 p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full transition-colors duration-200 flex items-center justify-center"
                      aria-label={`Open ${item.name}'s testimonial`}
                    >
                      <ExternalLink className="w-4 h-4 text-neutral-500 dark:text-gray-400" />
                    </button>
                  )}
                </div>

                {/* Author info */}
                <div className="relative z-20 flex flex-row items-center justify-between">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.title}
                    </span>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};