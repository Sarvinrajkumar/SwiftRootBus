"use client";

import { motion } from "framer-motion";
import { crewMembers } from "@/data/data";

export function Team() {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-brand uppercase tracking-[0.3em] text-xs mb-3">
            People behind the wheel
          </p>
          <h2 className="text-3xl font-bold text-charcoal">
            Operations leaders you can ping anytime
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {crewMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-cream rounded-3xl overflow-hidden shadow-lg border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <p className="text-sm uppercase tracking-wide text-slate-500 mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">
                    {member.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}