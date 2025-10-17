import React, { useState } from 'react';

export default function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      className="overflow-hidden rounded-xl hover:shadow-lg transition-all duration-300"
      style={{
        background: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(197, 162, 93, 0.25)',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)',
      }}
    >
      <h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-8 py-6 text-left flex items-start justify-between hover:bg-ivory/30 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${index}`}
        >
          <span
            className="text-lg text-navy pr-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
          >
            {faq.question}
          </span>
          <div
            className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-gold transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          >
            ↓
          </div>
        </button>
      </h3>

      {isOpen && (
        <div
          id={`faq-answer-${index}`}
          className="px-8 py-6"
          style={{
            borderTop: '1px solid rgba(197, 162, 93, 0.15)',
            background: 'rgba(250, 248, 245, 0.5)',
          }}
          role="region"
          aria-labelledby={`faq-question-${index}`}
        >
          <p className="text-sm text-gray-700 leading-relaxed" style={{ fontWeight: 300 }}>
            {faq.answer}
          </p>
        </div>
      )}
    </article>
  );
}
