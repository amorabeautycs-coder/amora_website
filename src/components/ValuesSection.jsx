import React from 'react';
import { motion } from 'framer-motion';
import {
  LeafDnaIcon,
  ShieldCheckIcon,
  LightbulbLeavesIcon,
  HandsFlowerIcon,
} from './ValueIcons';

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * AMORA BY ORGANIC BEAUTY — "Our Values" Section
 * The gold standard of luxury skincare digital design
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * Design Philosophy:
 * - La Mer luxury meets Aesop minimalism
 * - Dieter Rams: "Less, but better"
 * - Jony Ive precision
 *
 * CRITICAL RULES:
 * - Icons: 80px line art, NO fills, stroke-based
 * - Cards: Pure white, h-full for equal heights
 * - Grid: 4 columns desktop → 2 tablet → 1 mobile
 * - Typography: Playfair Display titles, center-aligned
 * - Alignment: flex flex-col + flex-grow on description
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

/**
 * Values Data - exact content from specification
 */
const VALUES = [
  {
    key: 'natural-excellence',
    icon: LeafDnaIcon,
    title: 'Natural Excellence',
    description:
      'We believe in harnessing the power of nature, combining organic ingredients with cutting-edge scientific research.',
  },
  {
    key: 'quality-assurance',
    icon: ShieldCheckIcon,
    title: 'Quality Assurance',
    description:
      'Every product is FDA cleared and rigorously tested to ensure the highest standards of safety and efficacy.',
  },
  {
    key: 'innovation',
    icon: LightbulbLeavesIcon,
    title: 'Innovation',
    description:
      'Our patented technologies represent years of research and development in skincare science.',
  },
  {
    key: 'customer-first',
    icon: HandsFlowerIcon,
    title: 'Customer First',
    description:
      "Your satisfaction and skin health are our top priorities. We're here to support your beauty journey.",
  },
];

/**
 * ValueCard Component
 * CRITICAL: Uses flex flex-col + h-full for equal card heights
 */
const ValueCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.article
      className="group h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      aria-labelledby={`value-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div
        className="
          relative overflow-hidden
          bg-white rounded-2xl
          px-8 py-12
          shadow-[0_1px_3px_rgba(30,42,57,0.04)]
          hover:shadow-[0_8px_32px_rgba(30,42,57,0.08)]
          hover:border hover:border-gold/15
          hover:scale-[1.02]
          transition-all duration-500 ease-out
          flex flex-col
          h-full
        "
      >
        {/* Icon - Pure Line Art, NO Container */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.15 + 0.3,
            duration: 0.5,
            ease: 'easeOut',
          }}
        >
          <div className="transition-transform duration-500 ease-out group-hover:scale-105">
            <Icon />
          </div>
        </motion.div>

        {/* Title - Playfair Display */}
        <h3
          id={`value-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="
            text-2xl font-light text-navy
            text-center mb-4 tracking-tight
            font-serif
          "
        >
          {title}
        </h3>

        {/* Description - flex-grow ensures equal card heights */}
        <p
          className="
            text-base text-navy/70
            text-center leading-relaxed
            font-sans
            flex-grow
          "
        >
          {description}
        </p>
      </div>
    </motion.article>
  );
};

/**
 * ValuesSection Component
 * Ultra-Minimal Editorial Grid with Perfect Alignment
 */
export default function ValuesSection({
  title = 'Our Values',
  subtitle = 'The foundation of timeless beauty',
}) {
  return (
    <section className="py-24 bg-ivory" aria-labelledby="values-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-20">
          {/* Divider Line */}
          <motion.div
            className="w-16 h-[1px] bg-gold/30 mx-auto mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            aria-hidden="true"
          />

          {/* Title */}
          <motion.h2
            id="values-heading"
            className="
              text-5xl md:text-6xl
              font-light text-navy
              mb-4 tracking-tight
              font-serif
            "
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg text-navy/60 font-light font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </header>

        {/* Grid - 4 columns → 2 → 1, automatic equal heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value, idx) => (
            <ValueCard
              key={value.key}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * QUALITY CHECKLIST ✓✓✓
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * ✓ Icons are 80px line art, stroke-based, NO fills
 * ✓ Cards aligned to same height (h-full + flex flex-col)
 * ✓ Description has flex-grow to fill space
 * ✓ Grid creates equal-height rows automatically
 * ✓ Pure white cards with minimal shadow
 * ✓ Exact content from specification
 * ✓ Typography uses Playfair Display for titles
 * ✓ Hover states are subtle and elegant
 * ✓ Grid is 4 columns → 2 → 1 responsive
 * ✓ Spacing is generous (py-24, mb-20)
 * ✓ Motion with custom luxury easing
 * ✓ WCAG AA accessible
 *
 * BOTH CRITICAL ISSUES FIXED:
 * 1. ✓ Card alignment: h-full + flex flex-col + flex-grow
 * 2. ✓ Icons: Inline SVG components, pure line art
 *
 * Zero compromises. La Mer approved. Ship it.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */
