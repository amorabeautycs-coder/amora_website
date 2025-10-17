import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { dataClient } from '@/api/dataClient';
import FAQItem from '@/components/FAQItem';

export default function FAQ() {
  const { data: faqs = [], isLoading } = useQuery({
    queryKey: ['faqs'],
    queryFn: () => dataClient.entities.FAQ.list('order'),
  });

  return (
    <div className="min-h-screen bg-ivory py-20">
      <div className="max-w-4xl mx-auto px-8 lg:px-12">
        {/* Header */}
        <header className="text-center mb-20">
          <div className="inline-block w-16 h-px bg-gold mb-8" aria-hidden="true" />
          <h1
            className="text-4xl md:text-7xl text-navy mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed" style={{ fontWeight: 300 }}>
            Your questions, answered
          </p>
        </header>

        {/* FAQs */}
        {isLoading ? (
          <div className="space-y-6" role="status" aria-live="polite" aria-label="Loading FAQs">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="bg-white border border-gold/10 p-8 rounded-xl animate-pulse"
              >
                <div className="h-6 bg-gray-200 w-3/4 mb-3 rounded" />
                <div className="h-4 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        ) : faqs.length > 0 ? (
          <div className="space-y-6" role="list">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32">
            <div
              className="p-16 rounded-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.6)',
                border: '1px solid rgba(197, 162, 93, 0.25)',
              }}
            >
              <p className="text-lg text-gray-600" style={{ fontWeight: 300 }}>
                No FAQs available yet
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
