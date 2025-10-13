"use client";
import { ArrowRight, Construction } from "lucide-react";
import Link from "next/link";
import { title } from "process";
import { ServicesList } from "../services/ServicesList";

export function ServicesCall() {
  const services: any[] = [
  ];

  if (services.length === 0) {
    return (
      <div className="pb-20 bg-zinc-100 dark:bg-zinc-950 ">
        <ServicesList />
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-neutral-900 transition-all duration-300 font-semibold group"
          >
            Discover Our Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-40 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-900 dark:via-neutral-300 dark:to-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Expert services to help you navigate the digital landscape and achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-300 hover:shadow-lg text-center"
            >
              <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-neutral-900 transition-all duration-300 font-semibold group"
          >
            Discover Our Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}