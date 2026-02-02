'use client';

import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[#0F172A] mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={clsx(
              'w-full h-11 px-3 text-base bg-white border rounded-lg transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6]',
              'placeholder:text-[#94A3B8]',
              error && 'border-[#EF4444] focus:ring-[#EF4444] focus:border-[#EF4444]',
              !error && 'border-[#E2E8F0]',
              icon && 'pl-10',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-[#EF4444]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
