'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Logo and Title */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">🌍</div>
          <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Our Adventures</h1>
          <p className="text-[#64748B] text-base">Plan, track, and cherish every moment</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg border border-[#E2E8F0] p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              icon={<Mail size={18} />}
              required
              autoFocus
            />

            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                icon={<Lock size={18} />}
                required
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#0F172A] transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <Button
              type="submit"
              fullWidth
              size="lg"
              loading={loading}
              variant="accent"
              className="mt-6"
            >
              Continue to Adventure
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-[#64748B] text-sm">
              <Lock size={14} />
              <span>Secured with device lock</span>
            </div>
            <button className="text-[#3B82F6] text-sm hover:underline transition-colors">
              Forgot password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
