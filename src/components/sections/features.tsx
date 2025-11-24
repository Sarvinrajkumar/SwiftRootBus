"use client";

import { motion } from "framer-motion";
import { Bus, ShieldCheck, Clock4, Wifi } from "lucide-react";

const perks = [
  {
    icon: <Bus className="w-7 h-7 text-brand" />,
    title: "Owned luxury fleet",
    description:
      "Hand-picked Volvo and BharatBenz sleepers with deep cleaning between every ride.",
  },
  {
    icon: <Wifi className="w-7 h-7 text-brand" />,
    title: "Always-connected rides",
    description:
      "Live GPS sharing, seat-side charging, and onboard Wi-Fi keep work chats moving.",
  },
  {
    icon: <Clock4 className="w-7 h-7 text-brand" />,
    title: "Delay-free boarding",
    description:
      "Staggered boarding windows plus luggage tagging keeps terminals calm even at rush hour.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-brand" />,
    title: "Transparent fares",
    description:
      "Upfront dynamic pricing with instant refunds when you cancel 4 hours before departure.",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-cream to-white" id="perks">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-brand uppercase tracking-[0.4em] text-xs mb-3">
            Ride perks
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            Everything you expect from flying, now on the highway
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.title}
              className="bg-white rounded-3xl p-7 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10">
                {perk.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-charcoal">
                {perk.title}
              </h3>
              <p className="text-slate-600">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}