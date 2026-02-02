'use client';

import { MobileHeader } from '@/components/layout/mobile-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, ArrowRight } from 'lucide-react';

const expenses = [
  {
    id: 1,
    emoji: '🍕',
    title: 'Dinner at Locavore',
    amount: 85,
    paidBy: 'You',
    split: '50/50',
    date: 'Dec 16',
  },
  {
    id: 2,
    emoji: '🚕',
    title: 'Taxi to Ubud',
    amount: 15,
    paidBy: 'Sarah',
    split: '50/50',
    date: 'Dec 16',
  },
];

const categories = [
  { emoji: '🍕', name: 'Food', amount: 850, percentage: 80 },
  { emoji: '🚕', name: 'Transport', amount: 320, percentage: 30 },
  { emoji: '🏨', name: 'Hotel', amount: 900, percentage: 90 },
  { emoji: '🎭', name: 'Activities', amount: 280, percentage: 28 },
  { emoji: '🛍️', name: 'Shopping', amount: 100, percentage: 10 },
];

export default function TripMoneyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader title="Bali Honeymoon" showBack showMenu />

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
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                tab.id === 'money'
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

      <div className="px-4 py-6 space-y-6 max-w-2xl mx-auto">
        {/* Budget Overview */}
        <Card variant="default" padding="lg">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span>💰</span>
            <span>Trip Budget</span>
          </h3>
          <div className="space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-bold text-gray-900">$2,450</span>
              <span className="text-lg text-gray-500">/ $3,000</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8B94] rounded-full transition-all duration-500"
                style={{ width: '82%' }}
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">$550 left to spend</span>
              <span className="text-green-600 font-medium">On track! 🎯</span>
            </div>
          </div>
        </Card>

        {/* Who Owes Whom */}
        <Card variant="default" padding="lg">
          <h3 className="text-lg font-semibold mb-4">Who Owes Whom?</h3>
          <div className="flex items-center justify-center py-6">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF8B94] flex items-center justify-center text-white font-bold text-xl mb-2">
                  Y
                </div>
                <span className="text-sm font-medium">You</span>
              </div>
              
              <div className="flex flex-col items-center">
                <ArrowRight className="text-[#FF6B6B]" size={24} />
                <span className="text-lg font-bold text-[#FF6B6B] mt-1">$125</span>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-xl mb-2">
                  S
                </div>
                <span className="text-sm font-medium">Sarah</span>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 mb-4">Sarah owes you $125</p>
          <Button variant="secondary" fullWidth>
            Mark as Settled ✓
          </Button>
        </Card>

        {/* Expenses by Category */}
        <Card variant="default" padding="lg">
          <h3 className="text-lg font-semibold mb-4">Expenses by Category</h3>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.name}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{category.emoji}</span>
                    <span className="font-medium text-gray-700">{category.name}</span>
                  </div>
                  <span className="font-semibold text-gray-900">${category.amount}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#FF6B6B] rounded-full"
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Expenses */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Recent Expenses</h3>
          <div className="space-y-3">
            {expenses.map((expense) => (
              <Card key={expense.id} variant="default" padding="md" className="hover:shadow-lg transition-shadow">
                <div className="flex gap-3">
                  <div className="text-2xl">{expense.emoji}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{expense.title}</h4>
                    <div className="text-sm text-gray-600 space-y-0.5">
                      <div>${expense.amount} • Paid by {expense.paidBy}</div>
                      <div>Split: {expense.split} • {expense.date}</div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button className="flex-1 py-2 px-3 text-sm font-medium text-[#FF6B6B] bg-red-50 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center gap-1">
                        <Edit size={16} />
                        Edit
                      </button>
                      <button className="flex-1 py-2 px-3 text-sm font-medium text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center gap-1">
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Add Expense Button */}
        <Button fullWidth size="lg" className="shadow-lg">
          <Plus size={20} className="mr-2" />
          Add Expense
        </Button>
      </div>
    </div>
  );
}
