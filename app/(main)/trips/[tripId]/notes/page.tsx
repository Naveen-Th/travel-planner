'use client';

import { useState } from 'react';
import { MobileHeader } from '@/components/layout/mobile-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Send, Smile } from 'lucide-react';

interface LoveNote {
  id: number;
  from: 'You' | 'Sarah';
  message: string;
  timestamp: string;
  emoji?: string;
}

const notes: LoveNote[] = [
  {
    id: 1,
    from: 'Sarah',
    message: 'Can\'t wait to explore Bali with you! This is going to be amazing! 🏝️',
    timestamp: '2 days ago',
    emoji: '😍',
  },
  {
    id: 2,
    from: 'You',
    message: 'I\'ve been dreaming about this trip for months. You\'re going to love the sunset at Tanah Lot! ❤️',
    timestamp: '2 days ago',
    emoji: '🌅',
  },
  {
    id: 3,
    from: 'Sarah',
    message: 'Just packed my swimsuit! Beach days here we come! 🏊‍♀️',
    timestamp: '1 day ago',
    emoji: '🎉',
  },
  {
    id: 4,
    from: 'You',
    message: 'Don\'t forget your camera! We\'re going to make so many memories together 📸',
    timestamp: '1 day ago',
    emoji: '💕',
  },
];

export default function TripNotesPage() {
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <MobileHeader title="Love Notes" showBack showMenu />

      {/* Tabs */}
      <div className="bg-white border-b border-[#E2E8F0] sticky top-14 z-20">
        <div className="flex">
          {[
            { id: 'plan', label: 'Plan', emoji: '📅' },
            { id: 'money', label: 'Money', emoji: '💰' },
            { id: 'notes', label: 'Notes', emoji: '💌' },
            { id: 'pack', label: 'Pack', emoji: '🎒' },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                tab.id === 'notes'
                  ? 'text-[#3B82F6] border-b-2 border-[#3B82F6]'
                  : 'text-[#64748B]'
              }`}
            >
              <span className="mr-1">{tab.emoji}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-3 max-w-2xl mx-auto w-full">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`flex ${note.from === 'You' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] ${note.from === 'You' ? 'order-2' : 'order-1'}`}>
              <div
                className={`rounded-lg p-3 ${
                  note.from === 'You'
                    ? 'bg-[#3B82F6] text-white'
                    : 'bg-white border border-[#E2E8F0] text-[#0F172A]'
                }`}
              >
                <p className="text-sm leading-relaxed">{note.message}</p>
                {note.emoji && (
                  <div className="mt-2 text-xl">{note.emoji}</div>
                )}
              </div>
              <div className="flex items-center gap-2 mt-1 px-2">
                <span className="text-xs text-[#94A3B8]">{note.from}</span>
                <span className="text-xs text-[#94A3B8]">•</span>
                <span className="text-xs text-[#94A3B8]">{note.timestamp}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {notes.length === 0 && (
          <Card variant="flat" padding="lg" className="text-center">
            <div className="text-4xl mb-3">💌</div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">No notes yet</h3>
            <p className="text-sm text-[#64748B]">
              Send a sweet message to your travel partner!
            </p>
          </Card>
        )}
      </div>

      {/* Input Area */}
      <div className="sticky bottom-0 bg-white border-t border-[#E2E8F0] p-4 safe-area-inset-bottom">
        <div className="max-w-2xl mx-auto flex gap-2">
          <button className="p-2 hover:bg-[#F1F5F9] rounded-lg transition-colors">
            <Smile size={20} className="text-[#64748B]" />
          </button>
          <div className="flex-1">
            <Input
              placeholder="Write a love note..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="h-10"
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className="p-2 bg-[#3B82F6] text-white rounded-lg hover:bg-[#60A5FA] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
