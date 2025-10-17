import React from 'react';
import { cn } from '@/utils';

const buttonVariants = {
  default: 'bg-gold hover:bg-gold/90 text-white',
  outline: 'border-2 border-gold text-navy hover:bg-gold hover:text-white bg-transparent',
  ghost: 'hover:bg-gold/10 text-navy',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-10 py-4 text-base',
};

export function Button({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '', 
  disabled = false,
  ...props 
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-none font-sans tracking-wider uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold disabled:opacity-50 disabled:cursor-not-allowed',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
