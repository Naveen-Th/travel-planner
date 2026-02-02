'use client';

import { useState } from 'react';
import { MobileHeader } from '@/components/layout/mobile-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FAB } from '@/components/ui/fab';
import { Heart, Smile, Meh, Frown, Calendar, MapPin, Plus } from 'lucide-react';

interface JournalEntry {
  id: number;
  date: string;
  location: string;
  trip: string;
  mood: 'amazing' | 'good' | 'okay' | 'meh';
  content: string;
  author: 'You' | 'Sarah';
  photos?: string[];
  favorites: number;
}

const entries: JournalEntry[] = [
  {
    id: 1,
    date: 'Dec 16, 2025',
    location: 'Ubud, Bali',
    trip: 'Bali Honeymoon',
    mood: 'amazing',
    content: 'Today was magical! We explored the rice terraces and had the most amazing lunch overlooking the valley. Sarah looked so happy, and I couldn\'t stop taking photos. This is what life is about. ❤️',
    author: 'You',
    favorites: 2,
  },
  {
    id: 2,
    date: 'Dec 16, 2025',
    location: 'Ubud, Bali',
    trip: 'Bali Honeymoon',
    mood: 'amazing',
    content: 'The rice terraces were breathtaking! I felt so peaceful walking through them with you. Can\'t believe we\'re actually here together. Best decision ever to take this trip! 🌾✨',
    author: 'Sarah',
    favorites: 2,
  },
  {
    id: 3,
    date: 'Mar 12, 2024',
    location: 'Paris',
    trip: 'Paris Spring',
    mood: 'good',
    content: 'Eiffel Tower at sunset was incredible. We had champagne and watched the lights come on. Sarah said yes to being my travel partner forever! 🗼💍',
    author: 'You',
    favorites: 2,
  },
];

const moodIcons = {
  amazing: { icon: Heart, color: 'text-[#EF4444]', bg: 'bg-[#FEE2E2]', label: 'Amazing' },
  good: { icon: Smile, color: 'text-[#10B981]', bg: 'bg-[#D1FAE5]', label: 'Good' },
  okay: { icon: Meh, color: 'text-[#3B82F6]', bg: 'bg-[#DBEAFE]', label: 'Okay' },
  meh: { icon: Frown, color: 'text-[#F59E0B]', bg: 'bg-[#FEF3C7]', label: 'Meh' },
};

export default function JournalPage() {
  const [filter, setFilter] = useState<'all' | 'you' | 'sarah'>('all');

  const filteredEntries = entries.filter(entry => {
    if (filter === 'all') return true;
    if (filter === 'you') return entry.author === 'You';
    if (filter === 'sarah') return entry.author === 'Sarah';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <MobileHeader title="Our Journal" />

      <div className="px-4 py-5 space-y-4 max-w-2xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex gap-2 bg-white rounded-lg p-1 border border-[#E2E8F0]">
          <button
            onClick={() => setFilter('all')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-[#3B82F6] text-white'
                : 'text-[#64748B] hover:bg-[#F1F5F9]'
            }`}
          >
            All Entries
          </button>
          <button
            onClick={() => setFilter('you')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              filter === 'you'
                ? 'bg-[#3B82F6] text-white'
                : 'text-[#64748B] hover:bg-[#F1F5F9]'
            }`}
          >
            You
          </button>
          <button
            onClick={() => setFilter('sarah')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              filter === 'sarah'
                ? 'bg-[#3B82F6] text-white'
                : 'text-[#64748B] hover:bg-[#F1F5F9]'
            }`}
          >
            Sarah
          </button>
        </div>

        {/* Journal Entries */}
        <div className="space-y-4">
          {filteredEntries.map((entry) => {
            const MoodIcon = moodIcons[entry.mood].icon;
            
            return (
              <Card key={entry.id} variant="default" padding="md">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={14} className="text-[#64748B]" />
                      <span className="text-sm font-medium text-[#0F172A]">{entry.date}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={14} className="text-[#64748B]" />
                      <span className="text-sm text-[#64748B]">{entry.location}</span>
                      <span className="text-xs text-[#94A3B8]">• {entry.trip}</span>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${moodIcons[entry.mood].bg}`}>
                    <MoodIcon size={16} className={moodIcons[entry.mood].color} />
                    <span className={`text-xs font-medium ${moodIcons[entry.mood].color}`}>
                      {moodIcons[entry.mood].label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <p className="text-[#0F172A] text-sm leading-relaxed mb-3">
                  {entry.content}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-semibold ${
                      entry.author === 'You' ? 'bg-[#3B82F6]' : 'bg-[#EC4899]'
                    }`}>
                      {entry.author === 'You' ? 'Y' : 'S'}
                    </div>
                    <span className="text-sm font-medium text-[#64748B]">{entry.author}</span>
                  </div>
                  <button className="flex items-center gap-1 text-[#EF4444] hover:opacity-80 transition-opacity">
                    <Heart size={16} fill={entry.favorites > 0 ? '#EF4444' : 'none'} />
                    <span className="text-sm font-medium">{entry.favorites}</span>
                  </button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredEntries.length === 0 && (
          <Card variant="flat" padding="lg" className="text-center">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">No entries yet</h3>
            <p className="text-sm text-[#64748B] mb-4">
              Start documenting your adventures together!
            </p>
            <Button variant="accent" size="sm">
              <Plus size={16} className="mr-1" />
              Write First Entry
            </Button>
          </Card>
        )}
      </div>

      <FAB icon={<Plus size={24} />} />
    </div>
  );
}
