'use client';

import Link from 'next/link';
import { MobileHeader } from '@/components/layout/mobile-header';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Heart, Camera } from 'lucide-react';

interface TimelineEvent {
  id: number;
  year: number;
  month: string;
  events: {
    id: number;
    type: 'trip' | 'milestone' | 'special';
    title: string;
    date: string;
    location?: string;
    emoji: string;
    photos?: number;
    color: string;
  }[];
}

const timeline: TimelineEvent[] = [
  {
    id: 1,
    year: 2022,
    month: 'January',
    events: [
      {
        id: 1,
        type: 'milestone',
        title: 'First Date',
        date: 'Jan 15',
        location: 'Main Street Coffee',
        emoji: '💕',
        color: 'from-[#EC4899] to-[#F472B6]',
      },
    ],
  },
  {
    id: 2,
    year: 2022,
    month: 'May',
    events: [
      {
        id: 2,
        type: 'trip',
        title: 'Mountain Getaway',
        date: 'May 20-22',
        location: 'Rocky Mountains',
        emoji: '⛰️',
        photos: 47,
        color: 'from-[#10B981] to-[#34D399]',
      },
    ],
  },
  {
    id: 3,
    year: 2022,
    month: 'September',
    events: [
      {
        id: 3,
        type: 'special',
        title: 'Moved In Together',
        date: 'Sep 1',
        emoji: '🏠',
        color: 'from-[#F59E0B] to-[#FBBF24]',
      },
    ],
  },
  {
    id: 4,
    year: 2023,
    month: 'March',
    events: [
      {
        id: 4,
        type: 'trip',
        title: 'NYC Adventure',
        date: 'Mar 10-15',
        location: 'New York City',
        emoji: '🗽',
        photos: 156,
        color: 'from-[#3B82F6] to-[#60A5FA]',
      },
    ],
  },
  {
    id: 5,
    year: 2023,
    month: 'September',
    events: [
      {
        id: 5,
        type: 'trip',
        title: 'Tokyo Experience',
        date: 'Sep 5-15',
        location: 'Tokyo, Japan',
        emoji: '🗾',
        photos: 234,
        color: 'from-[#EF4444] to-[#F97316]',
      },
    ],
  },
  {
    id: 6,
    year: 2024,
    month: 'March',
    events: [
      {
        id: 6,
        type: 'milestone',
        title: 'Engagement',
        date: 'Mar 12',
        location: 'Paris, France',
        emoji: '💍',
        photos: 89,
        color: 'from-[#EC4899] to-[#F472B6]',
      },
      {
        id: 7,
        type: 'trip',
        title: 'Paris Spring',
        date: 'Mar 10-17',
        location: 'Paris, France',
        emoji: '🗼',
        photos: 178,
        color: 'from-[#EC4899] to-[#F472B6]',
      },
    ],
  },
  {
    id: 7,
    year: 2025,
    month: 'December',
    events: [
      {
        id: 8,
        type: 'trip',
        title: 'Bali Honeymoon',
        date: 'Dec 15-29',
        location: 'Bali, Indonesia',
        emoji: '🏝️',
        color: 'from-[#3B82F6] to-[#60A5FA]',
      },
    ],
  },
];

export default function TimelinePage() {
  const totalTrips = timeline.reduce((acc, year) => 
    acc + year.events.filter(e => e.type === 'trip').length, 0
  );
  
  const totalPhotos = timeline.reduce((acc, year) => 
    acc + year.events.reduce((sum, e) => sum + (e.photos || 0), 0), 0
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <MobileHeader title="Our Timeline" />

      <div className="px-4 py-5 space-y-5 max-w-2xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card variant="default" padding="sm" className="text-center">
            <div className="text-2xl font-bold text-[#0F172A]">{timeline.length}</div>
            <div className="text-xs text-[#64748B]">Years</div>
          </Card>
          <Card variant="default" padding="sm" className="text-center">
            <div className="text-2xl font-bold text-[#0F172A]">{totalTrips}</div>
            <div className="text-xs text-[#64748B]">Trips</div>
          </Card>
          <Card variant="default" padding="sm" className="text-center">
            <div className="text-2xl font-bold text-[#0F172A]">{totalPhotos}</div>
            <div className="text-xs text-[#64748B]">Photos</div>
          </Card>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#E2E8F0]" />

          {/* Timeline Events */}
          <div className="space-y-6">
            {timeline.map((yearGroup) => (
              <div key={yearGroup.id}>
                {/* Year Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#3B82F6] text-white flex items-center justify-center text-sm font-bold z-10">
                    {yearGroup.year.toString().slice(2)}
                  </div>
                  <div className="flex-1 h-px bg-[#E2E8F0]" />
                  <span className="text-sm font-semibold text-[#64748B]">{yearGroup.year}</span>
                </div>

                {/* Events */}
                <div className="space-y-3 pl-12">
                  {yearGroup.events.map((event) => (
                    <Link
                      key={event.id}
                      href={event.type === 'trip' ? `/trips/${event.title.toLowerCase().replace(/\s+/g, '-')}` : '/milestones'}
                    >
                      <Card variant="default" padding="md" className="hover:shadow-md transition-shadow">
                        <div className="flex gap-3">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${event.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                            {event.emoji}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-[#0F172A] mb-1">{event.title}</h4>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-sm text-[#64748B]">
                                <Calendar size={12} />
                                <span>{event.date}</span>
                              </div>
                              {event.location && (
                                <div className="flex items-center gap-2 text-sm text-[#64748B]">
                                  <MapPin size={12} />
                                  <span>{event.location}</span>
                                </div>
                              )}
                              {event.photos && (
                                <div className="flex items-center gap-2 text-sm text-[#3B82F6]">
                                  <Camera size={12} />
                                  <span>{event.photos} photos</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Message */}
        <Card variant="flat" padding="lg" className="text-center">
          <div className="text-3xl mb-2">❤️</div>
          <p className="text-sm text-[#64748B]">
            Every adventure brings us closer together
          </p>
        </Card>
      </div>
    </div>
  );
}
