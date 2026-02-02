'use client';

import { useState } from 'react';
import { MobileHeader } from '@/components/layout/mobile-header';
import { Camera } from 'lucide-react';
import { FAB } from '@/components/ui/fab';

const photos = [
  { id: 1, location: 'Ubud', date: 'Dec 16', emoji: '🌾' },
  { id: 2, location: 'Beach', date: 'Dec 16', emoji: '🏖️' },
  { id: 3, location: 'Temple', date: 'Dec 17', emoji: '🏛️' },
  { id: 4, location: 'Rice Fields', date: 'Dec 17', emoji: '🌾' },
  { id: 5, location: 'Sunset', date: 'Dec 18', emoji: '🌅' },
  { id: 6, location: 'Market', date: 'Dec 18', emoji: '🛍️' },
  { id: 7, location: 'Waterfall', date: 'Dec 19', emoji: '💦' },
  { id: 8, location: 'Dinner', date: 'Dec 19', emoji: '🍽️' },
  { id: 9, location: 'Hotel', date: 'Dec 20', emoji: '🏨' },
];

export default function PhotosPage() {
  const [activeTab, setActiveTab] = useState('grid');

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader title="Memories" showMenu />

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-20">
        <div className="flex">
          {[
            { id: 'grid', label: 'Grid' },
            { id: 'map', label: 'Map' },
            { id: 'time', label: 'Timeline' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-[#FF6B6B] border-b-2 border-[#FF6B6B]'
                  : 'text-gray-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="p-2">
        <div className="grid grid-cols-3 gap-2 max-w-2xl mx-auto">
          {photos.map((photo) => (
            <button
              key={photo.id}
              className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-blue-400 to-cyan-300 relative group hover:scale-105 transition-transform"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center text-5xl">
                {photo.emoji}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                <div className="text-white text-xs font-medium flex items-center gap-1">
                  <span>📍</span>
                  <span>{photo.location}</span>
                </div>
                <div className="text-white/80 text-xs">{photo.date}</div>
              </div>
            </button>
          ))}
        </div>
        
        <div className="text-center py-6">
          <button className="text-[#FF6B6B] font-medium hover:underline">
            Load more...
          </button>
        </div>
      </div>

      <FAB icon={<Camera size={28} strokeWidth={2.5} />} />
    </div>
  );
}
