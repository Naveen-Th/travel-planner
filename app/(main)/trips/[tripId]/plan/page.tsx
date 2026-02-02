'use client';

import { useState } from 'react';
import { MobileHeader } from '@/components/layout/mobile-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, DollarSign, MessageCircle, Plus, Edit, Trash2 } from 'lucide-react';

const mockActivities = [
  {
    id: 1,
    day: 'Day 1: Dec 15',
    activities: [
      {
        id: 1,
        time: '10:00 AM',
        emoji: '✈️',
        title: 'Flight to Bali',
        location: 'Ngurah Rai Airport',
        cost: '$450 per person',
        addedBy: 'You',
      },
      {
        id: 2,
        time: '6:00 PM',
        emoji: '🏨',
        title: 'Check-in Hotel',
        location: 'Seminyak Beach Resort',
        comment: 'Sarah: "Can\'t wait! 😍"',
        addedBy: 'Sarah',
      },
    ],
  },
  {
    id: 2,
    day: 'Day 2: Dec 16',
    activities: [
      {
        id: 3,
        time: '9:00 AM',
        emoji: '🍳',
        title: 'Breakfast at hotel',
        cost: 'Included',
      },
      {
        id: 4,
        time: '2:00 PM',
        emoji: '🏛️',
        title: 'Uluwatu Temple',
        location: 'Uluwatu, Bali',
        cost: '$50',
        note: 'Bring sunscreen & water',
        addedBy: 'You & Sarah',
      },
    ],
  },
];

export default function TripPlanPage() {
  const [activeTab, setActiveTab] = useState('plan');

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader title="Bali Honeymoon" showBack showMenu />

      {/* Hero Section */}
      <div className="relative h-56 bg-gradient-to-br from-blue-400 to-cyan-300">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🏝️</span>
            <h1 className="text-2xl font-bold">Bali Honeymoon</h1>
          </div>
          <div className="text-sm space-y-1">
            <div className="flex items-center gap-2">
              <span>📅 Dec 15-29, 2025 • 14 days</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💰 $2,450 / $3,000 budget</span>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="mt-2 h-2 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '82%' }} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-20">
        <div className="flex">
          {[
            { id: 'plan', label: 'Plan', emoji: '📅' },
            { id: 'money', label: 'Money', emoji: '💰' },
            { id: 'memo', label: 'Memo', emoji: '📸' },
            { id: 'pack', label: 'Pack', emoji: '🎒' },
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
              <span className="mr-1">{tab.emoji}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="px-4 py-6 space-y-6 max-w-2xl mx-auto">
        {mockActivities.map((dayGroup) => (
          <div key={dayGroup.id}>
            {/* Day Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-gray-300" />
              <h3 className="text-sm font-semibold text-gray-600">{dayGroup.day}</h3>
              <div className="h-px flex-1 bg-gray-300" />
            </div>

            {/* Activities */}
            <div className="space-y-3">
              {dayGroup.activities.map((activity) => (
                <Card key={activity.id} variant="default" padding="md" className="hover:shadow-lg transition-shadow">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="text-2xl">{activity.emoji}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">{activity.time}</div>
                          <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                        </div>
                      </div>
                      
                      {activity.location && (
                        <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                          <MapPin size={14} />
                          <span>{activity.location}</span>
                        </div>
                      )}
                      
                      {activity.cost && (
                        <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                          <DollarSign size={14} />
                          <span>{activity.cost}</span>
                        </div>
                      )}
                      
                      {activity.comment && (
                        <div className="flex items-start gap-1 text-sm text-gray-600 bg-blue-50 p-2 rounded-lg mb-2">
                          <MessageCircle size={14} className="mt-0.5 flex-shrink-0" />
                          <span>{activity.comment}</span>
                        </div>
                      )}
                      
                      {activity.note && (
                        <div className="text-sm text-gray-600 bg-yellow-50 p-2 rounded-lg mb-2">
                          📝 {activity.note}
                        </div>
                      )}
                      
                      {activity.addedBy && (
                        <div className="text-xs text-gray-400">
                          👤 Added by {activity.addedBy}
                        </div>
                      )}
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-3">
                        <button className="flex-1 py-2 px-3 text-sm font-medium text-[#FF6B6B] bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                          View Details
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <Edit size={18} />
                        </button>
                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              
              {/* Add Activity Button */}
              <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-[#FF6B6B] hover:text-[#FF6B6B] transition-colors flex items-center justify-center gap-2">
                <Plus size={20} />
                <span className="font-medium">Add Activity</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
