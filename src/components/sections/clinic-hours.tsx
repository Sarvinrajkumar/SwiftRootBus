"use client";

import { motion } from "framer-motion";
import { Headphones } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function ClinicHours() {
  return (
    <section id="support" className="bg-white py-16">
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto bg-cream rounded-3xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10 bg-brand text-white space-y-5">
              <div className="flex items-center gap-3">
                <Headphones className="w-10 h-10" />
                <div>
                  <p className="text-sm uppercase tracking-wide text-white/70">
                    Rider support
                  </p>
                  <h2 className="text-2xl font-bold">We pick up in 30 seconds</h2>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                Hotline staffed by operations bosses who can ping captains, edit
                boarding points, or trigger refunds instantly.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                  <span className="font-medium">Hotline</span>
                  <span>{COMPANY_INFO.support.hotline}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                  <span className="font-medium">Terminal desks</span>
                  <span>{COMPANY_INFO.support.terminal}</span>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2 text-sm text-white/80">
                <span>📍 {COMPANY_INFO.address}</span>
                <span>☎️ {COMPANY_INFO.phone}</span>
                <span>✉️ {COMPANY_INFO.email}</span>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/799463/pexels-photo-799463.jpeg"
                alt="SwiftRoute support lounge"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm uppercase tracking-wide">Lounges</p>
                <p className="text-2xl font-semibold">Bengaluru · Chennai · Hyderabad</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}