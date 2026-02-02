'use client';

import { Plus } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface FABProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

export function FAB({ icon, className, ...props }: FABProps) {
  return (
    <button
      className={clsx(
        'fixed bottom-20 right-4 z-40',
        'w-14 h-14 rounded-full',
        'bg-[#3B82F6] text-white',
        'flex items-center justify-center',
        'hover:bg-[#60A5FA]',
        'transition-all duration-200',
        'shadow-lg',
        className
      )}
      {...props}
    >
      {icon || <Plus size={24} strokeWidth={2.5} />}
    </button>
  );
}
