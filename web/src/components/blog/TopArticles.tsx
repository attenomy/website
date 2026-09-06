"use client";

import React from "react";
import { useTheme } from "next-themes";
import { TrendingUp, BookOpen, Users, Lightbulb, Calendar, Tag, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

// Dynamic articles data - empty array to test "Coming Soon" state
const articles: any[] = [];
// To test with articles, use the original array instead:
// const articles = [ ... ];

// Color mapping for icons
const colorClasses = {
  blue: "bg-blue-500/10 text-blue-500",
  green: "bg-green-500/10 text-green-500",
  purple: "bg-purple-500/10 text-purple-500",
  orange: "bg-orange-500/10 text-orange-500",
  red: "bg-red-500/10 text-red-500",
  indigo: "bg-indigo-500/10 text-indigo-500"
};

// Coming soon placeholder articles
const comingSoonArticles = [
  {
    id: 1,
    title: "AI Automation Best Practices",
    subtitle: "Learn how to implement effective AI automation in your business workflows",
    category: "Coming Soon",
    icon: TrendingUp,
    color: "blue",
    status: "in-progress"
  },
  {
    id: 2,
    title: "SaaS Product Scaling Strategies",
    subtitle: "Essential techniques for scaling your SaaS product efficiently",
    category: "Coming Soon",
    icon: Lightbulb,
    color: "green",
    status: "planned"
  },
  {
    id: 3,
    title: "Cloud Cost Optimization",
    subtitle: "Reduce your cloud spending while maintaining performance",
    category: "Coming Soon",
    icon: BookOpen,
    color: "purple",
    status: "planned"
  },
  {
    id: 4,
    title: "Team Productivity with AI",
    subtitle: "Boost your team's output with intelligent automation tools",
    category: "Coming Soon",
    icon: Users,
    color: "orange",
    status: "in-progress"
  }
];

export function TopArticles() {
  const { theme } = useTheme();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const hasArticles = articles.length > 0;

  return (
    <section className="py-20 px-6 bg-zinc-100/75 dark:bg-zinc-950/25">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-700 dark:from-neutral-800 dark:to-white leading-tight">
            Thought Leadership in Development
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {hasArticles 
              ? "Our experts prepare insightful content across various technology domains to keep you at the forefront of digital innovation."
              : "We're crafting valuable insights and expert content to share our knowledge with the community."
            }
          </p>
        </div>

        {hasArticles ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 bg-zinc-100/75 dark:bg-zinc-950/25">
            {articles.map((article) => {
              const IconComponent = article.icon;
              return (
                <Card 
                  key={article.id}
                  className="hover:shadow-xl transition-all duration-300 group hover:scale-105 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] relative overflow-hidden"
                >
                  <CardHeader className="pb-3">
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${colorClasses[article.color as keyof typeof colorClasses]}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <Badge variant="secondary" className="text-xs font-medium">
                        {article.category}
                      </Badge>
                    </div>

                    {/* Title and Subtitle */}
                    <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-2 line-clamp-3">
                      {article.subtitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 2).map((tag: string, index: number) => (
                        <div key={index} className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Tag className="w-3 h-3" />
                          <span>{tag}</span>
                        </div>
                      ))}
                      {article.tags.length > 2 && (
                        <span className="text-xs text-muted-foreground">
                          +{article.tags.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Footer with Date and Read Time */}
                    <div className="flex items-center justify-between pt-3 border-t border-zinc-200 dark:border-zinc-700">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(article.publishDate)}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 bg-zinc-100/75 dark:bg-zinc-950/25">
            {comingSoonArticles.map((article) => {
              const IconComponent = article.icon;
              return (
                <Card 
                  key={article.id}
                  className="hover:shadow-xl transition-all duration-300 group rounded-2xl border border-b-0 border-zinc-200/50 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] dark:border-zinc-700/50 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] relative overflow-hidden opacity-80"
                >
                  {/* Coming Soon Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/90 backdrop-blur-[1px] z-10 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Clock className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <Badge variant="outline" className="mb-2">
                        Coming Soon
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-2">
                        Content in progress
                      </p>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[article.color as keyof typeof colorClasses]}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <Badge variant="secondary" className="text-xs font-medium">
                        {article.category}
                      </Badge>
                    </div>

                    {/* Title and Subtitle */}
                    <CardTitle className="text-lg font-bold line-clamp-2 text-muted-foreground">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-2 line-clamp-3">
                      {article.subtitle}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}