'use client';

import { useState } from 'react';
import { MobileHeader } from '@/components/layout/mobile-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';


import { 
    
  Lock, 
  Smartphone, 
  Moon, 
  DollarSign, 
  Globe, 
  Calendar,
  Bell,
  Download,
  Trash2,
  FileText,
  Info,
  MessageCircle,
  Star,
  LogOut,
  ChevronRight
} from 'lucide-react';

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    tripReminders: true,
    expenseAlerts: true,
    photoUploads: false,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader title="Settings" />

      <div className="px-4 py-6 space-y-6 max-w-2xl mx-auto">
        {/* Profile */}
        <Card variant="default" padding="lg">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF8B94] flex items-center justify-center text-white font-bold text-2xl">
              S
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">Sarah Johnson</h3>
              <p className="text-sm text-gray-600">you@example.com</p>
            </div>
          </div>
          <Button variant="secondary" fullWidth className="mt-4">
            Edit Profile
          </Button>
        </Card>

        {/* Account */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Account
          </h3>
          <Card variant="default" padding="none">
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Lock size={20} className="text-gray-600" />
                <span className="font-medium">Change Password</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
            <div className="h-px bg-gray-200" />
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Smartphone size={20} className="text-gray-600" />
                <span className="font-medium">Manage Devices</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
            <div className="h-px bg-gray-200" />
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Lock size={20} className="text-gray-600" />
                <span className="font-medium">Reset Device Lock</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          </Card>
        </div>

        {/* Preferences */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Preferences
          </h3>
          <Card variant="default" padding="none">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Moon size={20} className="text-gray-600" />
                <span className="font-medium">Dark Mode</span>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  darkMode ? 'bg-[#FF6B6B]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <div className="h-px bg-gray-200" />
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <DollarSign size={20} className="text-gray-600" />
                <span className="font-medium">Currency</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">USD ($)</span>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </button>
            <div className="h-px bg-gray-200" />
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-gray-600" />
                <span className="font-medium">Language</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">English</span>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </button>
            <div className="h-px bg-gray-200" />
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-gray-600" />
                <span className="font-medium">Date Format</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">MM/DD/YYYY</span>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </button>
          </Card>
        </div>

        {/* Notifications */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Notifications
          </h3>
          <Card variant="default" padding="none">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Bell size={20} className="text-gray-600" />
                <span className="font-medium">Trip Reminders</span>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, tripReminders: !notifications.tripReminders })}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  notifications.tripReminders ? 'bg-[#FF6B6B]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.tripReminders ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <div className="h-px bg-gray-200" />
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <DollarSign size={20} className="text-gray-600" />
                <span className="font-medium">Expense Alerts</span>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, expenseAlerts: !notifications.expenseAlerts })}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  notifications.expenseAlerts ? 'bg-[#FF6B6B]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.expenseAlerts ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <div className="h-px bg-gray-200" />
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Bell size={20} className="text-gray-600" />
                <span className="font-medium">Photo Uploads</span>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, photoUploads: !notifications.photoUploads })}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  notifications.photoUploads ? 'bg-[#FF6B6B]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.photoUploads ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </Card>
        </div>

        {/* Data & Privacy */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            Data & Privacy
          </h3>
          <Card variant="default" padding="none">
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Download size={20} className="text-gray-600" />
                <span className="font-medium">Export All Data</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
            <div className="h-px bg-gray-200" />
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Trash2 size={20} className="text-red-500" />
                <span className="font-medium text-red-500">Delete Account</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
            <div className="h-px bg-gray-200" />
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <FileText size={20} className="text-gray-600" />
                <span className="font-medium">Privacy Policy</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
            <div className="h-px bg-gray-200" />
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <FileText size={20} className="text-gray-600" />
                <span className="font-medium">Terms of Service</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          </Card>
        </div>

        {/* About */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1">
            About
          </h3>
          <Card variant="default" padding="none">
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Info size={20} className="text-gray-600" />
                <span className="font-medium">Version</span>
              </div>
              <span className="text-gray-600">1.0.0</span>
            </button>
            <div className="h-px bg-gray-200" />
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <MessageCircle size={20} className="text-gray-600" />
                <span className="font-medium">Send Feedback</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
            <div className="h-px bg-gray-200" />
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Star size={20} className="text-gray-600" />
                <span className="font-medium">Rate App</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          </Card>
        </div>

        {/* Logout */}
        <Button variant="danger" fullWidth size="lg" className="shadow-lg">
          <LogOut size={20} className="mr-2" />
          Logout
        </Button>

        <div className="h-8" />
      </div>
    </div>
  );
}
