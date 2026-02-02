'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, MapPin, DollarSign, Camera, Backpack, Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { FAB } from '@/components/ui/fab';

export default function DashboardPage() {
  const [greeting] = useState(() => {
    const hour = new Date().getHours();
    if (hour < 12) return '☀️ Good morning';
    if (hour < 18) return '🌤️ Good afternoon';
    return '🌙 Good evening';
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-30">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-semibold text-[#0F172A]">{greeting}, Sarah!</h1>
          <button className="w-9 h-9 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-semibold text-sm">
            S
          </button>
        </div>
      </header>

      <div className="px-4 py-5 space-y-5 max-w-2xl mx-auto">
        {/* Active Trip Card */}
        <Card variant="default" padding="none" className="overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-40 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA]">
            <div className="absolute bottom-3 left-4 text-white">
              <div className="text-2xl mb-1">🏝️</div>
              <h2 className="text-xl font-bold">Bali Honeymoon</h2>
            </div>
          </div>

          {/* Trip Info */}
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-4 text-sm text-[#64748B]">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>Dec 15-29, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span className="font-semibold text-[#3B82F6]">14 days to go!</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-4 gap-2">
              <Link href="/trips/bali/plan" className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-[#F1F5F9] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#DBEAFE] flex items-center justify-center text-xl">
                  📍
                </div>
                <span className="text-xs font-medium text-[#0F172A]">Plan</span>
              </Link>
              <Link href="/trips/bali/money" className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-[#F1F5F9] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#D1FAE5] flex items-center justify-center text-xl">
                  💰
                </div>
                <span className="text-xs font-medium text-[#0F172A]">Money</span>
              </Link>
              <Link href="/trips/bali/photos" className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-[#F1F5F9] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#E0E7FF] flex items-center justify-center text-xl">
                  📸
                </div>
                <span className="text-xs font-medium text-[#0F172A]">Photos</span>
              </Link>
              <Link href="/trips/bali/packing" className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-[#F1F5F9] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#FEF3C7] flex items-center justify-center text-xl">
                  🎒
                </div>
                <span className="text-xs font-medium text-[#0F172A]">Pack</span>
              </Link>
            </div>
          </div>
        </Card>

        {/* Past Adventures */}
        <div>
          <h3 className="text-base font-semibold mb-3 text-[#0F172A]">Past Adventures</h3>
          <div className="grid grid-cols-4 gap-2">
            {[
              { emoji: '🗼', name: 'Paris', year: '2024', color: 'from-[#EC4899] to-[#F472B6]' },
              { emoji: '🗾', name: 'Tokyo', year: '2023', color: 'from-[#EF4444] to-[#F97316]' },
              { emoji: '🗽', name: 'NYC', year: '2023', color: 'from-[#3B82F6] to-[#60A5FA]' },
              { emoji: '🏛️', name: 'Rome', year: '2022', color: 'from-[#F59E0B] to-[#FBBF24]' },
            ].map((trip) => (
              <Link
                key={trip.name}
                href={`/trips/${trip.name.toLowerCase()}`}
                className="aspect-square rounded-lg hover:opacity-90 transition-all"
              >
                <div className={`w-full h-full rounded-lg bg-gradient-to-br ${trip.color} p-2 flex flex-col items-center justify-center text-white`}>
                  <div className="text-2xl mb-1">{trip.emoji}</div>
                  <div className="text-xs font-semibold">{trip.name}</div>
                  <div className="text-xs opacity-80">{trip.year}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Dream Destinations */}
        <Card variant="default" padding="md">
          <h3 className="text-base font-semibold mb-3 flex items-center gap-2 text-[#0F172A]">
            <span>🌟</span>
            <span>Dream Destinations</span>
          </h3>
          <ul className="space-y-2">
            {[
              'Santorini, Greece',
              'Kyoto, Japan',
              'Patagonia, Argentina',
            ].map((destination) => (
              <li key={destination} className="flex items-center gap-2 text-[#0F172A] text-sm">
                <span className="w-1 h-1 rounded-full bg-[#3B82F6]" />
                <span>{destination}</span>
              </li>
            ))}
          </ul>
          <Link href="/bucket-list" className="mt-3 text-[#3B82F6] text-sm font-medium hover:underline flex items-center gap-1">
            <Plus size={14} />
            <span>View Bucket List</span>
          </Link>
        </Card>

        {/* Milestones Widget */}
        <Card variant="default" padding="md">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold flex items-center gap-2 text-[#0F172A]">
              <span>❤️</span>
              <span>Together</span>
            </h3>
            <Link href="/milestones" className="text-[#3B82F6] text-sm font-medium hover:underline">
              View All
            </Link>
          </div>
          <div className="text-center py-4 bg-[#F8FAFC] rounded-lg">
            <div className="text-3xl font-bold text-[#0F172A] mb-1">1,113 days</div>
            <div className="text-sm text-[#64748B]">and counting</div>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#64748B]">Next milestone:</span>
              <span className="font-medium text-[#0F172A]">Bali Trip in 14 days</span>
            </div>
            <Link href="/timeline" className="block text-center py-2 text-[#3B82F6] text-sm font-medium hover:underline">
              View Timeline →
            </Link>
          </div>
        </Card>
      </div>

      <FAB />
    </div>
  );
}
