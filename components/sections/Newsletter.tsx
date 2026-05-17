"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Send, Check } from "lucide-react";

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
    <section className="py-20 lg:py-28 bg-cream-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-taupe-dark text-sm font-medium tracking-widest uppercase">
            Stay Connected
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-stone-text mt-3">
            Join the Newsletter
          </h2>
          <p className="mt-4 text-muted-brown leading-relaxed max-w-xl mx-auto">
            Join the Amy Teaches newsletter for thoughtful lessons, useful
            resources, and gentle reminders to keep growing at your own pace.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-full bg-warm-white border border-sand text-stone-text placeholder:text-soft-gray focus:outline-none focus:ring-2 focus:ring-taupe focus:border-transparent transition-all duration-300"
              required
              aria-label="Email address"
            />
            <Button
              type="submit"
              disabled={status === "success"}
              className="whitespace-nowrap"
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
              className="mt-4 text-sm text-taupe-dark"
            >
              Thank you for subscribing! Check your inbox soon.
            </motion.p>
          )}

          <p className="mt-4 text-xs text-soft-gray">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
