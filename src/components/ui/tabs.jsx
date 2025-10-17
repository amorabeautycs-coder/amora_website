import React from 'react';
import { cn } from '@/utils';

export function Tabs({ value, onValueChange, children, className = '', ...props }) {
  return (
    <div className={cn('w-full', className)} {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { value, onValueChange })
      )}
    </div>
  );
}

export function TabsList({ value, onValueChange, children, className = '', ...props }) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-lg bg-ivory/85 border border-gold/15 p-1',
        className
      )}
      role="tablist"
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { selectedValue: value, onValueChange })
      )}
    </div>
  );
}

export function TabsTrigger({ value, selectedValue, onValueChange, children, className = '', ...props }) {
  const isActive = value === selectedValue;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? 'active' : 'inactive'}
      onClick={() => onValueChange(value)}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-xs font-light tracking-wider uppercase transition-all focus:outline-none focus:ring-2 focus:ring-gold/50 disabled:pointer-events-none disabled:opacity-50',
        isActive
          ? 'bg-gold text-white shadow-sm'
          : 'text-navy hover:bg-gold/10',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
