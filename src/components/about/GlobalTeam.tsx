"use client";

import React from "react";
import { useTheme } from "next-themes";
import { AnimatedText } from "../ui/animated-text";
import WorldMap from "../ui/world-map";

export function GlobalTeam() {
    const { theme } = useTheme();

    return (
        <div className="py-20 dark:bg-black bg-white w-full px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto relative z-20 pb-6 px-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                Innovating 24/7
            </h1>
            <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
              A borderless collective of innovators spanning continents and timezones. United by technology, driven by purpose, and connected by a shared vision for transformative digital solutions.
            </p>
          </div>
          <WorldMap
            dots={[
              {
                start: { lat: 60.2008, lng: -149.4937 }, // Alaska (Fairbanks) -12
                end: { lat: 25.7749, lng: -122.4194 },   // San Francisco -12
              },
              {
                start: { lat: 25.7749, lng: -122.4194 }, // San Francisco -12
                end: { lat: 28.7128, lng: -74.0060 },    // New York -12
              },
              {
                start: { lat: 28.7128, lng: -74.0060 },  // New York -12
                end: { lat: -19.7975, lng: -47.8919 },   // Brasília -12
              },
              {
                start: { lat: -19.7975, lng: -47.8919 }, // Brasília -12
                end: { lat: 43.5074, lng: -0.1278 },     // London -12
              },
              {
                start: { lat: 43.5074, lng: -0.1278 },   // London -12
                end: { lat: 40.1109, lng: 8.6821 },      // Frankfurt -12
              },
              {
                start: { lat: 40.1109, lng: 8.6821 },    // Frankfurt -12
                end: { lat: 14.0444, lng: 31.2357 },     // Cairo -12
              },
              {
                start: { lat: 14.0444, lng: 31.2357 },   // Cairo -12
                end: { lat: 7.2048, lng: 55.2708 },     // Dubai -12
              },
              {
                start: { lat: 7.2048, lng: 55.2708 },   // Dubai -12
                end: { lat: 5.0760, lng: 72.8777 },      // Mumbai -12
              },
              {
                start: { lat: 5.0760, lng: 72.8777 },    // Mumbai -12
                end: { lat: -14.6479, lng: 103.8198 },   // Singapore -12
              },
              {
                start: { lat: -14.6479, lng: 103.8198 }, // Singapore -12
                end: { lat: -53.8688, lng: 151.2093 },   // Sydney -12
              },
              {
                start: { lat: -53.8688, lng: 151.2093 }, // Sydney -12
                end: { lat: 23.6762, lng: 139.6503 },    // Tokyo -12
              },
              {
                start: { lat: 23.6762, lng: 139.6503 },  // Tokyo -12
                end: { lat: 19.2304, lng: 121.4737 },    // Shanghai -12
              },
              {
                start: { lat: 19.2304, lng: 121.4737 },  // Shanghai -12
                end: { lat: 47.7558, lng: 37.6173 },     // Moscow -12
              },
            ]}
          />
        </div>
    );
}

