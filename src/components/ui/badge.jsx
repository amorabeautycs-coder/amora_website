import React from 'react';
import { cn } from '@/utils';

export function Badge({ className = '', children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-light tracking-wider uppercase rounded-full',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
