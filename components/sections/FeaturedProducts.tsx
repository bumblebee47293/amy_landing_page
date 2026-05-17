"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ShoppingBag } from "lucide-react";

export function FeaturedProducts() {
  return (
    <section className="py-20 lg:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-taupe-dark text-sm font-medium tracking-widest uppercase">
            Digital Products
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-stone-text mt-3">
            Curated for Your Growth
          </h2>
          <p className="mt-4 text-muted-brown max-w-2xl mx-auto">
            Thoughtfully designed tools to support your learning journey and
            daily practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/shop/`}>
                <div className="group bg-warm-white rounded-2xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1">
                  <div className="aspect-[4/3] relative bg-sand/50 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-linen">
                      <span className="font-serif text-3xl text-taupe/50">
                        {product.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-taupe-dark tracking-wide uppercase">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-stone-text mt-2 group-hover:text-muted-brown transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-soft-gray mt-2 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-serif text-xl font-semibold text-stone-text">
                        ${product.price.toFixed(2)}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-stone-text hover:text-muted-brown"
                      >
                        <ShoppingBag className="h-4 w-4 mr-1" />
                        Buy
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/shop/">
            <Button variant="outline">View All Products</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
