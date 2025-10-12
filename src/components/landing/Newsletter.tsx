"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, CheckCircle, Clock, User } from "lucide-react";

export function Newsletter() {
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  // Check for existing cooldown on component mount
  useEffect(() => {
    const lastSubmissionTime = localStorage.getItem('newsletter_last_submission');
    if (lastSubmissionTime) {
      const timeSinceLastSubmission = Date.now() - parseInt(lastSubmissionTime);
      const remainingCooldown = Math.max(0, 60000 - timeSinceLastSubmission);
      
      if (remainingCooldown > 0) {
        setCooldown(Math.ceil(remainingCooldown / 1000));
        
        const interval = setInterval(() => {
          setCooldown(prev => {
            if (prev <= 1) {
              clearInterval(interval);
              localStorage.removeItem('newsletter_last_submission');
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
        
        return () => clearInterval(interval);
      } else {
        localStorage.removeItem('newsletter_last_submission');
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check cooldown
    if (cooldown > 0) {
      return;
    }

    // Basic validation
    if (!name.trim() || !email.trim()) {
      alert('Please enter both name and email');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: name.trim(),
          email: email.trim(),
          timestamp: new Date().toISOString(),
          source: 'website-newsletter'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Set cooldown in localStorage
        localStorage.setItem('newsletter_last_submission', Date.now().toString());
        setCooldown(60);
        
        // Start cooldown timer
        const interval = setInterval(() => {
          setCooldown(prev => {
            if (prev <= 1) {
              clearInterval(interval);
              localStorage.removeItem('newsletter_last_submission');
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

        setIsSubmitted(true);
        setName("");
        setEmail("");
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error(data.error || 'Subscription failed');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Subscription failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isCooldownActive = cooldown > 0;
  const isFormValid = name.trim() && email.trim();

  return (
    <section className="py-20 bg-zinc-100/50 dark:bg-zinc-900/10">
      <div className="max-w-4xl mx-auto text-center px-6">
        <Card className="rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] relative overflow-hidden">
          {/* Shine Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute top-0 left-0 w-30 h-full bg-gradient-to-r from-transparent via-foreground/5 to-transparent transform -skew-x-12 animate-slow-shine"></div>
          </div>

          <CardContent className="p-12 relative z-10">
            <div className="w-16 h-16 bg-primary/10 rounded-md flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              Join Our Newsletter
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Get exclusive insights on AI automation, digital transformation trends, 
              and get exclusive early access when we launch new products or services.
            </p>

            {isSubmitted ? (
              <div className="flex items-center justify-center gap-3 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                <div className="text-left">
                  <p className="text-green-700 dark:text-green-300 font-medium">
                    Thank you!
                  </p>
                  <p className="text-green-600 dark:text-green-400 text-sm">
                    You've been successfully subscribed. Please wait {cooldown}s before submitting again.
                  </p>
                </div>
              </div>
            ) : isCooldownActive ? (
              <div className="flex items-center justify-center gap-3 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div className="text-left">
                  <p className="text-blue-700 dark:text-blue-300 font-medium">
                    Cooldown Active
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 text-sm">
                    Please wait {cooldown} seconds before submitting again.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <div className="space-y-3">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={isSubmitting || isCooldownActive}
                      className="pl-10 h-12 text-base border-zinc-300 dark:border-zinc-600 focus:border-primary"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isSubmitting || isCooldownActive}
                      className="pl-10 h-12 text-base border-zinc-300 dark:border-zinc-600 focus:border-primary"
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  size="xl"
                  disabled={isSubmitting || isCooldownActive || !isFormValid}
                  className="w-full group relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 hover:from-primary hover:via-primary/80 hover:to-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-95 dark:from-primary/90 dark:via-primary/80 dark:to-primary/70 dark:hover:from-primary dark:hover:via-primary/90 dark:hover:to-primary/80 h-12 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Adding...
                      </>
                    ) : isCooldownActive ? (
                      <>
                        <Clock className="w-4 h-4 mr-2" />
                        Wait {cooldown}s
                      </>
                    ) : (
                      <>
                        Subscribe Now
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300 ease-out" />
                      </>
                    )}
                  </span>
                  {!isCooldownActive && !isSubmitting && (
                    <>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 dark:via-white/30" />
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-white/10" />
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground">
                  {isCooldownActive 
                    ? `Cooldown active: ${cooldown}s remaining` 
                    : "No spam ever. Unsubscribe anytime. 60s cooldown between submissions."
                  }
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}