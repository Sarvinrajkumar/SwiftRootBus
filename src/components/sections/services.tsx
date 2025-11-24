"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { routes } from "@/data/data";

export function Services() {
  return (
    <section id="routes" className="section-padding bg-cream">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-brand uppercase tracking-[0.3em] text-xs mb-3">
            Popular routes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Nightly buses riders book first
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Every featured route runs at least twice nightly with backup buses
            standing by in case of full capacity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <motion.div
              key={route.id}
              className="bg-white rounded-3xl p-7 shadow-lg border border-slate-100 flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wide">
                  Route #{route.id}
                </p>
                <h3 className="text-2xl font-semibold text-charcoal">
                  {route.title}
                </h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-slate-600">{route.departure}</p>
                <p className="text-slate-600">{route.arrival}</p>
                <p className="text-brand font-medium">{route.duration}</p>
              </div>

              <ul className="space-y-2 text-slate-600 flex-1">
                {route.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand"></span>
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-charcoal">
                  {route.price}
                </p>
                <button className="inline-flex items-center gap-2 text-brand font-medium">
                  Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

