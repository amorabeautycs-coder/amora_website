import React from 'react';

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * LUXURY LINE ART ICONS — AMORA BY ORGANIC BEAUTY
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * Design Specifications:
 * - Size: 80×80px (w-20 h-20)
 * - Style: Outline/stroke only, NO fills
 * - Stroke: 1.5px weight, gold color (#C5A25D)
 * - Aesthetic: Organic, elegant, minimalist
 *
 * Philosophy: Aesop meets La Mer — refined simplicity
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

/**
 * Leaf + DNA Icon
 * Represents "Natural Excellence" - organic ingredients + scientific research
 */
export const LeafDnaIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gold"
    aria-hidden="true"
  >
    {/* Leaf outline - organic shape */}
    <path d="M 25 65 Q 22 50, 25 35 Q 28 22, 40 18 Q 52 22, 55 35 Q 58 50, 55 65 Q 50 72, 40 72 Q 30 72, 25 65 Z" />

    {/* Central vein */}
    <path d="M 40 18 L 40 72" strokeWidth="1.2" />

    {/* Side veins - organic branches */}
    <path d="M 40 28 Q 32 32, 28 38" strokeWidth="1" opacity="0.6" />
    <path d="M 40 38 Q 48 42, 52 48" strokeWidth="1" opacity="0.6" />
    <path d="M 40 48 Q 32 52, 28 58" strokeWidth="1" opacity="0.6" />

    {/* DNA helix - left strand */}
    <path
      d="M 33 25 Q 35 32, 33 40 Q 35 48, 33 56 Q 35 64, 33 70"
      strokeWidth="1.2"
      opacity="0.8"
    />

    {/* DNA helix - right strand */}
    <path
      d="M 47 25 Q 45 32, 47 40 Q 45 48, 47 56 Q 45 64, 47 70"
      strokeWidth="1.2"
      opacity="0.8"
    />

    {/* DNA connecting bars */}
    <line x1="33" y1="28" x2="47" y2="28" strokeWidth="1" opacity="0.5" />
    <line x1="33" y1="36" x2="47" y2="36" strokeWidth="1" opacity="0.5" />
    <line x1="33" y1="44" x2="47" y2="44" strokeWidth="1" opacity="0.5" />
    <line x1="33" y1="52" x2="47" y2="52" strokeWidth="1" opacity="0.5" />
    <line x1="33" y1="60" x2="47" y2="60" strokeWidth="1" opacity="0.5" />
  </svg>
);

/**
 * Shield + Checkmark Icon
 * Represents "Quality Assurance" - FDA cleared, trust, validation
 */
export const ShieldCheckIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gold"
    aria-hidden="true"
  >
    {/* Shield outline */}
    <path d="M 40 10 L 60 18 L 60 40 Q 60 58, 40 70 Q 20 58, 20 40 L 20 18 L 40 10 Z" />

    {/* Inner shield detail */}
    <path
      d="M 40 16 L 54 22 L 54 38 Q 54 52, 40 62"
      strokeWidth="1"
      opacity="0.3"
    />

    {/* Checkmark - prominent */}
    <polyline
      points="30,40 37,50 52,30"
      strokeWidth="2"
    />

    {/* Small decorative elements */}
    <circle cx="40" cy="20" r="1.5" fill="currentColor" opacity="0.4" />
  </svg>
);

/**
 * Lightbulb + Leaves Icon
 * Represents "Innovation" - ideas, nature-inspired technology
 */
export const LightbulbLeavesIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gold"
    aria-hidden="true"
  >
    {/* Lightbulb glass */}
    <path d="M 40 12 Q 50 12, 56 22 Q 60 32, 56 42 L 54 48 L 48 48 L 48 52 L 32 52 L 32 48 L 26 48 L 24 42 Q 20 32, 24 22 Q 30 12, 40 12 Z" />

    {/* Bulb base (threads) */}
    <rect x="32" y="52" width="16" height="3" rx="1" />
    <rect x="32" y="56" width="16" height="3" rx="1" />
    <rect x="34" y="60" width="12" height="4" rx="1.5" />

    {/* Filament */}
    <path d="M 40 24 L 40 42" strokeWidth="1.2" />
    <circle cx="40" cy="33" r="5" strokeWidth="1" opacity="0.3" />

    {/* Leaf sprouts from sides - organic growth */}
    <path d="M 30 20 Q 26 18, 22 20 Q 20 22, 22 26 Q 24 28, 28 26" />
    <path d="M 50 20 Q 54 18, 58 20 Q 60 22, 58 26 Q 56 28, 52 26" />

    {/* Leaf veins */}
    <path d="M 24 22 L 26 24" strokeWidth="0.8" opacity="0.6" />
    <path d="M 56 22 L 54 24" strokeWidth="0.8" opacity="0.6" />

    {/* Light rays (optional, subtle) */}
    <line x1="40" y1="8" x2="40" y2="4" strokeWidth="1" opacity="0.4" />
    <line x1="50" y1="12" x2="54" y2="8" strokeWidth="1" opacity="0.4" />
    <line x1="30" y1="12" x2="26" y2="8" strokeWidth="1" opacity="0.4" />
  </svg>
);

/**
 * Hands + Flower Icon
 * Represents "Customer First" - care, nurturing, service
 */
export const HandsFlowerIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gold"
    aria-hidden="true"
  >
    {/* Left hand (cupped) */}
    <path d="M 12 60 Q 15 52, 22 48 L 26 46 Q 28 44, 30 46 L 33 48 Q 36 44, 40 44" />

    {/* Right hand (cupped) */}
    <path d="M 68 60 Q 65 52, 58 48 L 54 46 Q 52 44, 50 46 L 47 48 Q 44 44, 40 44" />

    {/* Hand details - fingers */}
    <path d="M 22 48 L 18 54" strokeWidth="1.2" />
    <path d="M 26 46 L 24 52" strokeWidth="1.2" />
    <path d="M 30 46 L 30 52" strokeWidth="1.2" />

    <path d="M 58 48 L 62 54" strokeWidth="1.2" />
    <path d="M 54 46 L 56 52" strokeWidth="1.2" />
    <path d="M 50 46 L 50 52" strokeWidth="1.2" />

    {/* Flower stem */}
    <path d="M 40 44 L 40 18" strokeWidth="1.5" />

    {/* Flower petals - simple 5-petal design */}
    <circle cx="40" cy="12" r="4" />
    <circle cx="47" cy="15" r="4" />
    <circle cx="49" cy="22" r="4" />
    <circle cx="45" cy="28" r="4" />
    <circle cx="35" cy="28" r="4" />
    <circle cx="31" cy="22" r="4" />
    <circle cx="33" cy="15" r="4" />

    {/* Flower center */}
    <circle cx="40" cy="20" r="5" fill="currentColor" opacity="0.15" />
    <circle cx="40" cy="20" r="2.5" fill="currentColor" opacity="0.6" />

    {/* Leaves on stem */}
    <path d="M 40 32 Q 35 34, 32 38" strokeWidth="1.2" />
    <path d="M 40 38 Q 45 40, 48 44" strokeWidth="1.2" />

    {/* Leaf details */}
    <path d="M 34 36 L 36 37" strokeWidth="0.8" opacity="0.5" />
    <path d="M 46 42 L 44 41" strokeWidth="0.8" opacity="0.5" />
  </svg>
);

/**
 * Icon registry for easy lookup
 */
export const VALUE_ICONS = {
  'natural-excellence': LeafDnaIcon,
  'quality-assurance': ShieldCheckIcon,
  'innovation': LightbulbLeavesIcon,
  'customer-first': HandsFlowerIcon,
};
