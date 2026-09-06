import { CometCard } from "@/components/ui/comet-card";

export default function ProductsList() {
    const portfolioItems = [
        {
            id: 1,
            title: "Coming Soon App",
            code: "Soon Industry",
            image: "/icons/placeholder-icon.png",
            description: "Soon Solution"
        }
    ];

    return (
        <section className="py-20 bg-zinc-100/75 dark:bg-zinc-900/20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-12 pt-4 ">
                    <h2 className="text-3xl md:text-5xl mb-8 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-700 dark:from-neutral-800 dark:to-white leading-tight">
                        Our Portfolio
                    </h2>
                    <p className="text-neutral-600 dark:text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore our innovative applications, projects and cutting-edge solutions that are shaping the future of technology.
                    </p>

                    {/* Mind-blowing Coming Soon Section */}
                    <div className="relative pt-20">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-96 h-96 bg-gradient-to-r from-neutral-800/10 to-neutral-700/10 dark:from-neutral-800/20 dark:to-white/10 rounded-full blur-3xl animate-pulse"></div>
                        </div>

                        <div className="relative">
                            <h2 className="text-5xl md:text-8xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-600 dark:from-white dark:via-neutral-300 dark:to-neutral-400 leading-tight tracking-tight">
                                SOON
                            </h2>

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
                </div>

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {portfolioItems.map((item) => (
                        <CometCard key={item.id}>
                            <button
                                type="button"
                                className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-background p-2 saturate-0 hover:saturate-100 transition-all duration-300 group"
                                aria-label={`View ${item.title}`}
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: "none",
                                    opacity: 1,
                                }}
                            >
                                <div className="mx-2 flex-1">
                                    <div className="relative mt-2 aspect-[1/1] w-full overflow-hidden rounded-[16px]">
                                        <img
                                            loading="lazy"
                                            className="absolute inset-0 h-full w-full object-cover contrast-75 group-hover:contrast-100 group-hover:scale-105 transition-all duration-500"
                                            alt={item.title}
                                            src={item.image}
                                            style={{
                                                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                                                opacity: 1,
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-sm font-medium">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                                    <div className="text-xs text-foreground">{item.title}</div>
                                    <div className="text-xs text-foreground opacity-75">{item.code}</div>
                                </div>
                            </button>
                        </CometCard>
                    ))}
                </div> */}

                {/* 
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary Products in Development
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our team is working tirelessly to bring you cutting-edge solutions 
              that will transform your digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI-Powered Platform</h3>
                <p className="text-muted-foreground">
                  Intelligent solutions that learn and adapt to your business needs in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Enterprise Suite</h3>
                <p className="text-muted-foreground">
                  Comprehensive tools designed for scalability and enterprise-grade performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation Hub</h3>
                <p className="text-muted-foreground">
                  Next-generation technology stack pushing the boundaries of what's possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      */}
            </div>
        </section>
    );
}