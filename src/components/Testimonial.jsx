import React from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../supabase/usePortfolioData";
import Loading from "./Loading";

export default function Testimonial() {
  const { data, loading, error } = usePortfolioData();
  const testimonials = data?.testimonials || [];

  if (loading) return <Loading />;
  if (error)
    return (
      <p className="text-center mt-20 text-red-500">Error loading data.</p>
    );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="py-20 px-6 md:px-16">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative w-full">
          {/* Background Large Text */}
          <motion.h2
            variants={itemVariants}
            className="
              text-center text-2xl font-bold mb-10 text-white
              md:absolute md:inset-0 md:flex md:items-center md:justify-center 
              md:text-[8vw] md:font-serif md:text-white/10 md:select-none md:mb-0
            "
          >
            What they say?
          </motion.h2>

          {/* Grid with Testimonials */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 relative z-10"
            variants={itemVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
                  p-6 sm:p-8
                  ${index >= 2
                    ? "mt-2 md:mt-[70px]" // small gap on mobile, large stagger on desktop
                    : "mb-2 md:mb-10"
                  }
                `}
              >
                <motion.p 
                  className="text-gray-200 leading-relaxed mb-6 text-lg"
                >
                  "{testimonial.text}"
                </motion.p>
                
                <motion.div 
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-24"
          variants={itemVariants}
        >
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.p 
              className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              200+
            </motion.p>
            <p className="text-gray-400 mt-2">Reviews</p>
          </motion.div>
          
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.p 
              className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              10+
            </motion.p>
            <p className="text-gray-400 mt-2">Happy Clients</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
