'use client';

import { MobileHeader } from '@/components/layout/mobile-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FAB } from '@/components/ui/fab';
import { Heart, Calendar, MapPin, Camera, Plus } from 'lucide-react';

interface Milestone {
  id: number;
  title: string;
  date: string;
  type: 'anniversary' | 'trip' | 'special';
  emoji: string;
  description: string;
  daysAgo?: number;
  photos?: number;
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: 'First Date',
    date: 'Jan 15, 2022',
    type: 'anniversary',
    emoji: '💕',
    description: 'Coffee shop on Main Street. You wore that blue dress.',
    daysAgo: 1113,
  },
  {
    id: 2,
    title: 'First Trip Together',
    date: 'May 20, 2022',
    type: 'trip',
    emoji: '✈️',
    description: 'Weekend getaway to the mountains. Started our adventure tradition!',
    daysAgo: 988,
    photos: 47,
  },
  {
    id: 3,
    title: 'Moved In Together',
    date: 'Sep 1, 2022',
    type: 'special',
    emoji: '🏠',
    description: 'Our first home together. Best decision ever!',
    daysAgo: 884,
  },
  {
    id: 4,
    title: 'Engagement',
    date: 'Mar 12, 2024',
    type: 'anniversary',
    emoji: '💍',
    description: 'Under the Eiffel Tower at sunset. She said yes!',
    daysAgo: 327,
    photos: 89,
  },
  {
    id: 5,
    title: 'Bali Honeymoon',
    date: 'Dec 15, 2025',
    type: 'trip',
    emoji: '🏝️',
    description: 'Our dream honeymoon adventure begins!',
    daysAgo: -14,
  },
];

const upcomingMilestones = milestones.filter(m => (m.daysAgo || 0) < 0);
const pastMilestones = milestones.filter(m => (m.daysAgo || 0) >= 0);

const typeColors = {
  anniversary: { bg: 'bg-[#FEE2E2]', text: 'text-[#EF4444]' },
  trip: { bg: 'bg-[#DBEAFE]', text: 'text-[#3B82F6]' },
  special: { bg: 'bg-[#FEF3C7]', text: 'text-[#F59E0B]' },
};

export default function MilestonesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <MobileHeader title="Our Milestones" />

      <div className="px-4 py-5 space-y-5 max-w-2xl mx-auto">
        {/* Stats Card */}
        <Card variant="default" padding="lg" className="text-center">
          <div className="text-4xl mb-2">❤️</div>
          <div className="text-3xl font-bold text-[#0F172A] mb-1">
            {pastMilestones[0]?.daysAgo || 0} days
          </div>
          <div className="text-sm text-[#64748B]">together and counting</div>
        </Card>

        {/* Upcoming Milestones */}
        {upcomingMilestones.length > 0 && (
          <div>
            <h3 className="text-base font-semibold mb-3 text-[#0F172A]">Coming Up</h3>
            <div className="space-y-3">
              {upcomingMilestones.map((milestone) => (
                <Card key={milestone.id} variant="default" padding="md">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-lg ${typeColors[milestone.type].bg} flex items-center justify-center text-2xl`}>
                        {milestone.emoji}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[#0F172A] mb-1">{milestone.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-[#64748B] mb-2">
                        <Calendar size={14} />
                        <span>{milestone.date}</span>
                        <span className="font-medium text-[#3B82F6]">
                          in {Math.abs(milestone.daysAgo || 0)} days
                        </span>
                      </div>
                      <p className="text-sm text-[#0F172A]">{milestone.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Timeline */}
        <div>
          <h3 className="text-base font-semibold mb-3 text-[#0F172A]">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#E2E8F0]" />

            {/* Timeline Items */}
            <div className="space-y-4">
              {pastMilestones.map((milestone, index) => (
                <div key={milestone.id} className="relative pl-14">
                  {/* Timeline Dot */}
                  <div className={`absolute left-3 top-3 w-6 h-6 rounded-full ${typeColors[milestone.type].bg} border-2 border-white flex items-center justify-center`}>
                    <div className={`w-2 h-2 rounded-full ${typeColors[milestone.type].text.replace('text-', 'bg-')}`} />
                  </div>

                  <Card variant="default" padding="md">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-[#0F172A] mb-1 flex items-center gap-2">
                          <span>{milestone.emoji}</span>
                          <span>{milestone.title}</span>
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-[#64748B]">
                          <Calendar size={14} />
                          <span>{milestone.date}</span>
                          <span>• {milestone.daysAgo} days ago</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-[#0F172A] mb-2">{milestone.description}</p>
                    {milestone.photos && (
                      <div className="flex items-center gap-1 text-sm text-[#3B82F6]">
                        <Camera size={14} />
                        <span>{milestone.photos} photos</span>
                      </div>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add Milestone CTA */}
        <Card variant="flat" padding="lg" className="text-center">
          <div className="text-3xl mb-2">✨</div>
          <h3 className="text-base font-semibold text-[#0F172A] mb-2">
            Create a Milestone
          </h3>
          <p className="text-sm text-[#64748B] mb-4">
            Mark special moments in your journey together
          </p>
          <Button variant="accent" size="sm">
            <Plus size={16} className="mr-1" />
            Add Milestone
          </Button>
        </Card>
      </div>

      <FAB icon={<Plus size={24} />} />
    </div>
  );
}
