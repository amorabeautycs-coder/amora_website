import React from 'react';
import { cn } from '@/utils';

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={cn(
        'w-full px-4 py-3 rounded-lg border border-gold/25 bg-ivory/50 text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-vertical disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    />
  );
}
