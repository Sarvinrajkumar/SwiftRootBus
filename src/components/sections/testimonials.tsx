"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/data";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-cream">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Riders <span className="text-brand">sleep better</span> with us
          </h2>
          <div className="w-20 h-1 bg-accent-green mx-auto mb-6"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg relative"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-accent-green/20">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < testimonials[currentIndex].rating 
                          ? "text-yellow-500 fill-yellow-500" 
                          : "text-gray-300"
                      }`} 
                    />
                  ))}
                </div>
                
                <blockquote className="text-xl italic text-gray-700 mb-6 relative">
                  <span className="text-5xl text-brand opacity-20 absolute -top-5 -left-2">"</span>
                  {testimonials[currentIndex].content}
                  <span className="text-5xl text-brand opacity-20 absolute -bottom-10 right-0">"</span>
                </blockquote>
                
                <div>
                  <h4 className="text-lg font-semibold text-brand">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].route}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-brand" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-2">
              <div className="text-4xl md:text-5xl font-bold text-brand">4.9</div>
              <div className="text-2xl text-gray-400">/</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-400">5</div>
            </div>
            <p className="text-lg text-gray-700 mt-2">
              Rated by <span className="text-brand font-semibold">25,000+</span> overnight riders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}