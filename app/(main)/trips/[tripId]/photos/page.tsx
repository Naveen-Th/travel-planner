'use client';

import { MobileHeader } from '@/components/layout/mobile-header';
import { Camera } from 'lucide-react';
import { FAB } from '@/components/ui/fab';

const photos = [
  { id: 1, location: 'Ubud Rice Terraces', date: 'Dec 16', emoji: '🌾', color: 'from-green-400 to-emerald-300' },
  { id: 2, location: 'Seminyak Beach', date: 'Dec 16', emoji: '🏖️', color: 'from-blue-400 to-cyan-300' },
  { id: 3, location: 'Uluwatu Temple', date: 'Dec 17', emoji: '🏛️', color: 'from-amber-400 to-orange-300' },
  { id: 4, location: 'Tegallalang', date: 'Dec 17', emoji: '🌾', color: 'from-lime-400 to-green-300' },
  { id: 5, location: 'Tanah Lot Sunset', date: 'Dec 18', emoji: '🌅', color: 'from-orange-400 to-red-300' },
  { id: 6, location: 'Ubud Market', date: 'Dec 18', emoji: '🛍️', color: 'from-purple-400 to-pink-300' },
  { id: 7, location: 'Tegenungan Waterfall', date: 'Dec 19', emoji: '💦', color: 'from-cyan-400 to-blue-300' },
  { id: 8, location: 'Locavore Restaurant', date: 'Dec 19', emoji: '🍽️', color: 'from-rose-400 to-pink-300' },
  { id: 9, location: 'Hotel Pool', date: 'Dec 20', emoji: '🏊', color: 'from-sky-400 to-blue-300' },
];

export default function TripPhotosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader title="Bali Memories" showBack showMenu />

      {/* Photo Grid */}
      <div className="p-2">
        <div className="grid grid-cols-3 gap-2 max-w-2xl mx-auto">
          {photos.map((photo) => (
            <button
              key={photo.id}
              className="aspect-square rounded-lg overflow-hidden relative group hover:scale-105 transition-transform active:scale-95"
            >
              <div className={`w-full h-full bg-gradient-to-br ${photo.color} relative`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center text-5xl">
                  {photo.emoji}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-white text-xs font-medium flex items-center gap-1 truncate">
                    <span>📍</span>
                    <span className="truncate">{photo.location}</span>
                  </div>
                  <div className="text-white/80 text-xs">{photo.date}</div>
                </div>
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
