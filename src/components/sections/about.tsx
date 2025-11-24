"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="amenities" className="section-padding bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-brand uppercase tracking-[0.3em] text-sm mb-3">
            About SwiftRoute
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            Built for last-minute plans and long-haul comfort
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
                alt="SwiftRoute premium coach"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-sm">
              <p className="text-lg font-semibold text-charcoal mb-1">
                12+ years on the road
              </p>
              <p className="text-sm text-slate-600">
                We operate our own fleet, drivers, and lounges so every ride
                feels consistent no matter the city.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-cream rounded-3xl p-8 shadow-inner">
              <h3 className="text-2xl font-semibold mb-4 text-charcoal">
                No aggregator surprises
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Tickets, fleet maintenance, and rider support all run on one
                SwiftRoute stack. That means boarding passes sync instantly with
                bus captains, lounges, and WhatsApp notifications without middle
                agents.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Cities on network", value: "70+" },
                { label: "Avg. rating", value: "4.9/5" },
                { label: "Live tracked trips", value: "1.1M" },
                { label: "Sleeper buses", value: "120" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 border border-slate-200 rounded-2xl"
                >
                  <p className="text-3xl font-bold text-charcoal">
                    {stat.value}
                  </p>
                  <p className="text-sm uppercase tracking-wide text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand/10 rounded-full text-sm font-medium text-brand">
              Emission-tracked rides · Seamless reschedules
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}