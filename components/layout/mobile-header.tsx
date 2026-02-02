'use client';

import { ArrowLeft, MoreVertical } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { clsx } from 'clsx';

interface MobileHeaderProps {
  title: string;
  showBack?: boolean;
  showMenu?: boolean;
  onMenuClick?: () => void;
  className?: string;
  rightAction?: React.ReactNode;
}

export function MobileHeader({ 
  title, 
  showBack = false, 
  showMenu = false,
  onMenuClick,
  className,
  rightAction
}: MobileHeaderProps) {
  const router = useRouter();
  
  return (
    <header className={clsx(
      'sticky top-0 z-40 bg-white border-b border-[#E2E8F0] safe-area-inset-top',
      className
    )}>
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-3 flex-1">
          {showBack && (
            <button
              onClick={() => router.back()}
              className="p-2 -ml-2 hover:bg-[#F1F5F9] rounded-lg transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          <h1 className="text-lg font-semibold truncate">{title}</h1>
        </div>
        
        {rightAction || (showMenu && (
          <button
            onClick={onMenuClick}
            className="p-2 -mr-2 hover:bg-[#F1F5F9] rounded-lg transition-colors"
            aria-label="Menu"
          >
            <MoreVertical size={20} />
          </button>
        ))}
      </div>
    </header>
  );
}
