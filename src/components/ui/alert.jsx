import React from 'react';
import { cn } from '@/utils';

export function Alert({ className = '', children, variant = 'default', ...props }) {
  const variants = {
    default: 'bg-ivory border-gold/25 text-navy',
    destructive: 'bg-red-50 border-red-200 text-red-900',
  };

  return (
    <div
      role="alert"
      className={cn(
        'relative w-full rounded-xl border p-4',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function AlertDescription({ className = '', children, ...props }) {
  return (
    <div
      className={cn('text-sm leading-relaxed font-light', className)}
      {...props}
    >
      {children}
    </div>
  );
}
