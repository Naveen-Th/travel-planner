'use client';

import { useState } from 'react';
import { MobileHeader } from '@/components/layout/mobile-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Check } from 'lucide-react';

interface PackingItem {
  id: number;
  name: string;
  quantity?: string;
  packed: boolean;
  category: string;
  owner: string;
}

const initialItems: PackingItem[] = [
  { id: 1, name: 'T-shirts', quantity: '5', packed: true, category: 'Clothes', owner: 'You' },
  { id: 2, name: 'Shorts', quantity: '3', packed: true, category: 'Clothes', owner: 'You' },
  { id: 3, name: 'Swimsuit', packed: false, category: 'Clothes', owner: 'You' },
  { id: 4, name: 'Jacket', packed: false, category: 'Clothes', owner: 'You' },
  { id: 5, name: 'Sandals', packed: false, category: 'Clothes', owner: 'You' },
  { id: 6, name: 'Dresses', quantity: '3', packed: true, category: 'Clothes', owner: 'Sarah' },
  { id: 7, name: 'Swimsuit', packed: true, category: 'Clothes', owner: 'Sarah' },
  { id: 8, name: 'Sandals', packed: false, category: 'Clothes', owner: 'Sarah' },
  { id: 9, name: 'Sun hat', packed: false, category: 'Clothes', owner: 'Sarah' },
  { id: 10, name: 'Passports', packed: true, category: 'Documents', owner: 'Shared' },
  { id: 11, name: 'Hotel confirmations', packed: true, category: 'Documents', owner: 'Shared' },
  { id: 12, name: 'Travel insurance', packed: true, category: 'Documents', owner: 'Shared' },
  { id: 13, name: 'Vaccination records', packed: false, category: 'Documents', owner: 'Shared' },
  { id: 14, name: 'Sunscreen SPF 50', packed: true, category: 'Toiletries', owner: 'Shared' },
  { id: 15, name: 'Mosquito repellent', packed: false, category: 'Toiletries', owner: 'Shared' },
  { id: 16, name: 'First aid kit', packed: false, category: 'Toiletries', owner: 'Shared' },
  { id: 17, name: 'Medications', packed: false, category: 'Toiletries', owner: 'Shared' },
  { id: 18, name: 'Phone chargers', packed: false, category: 'Electronics', owner: 'Shared' },
  { id: 19, name: 'Power bank', packed: false, category: 'Electronics', owner: 'Shared' },
  { id: 20, name: 'Camera', packed: false, category: 'Electronics', owner: 'Shared' },
  { id: 21, name: 'Universal adapter', packed: false, category: 'Electronics', owner: 'Shared' },
];

const categoryEmojis: Record<string, string> = {
  'Clothes': '👕',
  'Documents': '📄',
  'Toiletries': '💊',
  'Electronics': '📱',
};

export default function PackingListPage() {
  const [items, setItems] = useState(initialItems);

  const toggleItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, packed: !item.packed } : item
    ));
  };

  const packedCount = items.filter(item => item.packed).length;
  const totalCount = items.length;
  const progress = Math.round((packedCount / totalCount) * 100);

  const groupedItems = items.reduce((acc, item) => {
    const key = `${item.category}-${item.owner}`;
    if (!acc[key]) {
      acc[key] = {
        category: item.category,
        owner: item.owner,
        items: [],
      };
    }
    acc[key].items.push(item);
    return acc;
  }, {} as Record<string, { category: string; owner: string; items: PackingItem[] }>);

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader title="Packing List" showBack showMenu />

      <div className="px-4 py-6 space-y-6 max-w-2xl mx-auto">
        {/* Progress Card */}
        <Card variant="elevated" padding="lg">
          <h3 className="text-lg font-semibold mb-3">Progress</h3>
          <div className="space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-bold text-gray-900">{packedCount}/{totalCount}</span>
              <span className="text-lg text-gray-500">packed</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8B94] rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-sm text-gray-600">
              {totalCount - packedCount} items left to pack
            </div>
          </div>
        </Card>

        {/* Packing Items by Category */}
        {Object.values(groupedItems).map((group) => (
          <div key={`${group.category}-${group.owner}`}>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span>{categoryEmojis[group.category]}</span>
              <span>{group.category}</span>
              <span className="text-sm font-normal text-gray-500">({group.owner})</span>
            </h3>
            <div className="space-y-2">
              {group.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-[#FF6B6B] transition-colors text-left"
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                    item.packed 
                      ? 'bg-[#FF6B6B] border-[#FF6B6B]' 
                      : 'border-gray-300'
                  }`}>
                    {item.packed && <Check size={16} className="text-white" strokeWidth={3} />}
                  </div>
                  <span className={`flex-1 ${item.packed ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                    {item.name}
                    {item.quantity && ` (${item.quantity})`}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Add Item Button */}
        <Button fullWidth size="lg" variant="secondary" className="shadow-lg">
          <Plus size={20} className="mr-2" />
          Add Item
        </Button>

        <div className="h-8" />
      </div>
    </div>
  );
}
