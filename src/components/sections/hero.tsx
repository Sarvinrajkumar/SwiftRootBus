"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-28 md:pt-36 pb-20 bg-gradient-to-b from-white via-cream to-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-medium">
              480+ daily departures · Live support 24/7
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-charcoal">
              Simple bus booking for{" "}
              <span className="text-brand relative inline-block">
                fast movers
                <span className="absolute inset-x-0 bottom-0 h-2 bg-accent-green/40 rounded-full translate-y-2"></span>
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              SwiftRoute Coaches gets you on clean sleeper buses, tracks every
              kilometer, and keeps your crew notified from boarding to drop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                variant="brand"
                size="xl"
                className="rounded-full shadow-lg hover:shadow-brand/30"
              >
                Search departures
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="rounded-full border-brand text-brand hover:bg-brand/5"
              >
                Track booking
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 pt-6 text-sm text-slate-600">
              <div>
                <p className="text-3xl font-bold text-charcoal">98%</p>
                <p className="uppercase tracking-wide">on-time arrivals</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-charcoal">30k</p>
                <p className="uppercase tracking-wide">monthly riders</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-charcoal">70</p>
                <p className="uppercase tracking-wide">cities covered</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -inset-6 bg-brand/10 blur-3xl rounded-full"></div>
            <div className="glassmorphism relative rounded-[32px] p-6 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Trip type</p>
                  <p className="font-semibold text-charcoal">One-way</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-accent-green/20 text-xs font-semibold text-charcoal">
                  Instant confirmation
                </span>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium text-slate-600">
                  From
                  <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 px-4">
                    <MapPin className="w-4 h-4 text-brand" />
                    <Input
                      className="border-0 focus-visible:ring-0 px-0"
                      placeholder="Choose departure city"
                    />
                  </div>
                </label>

                <label className="text-sm font-medium text-slate-600">
                  To
                  <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 px-4">
                    <MapPin className="w-4 h-4 text-brand" />
                    <Input
                      className="border-0 focus-visible:ring-0 px-0"
                      placeholder="Choose arrival city"
                    />
                  </div>
                </label>

                <div className="grid grid-cols-2 gap-4">
                  <label className="text-sm font-medium text-slate-600">
                    Travel date
                    <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 px-4">
                      <CalendarDays className="w-4 h-4 text-brand" />
                      <Input
                        type="date"
                        className="border-0 focus-visible:ring-0 px-0"
                      />
                    </div>
                  </label>
                  <label className="text-sm font-medium text-slate-600">
                    Seats
                    <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 px-4">
                      <Users className="w-4 h-4 text-brand" />
                      <Input
                        type="number"
                        min={1}
                        defaultValue={1}
                        className="border-0 focus-visible:ring-0 px-0"
                      />
                    </div>
                  </label>
                </div>
              </div>

              <Button
                variant="brand"
                size="lg"
                className="w-full rounded-2xl text-base"
              >
                Show buses
              </Button>

              <div className="flex items-center gap-3 text-sm text-slate-500">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg"
                    alt="SwiftRoute bus"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>
                  Last seat sold 4 min ago on{" "}
                  <span className="font-semibold text-charcoal">
                    Chennai → Coimbatore
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}