"use client";
import { ArrowRight, Construction } from "lucide-react";
import Link from "next/link";

export function ProductsCall() {
  const products: any[] = [];

  if (products.length === 0) {
    return (
      <section className="py-40 bg-white dark:bg-neutral-950 ">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="mb-8">

            <h1 className="text-4xl md:text-5xl font-semibold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-900 dark:via-neutral-300 dark:to-white mb-4">
              Our Products
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
              We're crafting innovative solutions that will transform your business. Stay tuned for our upcoming product launches.
            </p>
          </div>
          
          <div className="relative">
                            <h1 className="text-5xl md:text-8xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-600 dark:from-white dark:via-neutral-300 dark:to-neutral-400 leading-tight tracking-tight">
                                SOON
                            </h1>

                            <div className="flex items-center justify-center gap-8 mb-6">
                                <div className="w-2 h-2 bg-neutral-700 dark:bg-neutral-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                <div className="w-2 h-2 bg-neutral-700 dark:bg-neutral-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-2 h-2 bg-neutral-700 dark:bg-neutral-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                            </div>

                            <p className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neutral-700 to-neutral-600 dark:from-neutral-300 dark:to-neutral-200 mb-4">
                                Something Extraordinary Is Brewing
                            </p>

                            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/50 backdrop-blur-sm">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                    Launching Soon
                                </span>
                            </div>
                        </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-900 dark:via-neutral-300 dark:to-white mb-4">
            Our Products
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Innovative solutions designed to solve complex challenges and drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group p-8 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                {product.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-300 font-semibold group"
          >
            Explore All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}