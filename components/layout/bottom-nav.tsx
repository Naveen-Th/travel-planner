'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Map, Heart, BookOpen, Settings } from 'lucide-react';
import { clsx } from 'clsx';

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Home' },
  { href: '/trips', icon: Map, label: 'Trips' },
  { href: '/bucket-list', icon: Heart, label: 'Bucket' },
  { href: '/journal', icon: BookOpen, label: 'Journal' },
  { href: '/settings', icon: Settings, label: 'Settings' },
];

export function BottomNav() {
  const pathname = usePathname();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E2E8F0] safe-area-inset-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href || pathname?.startsWith(href + '/');
          
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                'flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors duration-200',
                isActive ? 'text-[#3B82F6]' : 'text-[#64748B]'
              )}
            >
              <Icon 
                size={22} 
                strokeWidth={isActive ? 2.5 : 2}
                className="transition-all duration-200"
              />
              <span className={clsx(
                'text-xs',
                isActive ? 'font-semibold' : 'font-medium'
              )}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
