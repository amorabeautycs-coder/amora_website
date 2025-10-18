import React from 'react';
import { motion } from 'framer-motion';
import { VALUES } from '@/utils/values';

/**
 * ValueCard Component
 * Icon-led horizontal card with elegant restraint
 * Icons serve as structural anchors, not decorative elements
 */
const ValueCard = ({ value, delay }) => {
  return (
    <motion.article
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1], // Custom easing for luxury feel
        delay 
      }}
      viewport={{ once: true, margin: "-50px" }}
      aria-labelledby={`value-${value.key}`}
    >
      <div
        className="
          relative overflow-hidden rounded-xl
          bg-white/95 backdrop-blur-sm
          border border-gold/20
          shadow-[0_2px_16px_rgba(30,42,57,0.04)]
          transition-all duration-500 ease-out
          hover:shadow-[0_8px_32px_rgba(197,162,93,0.12)]
          hover:border-gold/30
          hover:scale-[1.01]
          py-8 px-6 sm:py-10 sm:px-8 md:py-12 md:px-12
        "
      >
        {/* Horizontal Layout: Icon Left, Content Right */}
        <div className="flex items-start gap-6 sm:gap-8 md:gap-10">
          
          {/* Icon: Structural Anchor */}
          <motion.div
            className="flex-shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: delay + 0.15 // Subtle delay for layered reveal
            }}
            viewport={{ once: true }}
            aria-hidden="true"
          >
            <div className="
              relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
              transition-transform duration-500 ease-out
              group-hover:scale-105
            ">
              <img
                src={value.icon}
                alt=""
                className="
                  w-full h-full object-contain
                  opacity-90 group-hover:opacity-100
                  transition-opacity duration-500
                  filter brightness-[0.85] sepia-[0.15] hue-rotate-[15deg] saturate-[1.1]
                "
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content: Breathing Typography */}
          <div className="flex-1 min-w-0 pt-1">
            <h3
              id={`value-${value.key}`}
              className="
                font-serif text-2xl sm:text-3xl font-light
                text-navy tracking-tight
                mb-3 sm:mb-4
                transition-colors duration-300
              "
            >
              {value.title}
            </h3>
            <p className="
              font-sans text-base sm:text-[17px]
              text-navy/70 leading-relaxed tracking-normal
              transition-colors duration-300
              group-hover:text-navy/80
            ">
              {value.desc}
            </p>
          </div>

        </div>

        {/* Subtle Hover Glow (barely visible, just a whisper) */}
        <div 
          className="
            absolute inset-0 rounded-xl
            opacity-0 group-hover:opacity-100
            bg-gradient-to-br from-gold/[0.02] via-transparent to-transparent
            pointer-events-none
            transition-opacity duration-700 ease-out
          "
          aria-hidden="true"
        />
      </div>
    </motion.article>
  );
};

/**
 * ValuesSection Component
 * Luxury editorial layout with icon-led storytelling
 * Adheres to Dieter Rams principles: "Less, but better"
 */
export default function ValuesSection({ 
  title = 'Our Values', 
  subtitle = 'The foundation of timeless beauty' 
}) {
  return (
    <section 
      className="py-20 sm:py-24 md:py-28 lg:py-32 bg-ivory"
      aria-labelledby="values-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header: Editorial Restraint */}
        <header className="text-center mb-12 sm:mb-16 md:mb-20">
          {/* Subtle divider line */}
          <motion.span
            className="mx-auto mb-6 block h-[1px] w-16 bg-gold/40"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            aria-hidden="true"
          />
          
          <motion.h2
            id="values-heading"
            className="
              font-serif text-4xl sm:text-5xl md:text-6xl
              font-light text-navy tracking-tight
              mb-4
            "
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          
          <motion.p
            className="
              font-sans text-lg sm:text-xl
              text-navy/60 font-light tracking-wide
            "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </header>

        {/* Values Grid: 2x2 Editorial Layout */}
        <div className="
          grid grid-cols-1 md:grid-cols-2
          gap-6 sm:gap-8 md:gap-10 lg:gap-12
          max-w-6xl mx-auto
        ">
          {VALUES.map((value, idx) => (
            <ValueCard 
              key={value.key}
              value={value}
              delay={idx * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
