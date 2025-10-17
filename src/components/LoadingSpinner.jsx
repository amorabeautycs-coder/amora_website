import React from 'react';

export default function LoadingSpinner() {
  return (
    <div 
      className="min-h-screen bg-ivory flex items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-gold/20 border-t-gold rounded-full animate-spin" aria-hidden="true" />
        <div className="text-sm tracking-wider uppercase text-navy" style={{ fontWeight: 300 }}>
          Loading...
        </div>
      </div>
    </div>
  );
}
