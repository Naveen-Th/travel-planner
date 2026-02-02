'use client';

import Link from 'next/link';
import { MobileHeader } from '@/components/layout/mobile-header';
import { Card } from '@/components/ui/card';
import { FAB } from '@/components/ui/fab';
import { Calendar, MapPin } from 'lucide-react';

const trips = [
  {
    id: 'bali',
    name: 'Bali Honeymoon',
    emoji: '🏝️',
    dates: 'Dec 15-29, 2025',
    daysLeft: 14,
    color: 'from-blue-400 to-cyan-300',
    status: 'upcoming',
  },
  {
    id: 'paris',
    name: 'Paris',
    emoji: '🗼',
    dates: 'Mar 10-17, 2024',
    color: 'from-pink-400 to-rose-400',
    status: 'past',
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    emoji: '🗾',
    dates: 'Sep 5-15, 2023',
    color: 'from-red-400 to-orange-400',
    status: 'past',
  },
];

export default function TripsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader title="My Trips" />

      <div className="px-4 py-6 space-y-6 max-w-2xl mx-auto">
        {/* Upcoming Trips */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Upcoming</h3>
          {trips
            .filter((trip) => trip.status === 'upcoming')
            .map((trip) => (
              <Link key={trip.id} href={`/trips/${trip.id}/plan`}>
                <Card variant="default" padding="none" className="overflow-hidden hover:shadow-lg transition-shadow mb-3">
                  <div className={`relative h-40 bg-gradient-to-br ${trip.color}`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-3xl mb-1">{trip.emoji}</div>
                      <h3 className="text-xl font-bold">{trip.name}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{trip.dates}</span>
                      </div>
                      {trip.daysLeft && (
                        <div className="font-semibold text-[#FF6B6B]">
                          {trip.daysLeft} days to go! 🎉
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
        </div>

        {/* Past Trips */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Past Adventures</h3>
          <div className="grid grid-cols-2 gap-3">
            {trips
              .filter((trip) => trip.status === 'past')
              .map((trip) => (
                <Link key={trip.id} href={`/trips/${trip.id}/plan`}>
                  <Card variant="default" padding="none" className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className={`relative h-32 bg-gradient-to-br ${trip.color}`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center text-5xl">
                        {trip.emoji}
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-gray-900 mb-1">{trip.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <Calendar size={12} />
                        <span>{trip.dates}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <FAB />
    </div>
  );
}
