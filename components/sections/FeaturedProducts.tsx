"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ShoppingBag, ArrowRight, Star } from "lucide-react";

export function FeaturedProducts() {
  return (
    <section className="py-32 lg:py-40 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-celestial-glow opacity-50 pointer-events-none" />

      {/* Subtle celestial accents */}
      <div className="absolute top-24 right-[8%] w-1.5 h-1.5 bg-gold rounded-full animate-twinkle" />
      <div className="absolute top-40 left-[6%] w-1 h-1 bg-gold/60 rounded-full animate-twinkle-slow" />
      <div className="absolute bottom-36 right-[12%] w-1 h-1 bg-gold/80 rounded-full animate-twinkle-fast" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-gold-muted text-sm font-medium tracking-[0.2em] uppercase">
            <Star className="w-3.5 h-3.5" />
            Digital Products
            <Star className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-serif text-3xl lg:text-5xl font-medium text-navy mt-4 tracking-tight">
            Curated for Your Growth
          </h2>
          <p className="mt-6 text-muted-brown max-w-2xl mx-auto text-lg leading-relaxed">
            Thoughtfully designed tools to support your learning journey and
            daily practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group bg-warm-white rounded-2xl shadow-soft overflow-hidden transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-2 border border-beige/50">
                <div className="aspect-[4/3] relative bg-gradient-to-br from-beige-light to-sand-light overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-40 bg-warm-white rounded shadow-lg transform group-hover:scale-105 transition-transform duration-500 flex items-center justify-center border border-beige">
                      <div className="text-center px-3">
                        <span className="font-serif text-4xl text-gold font-medium">
                          {product.title.charAt(0)}
                        </span>
                        <div className="mt-2 w-8 h-px bg-gold/30 mx-auto" />
                        <span className="block mt-2 text-[8px] text-soft-gray uppercase tracking-wider">Digital</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-gold-muted tracking-wide uppercase">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-navy mt-2 group-hover:text-gold-muted transition-colors duration-300 leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-sm text-soft-gray mt-3 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-serif text-xl font-medium text-navy">
                      ${product.price.toFixed(2)}
                    </span>
                    <Link href="/shop/">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-navy hover:text-gold-muted hover:bg-gold/5 transition-colors"
                      >
                        <ShoppingBag className="h-4 w-4 mr-1.5" />
                        View Product
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/shop/">
            <Button variant="outline" className="border-gold/30 text-navy hover:bg-gold/5 hover:border-gold/50 px-8">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
