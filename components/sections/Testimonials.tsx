"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-taupe-dark text-sm font-medium tracking-widest uppercase">
            Community
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-stone-text mt-3">
            What Readers Say
          </h2>
          <p className="mt-4 text-muted-brown max-w-2xl mx-auto">
            Words from the Amy Teaches community about their experience with the
            resources and content.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-warm-white rounded-2xl shadow-soft p-6 lg:p-8 transition-all duration-300 hover:shadow-soft-lg h-full">
                <Quote className="h-8 w-8 text-sand mb-4" />
                <p className="text-stone-text leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-sand rounded-full flex items-center justify-center">
                    <span className="font-serif text-sm font-semibold text-stone-text">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-stone-text text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-soft-gray text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
