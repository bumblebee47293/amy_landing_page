"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Send, Check, Star } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="newsletter" className="py-32 lg:py-40 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-celestial-glow opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      {/* Stars */}
      <div className="absolute top-24 left-[12%] w-1 h-1 bg-gold/60 rounded-full animate-twinkle" />
      <div className="absolute top-36 right-[18%] w-1 h-1 bg-gold/40 rounded-full animate-twinkle-slow" />
      <div className="absolute bottom-28 left-[22%] w-1.5 h-1.5 bg-gold/50 rounded-full animate-twinkle-fast" />
      <div className="absolute bottom-36 right-[12%] w-1 h-1 bg-gold/30 rounded-full animate-twinkle" />
      <div className="absolute top-1/3 left-[8%] w-1 h-1 bg-gold/20 rounded-full animate-twinkle-slow" />
      <div className="absolute top-2/3 right-[8%] w-1 h-1 bg-gold/25 rounded-full animate-twinkle-fast" />

      <div className="relative max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-gold/70 text-sm font-medium tracking-[0.2em] uppercase">
            <Star className="w-3.5 h-3.5" />
            Stay Connected
            <Star className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-serif text-3xl lg:text-5xl font-medium text-cream mt-4 tracking-tight">
            Join the Newsletter
          </h2>
          <p className="mt-6 text-cream/70 leading-relaxed max-w-xl mx-auto text-lg">
            Join the Amy Teaches newsletter for thoughtful lessons and gentle
            inspiration delivered to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-6 py-3.5 rounded-full bg-cream/10 border border-gold/20 text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              required
              aria-label="Email address"
            />
            <Button
              type="submit"
              disabled={status === "success"}
              className="whitespace-nowrap bg-gold hover:bg-gold-light text-navy font-medium px-6 transition-colors"
            >
              {status === "success" ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Subscribed
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Subscribe
                </>
              )}
            </Button>
          </form>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-gold/80"
            >
              Thank you for subscribing! Check your inbox soon.
            </motion.p>
          )}

          <p className="mt-5 text-xs text-cream/40 tracking-wide">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
