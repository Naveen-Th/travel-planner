'use client';

import { MobileHeader } from '@/components/layout/mobile-header';
import { Card } from '@/components/ui/card';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

export default function MoneyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader title="Money" />

      <div className="px-4 py-6 space-y-6 max-w-2xl mx-auto">
        {/* Overview */}
        <Card variant="elevated" padding="lg">
          <h3 className="text-lg font-semibold mb-4">All Trips Overview</h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-600 mb-1">Total Spent</div>
              <div className="text-3xl font-bold text-gray-900">$12,450</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">This Year</div>
                <div className="text-xl font-semibold text-green-600 flex items-center gap-1">
                  <TrendingUp size={20} />
                  $8,200
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Last Year</div>
                <div className="text-xl font-semibold text-gray-600">$4,250</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Recent Trips */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Recent Trips</h3>
          <div className="space-y-3">
            {[
              { name: 'Bali Honeymoon', amount: 2450, budget: 3000, emoji: '🏝️' },
              { name: 'Paris', amount: 3200, budget: 3000, emoji: '🗼' },
              { name: 'Tokyo', amount: 4100, budget: 4500, emoji: '🗾' },
            ].map((trip) => (
              <Card key={trip.name} variant="default" padding="md">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{trip.emoji}</span>
                    <span className="font-semibold">{trip.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">${trip.amount}</div>
                    <div className="text-xs text-gray-500">/ ${trip.budget}</div>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FF6B6B] rounded-full"
                    style={{ width: `${(trip.amount / trip.budget) * 100}%` }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
