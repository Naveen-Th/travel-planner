'use client';

import { useState } from 'react';
import { MobileHeader } from '@/components/layout/mobile-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FAB } from '@/components/ui/fab';
import { ThumbsUp, MapPin, DollarSign, Calendar, Plus, Check } from 'lucide-react';

interface BucketListItem {
  id: number;
  destination: string;
  country: string;
  emoji: string;
  description: string;
  estimatedCost: string;
  bestTime: string;
  yourVote: boolean;
  sarahVote: boolean;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
}

const bucketList: BucketListItem[] = [
  {
    id: 1,
    destination: 'Santorini',
    country: 'Greece',
    emoji: '🇬🇷',
    description: 'Watch the sunset in Oia, explore white-washed villages, and swim in the Aegean Sea',
    estimatedCost: '$3,500',
    bestTime: 'Apr-Oct',
    yourVote: true,
    sarahVote: true,
    priority: 'high',
    completed: false,
  },
  {
    id: 2,
    destination: 'Kyoto',
    country: 'Japan',
    emoji: '🇯🇵',
    description: 'Visit ancient temples, experience traditional tea ceremony, and see cherry blossoms',
    estimatedCost: '$4,200',
    bestTime: 'Mar-Apr',
    yourVote: true,
    sarahVote: false,
    priority: 'high',
    completed: false,
  },
  {
    id: 3,
    destination: 'Patagonia',
    country: 'Argentina',
    emoji: '🇦🇷',
    description: 'Hike glaciers, see penguins, and explore the end of the world',
    estimatedCost: '$5,000',
    bestTime: 'Nov-Mar',
    yourVote: false,
    sarahVote: true,
    priority: 'medium',
    completed: false,
  },
  {
    id: 4,
    destination: 'Maldives',
    country: 'Maldives',
    emoji: '🇲🇻',
    description: 'Overwater bungalows, snorkeling with manta rays, and pristine beaches',
    estimatedCost: '$6,000',
    bestTime: 'Nov-Apr',
    yourVote: true,
    sarahVote: true,
    priority: 'high',
    completed: false,
  },
  {
    id: 5,
    destination: 'Iceland',
    country: 'Iceland',
    emoji: '🇮🇸',
    description: 'Northern lights, hot springs, waterfalls, and volcanic landscapes',
    estimatedCost: '$4,500',
    bestTime: 'Sep-Mar',
    yourVote: true,
    sarahVote: false,
    priority: 'medium',
    completed: false,
  },
  {
    id: 6,
    destination: 'Paris',
    country: 'France',
    emoji: '🇫🇷',
    description: 'Romantic city of lights, art, and amazing food',
    estimatedCost: '$3,000',
    bestTime: 'Year-round',
    yourVote: true,
    sarahVote: true,
    priority: 'high',
    completed: true,
  },
];

const priorityColors = {
  high: { bg: 'bg-[#FEE2E2]', text: 'text-[#EF4444]', label: 'Must Go!' },
  medium: { bg: 'bg-[#DBEAFE]', text: 'text-[#3B82F6]', label: 'Someday' },
  low: { bg: 'bg-[#F1F5F9]', text: 'text-[#64748B]', label: 'Maybe' },
};

export default function BucketListPage() {
  const [filter, setFilter] = useState<'all' | 'agreed' | 'pending'>('all');

  const filteredList = bucketList.filter(item => {
    if (item.completed) return false;
    if (filter === 'all') return true;
    if (filter === 'agreed') return item.yourVote && item.sarahVote;
    if (filter === 'pending') return !(item.yourVote && item.sarahVote);
    return true;
  });

  const completedCount = bucketList.filter(item => item.completed).length;
  const agreedCount = bucketList.filter(item => item.yourVote && item.sarahVote && !item.completed).length;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <MobileHeader title="Bucket List" />

      <div className="px-4 py-5 space-y-4 max-w-2xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <Card variant="default" padding="md">
            <div className="text-2xl font-bold text-[#0F172A]">{agreedCount}</div>
            <div className="text-sm text-[#64748B]">Both Want to Go</div>
          </Card>
          <Card variant="default" padding="md">
            <div className="text-2xl font-bold text-[#10B981]">{completedCount}</div>
            <div className="text-sm text-[#64748B]">Completed ✓</div>
          </Card>
        </div>

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
            All
          </button>
          <button
            onClick={() => setFilter('agreed')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              filter === 'agreed'
                ? 'bg-[#3B82F6] text-white'
                : 'text-[#64748B] hover:bg-[#F1F5F9]'
            }`}
          >
            Agreed
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              filter === 'pending'
                ? 'bg-[#3B82F6] text-white'
                : 'text-[#64748B] hover:bg-[#F1F5F9]'
            }`}
          >
            Pending
          </button>
        </div>

        {/* Bucket List Items */}
        <div className="space-y-3">
          {filteredList.map((item) => (
            <Card key={item.id} variant="default" padding="md">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{item.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-[#0F172A]">{item.destination}</h3>
                    <p className="text-sm text-[#64748B]">{item.country}</p>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-lg ${priorityColors[item.priority].bg}`}>
                  <span className={`text-xs font-medium ${priorityColors[item.priority].text}`}>
                    {priorityColors[item.priority].label}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#0F172A] mb-3 leading-relaxed">
                {item.description}
              </p>

              {/* Details */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="flex items-center gap-1 text-sm text-[#64748B]">
                  <DollarSign size={14} />
                  <span>{item.estimatedCost}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-[#64748B]">
                  <Calendar size={14} />
                  <span>{item.bestTime}</span>
                </div>
              </div>

              {/* Voting */}
              <div className="flex items-center gap-2 pt-3 border-t border-[#E2E8F0]">
                <div className="flex items-center gap-2 flex-1">
                  <button
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${
                      item.yourVote
                        ? 'bg-[#3B82F6] text-white'
                        : 'bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0]'
                    }`}
                  >
                    <ThumbsUp size={14} />
                    <span className="text-xs font-medium">You</span>
                  </button>
                  <button
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${
                      item.sarahVote
                        ? 'bg-[#EC4899] text-white'
                        : 'bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0]'
                    }`}
                  >
                    <ThumbsUp size={14} />
                    <span className="text-xs font-medium">Sarah</span>
                  </button>
                </div>
                {item.yourVote && item.sarahVote && (
                  <div className="flex items-center gap-1 text-[#10B981] text-sm font-medium">
                    <Check size={16} />
                    <span>Agreed!</span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Completed Section */}
        {completedCount > 0 && (
          <div>
            <h3 className="text-base font-semibold mb-3 text-[#0F172A] flex items-center gap-2">
              <Check size={18} className="text-[#10B981]" />
              Completed Dreams
            </h3>
            <div className="space-y-2">
              {bucketList
                .filter(item => item.completed)
                .map((item) => (
                  <Card key={item.id} variant="flat" padding="sm">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl opacity-50">{item.emoji}</span>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#0F172A] line-through opacity-60">
                          {item.destination}
                        </h4>
                        <p className="text-xs text-[#64748B]">{item.country}</p>
                      </div>
                      <Check size={20} className="text-[#10B981]" />
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        )}
      </div>

      <FAB icon={<Plus size={24} />} />
    </div>
  );
}
