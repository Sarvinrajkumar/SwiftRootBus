"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";

export function Contact() {
  const contactChannels = [
    {
      icon: <Phone className="w-5 h-5 text-brand" />,
      label: "Hotline",
      value: COMPANY_INFO.phone,
      subtext: COMPANY_INFO.support.hotline,
    },
    {
      icon: <Mail className="w-5 h-5 text-brand" />,
      label: "Email",
      value: COMPANY_INFO.email,
      subtext: "Fast replies within 30 minutes",
    },
    {
      icon: <MapPin className="w-5 h-5 text-brand" />,
      label: "Terminal HQ",
      value: COMPANY_INFO.address,
      subtext: COMPANY_INFO.support.terminal,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-brand uppercase tracking-[0.3em] text-xs mb-3">
            Message us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            Talk to the team before you board
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4">
            Change boarding points, add co-travellers, or get GST invoices on
            WhatsApp in minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {contactChannels.map((channel) => (
              <div
                key={channel.label}
                className="flex items-start gap-4 p-5 border border-slate-100 rounded-2xl shadow-sm"
              >
                <div className="shrink-0 w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center">
                  {channel.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal">
                    {channel.label}
                  </h3>
                  <p className="text-slate-700">{channel.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{channel.subtext}</p>
                </div>
              </div>
            ))}

            <Button
              variant="brand"
              size="lg"
              className="rounded-full inline-flex items-center gap-2"
              onClick={() => window.open("https://wa.me/919845011122", "_blank")}
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-lg h-[420px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.091189485342!2d77.5950!3d12.9653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16721b2b45f5%3A0xd2b93a9f5a2d7fbd!2sResidency%20Rd%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1719999999999"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="SwiftRoute HQ"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

