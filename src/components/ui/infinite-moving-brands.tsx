"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingBrands = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    logo: string;
    url?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [isDark, setIsDark] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    addAnimation();
  }, []);
  
  // Auto-detect theme
  useEffect(() => {
    const updateTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark') || 
                        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      setIsDark(isDarkMode);
      setKey(prev => prev + 1);
    };

    updateTheme();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          updateTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = () => updateTheme();
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      const originalItems = scrollerContent.slice(0, items.length);
      
      while (scrollerRef.current.firstChild) {
        scrollerRef.current.removeChild(scrollerRef.current.firstChild);
      }
      
      originalItems.forEach(item => {
        scrollerRef.current?.appendChild(item);
      });

      originalItems.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  useEffect(() => {
    if (start) {
      addAnimation();
    }
  }, [isDark, start]);
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
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
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      key={key}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-8 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[160px] max-w-full relative flex-shrink-0 px-6 py-4 md:w-[180px]"
            key={`${item.name}-${idx}-${isDark ? 'dark' : 'light'}`}
          >
            <div
              className={cn(
                "relative flex items-center justify-center",
                "transition-all duration-500 hover:scale-125"
              )}
            >
              <div className="flex items-center justify-center h-36 w-36 relative">
                <Image
                  src={item.logo}
                  alt={`${item.name} logo`}
                  width={144}
                  height={144}
                  className={cn(
                    "object-contain w-full h-full transition-all duration-500 ",
                    // Only apply invert in dark mode - this will make black logos white
                    isDark && "invert-40" 
                  )}
                  priority={idx < 6}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};