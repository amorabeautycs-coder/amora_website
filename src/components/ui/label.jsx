import React from 'react';
import { cn } from '@/utils';

export function Label({ className = '', children, htmlFor, ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'text-xs tracking-wider uppercase text-navy font-normal block',
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}
