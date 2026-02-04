# 🌍 Our Adventures - Travel Companion App

A beautiful, mobile-first travel planning and tracking application built with Next.js 15, React 19, and Tailwind CSS 4.

## ✨ Features 

### 🔐 Authentication
- Beautiful gradient login screen with animated background
- Email/password authentication
- Show/hide password toggle
- Device lock security

### 🏠 Dashboard
- Personalized greeting based on time of day
- Active trip card with countdown
- Quick action buttons (Plan, Money, Photos, Pack)
- Past adventures gallery
- Dream destinations wishlist

### 🗺️ Trip Planning
- Day-by-day itinerary with timeline view
- Activity cards with emoji icons
- Location, cost, and notes for each activity
- Collaborative features (see who added what)
- Comments on activities
- Swipe actions for edit/delete

### 💰 Money Management
- Budget tracking with visual progress bars
- Split expense calculator
- "Who owes whom" debt tracker
- Category-based expense breakdown
- Recent expenses list
- Easy expense entry with emoji categories

### 📸 Photo Gallery
- Grid, map, and timeline views
- Location-tagged photos
- Lazy loading for performance
- Full-screen photo viewer

### 🎒 Packing List
- Categorized packing items
- Progress tracking
- Shared and personal items
- Check-off functionality
- Smart suggestions

### ⚙️ Settings
- Profile management
- Dark mode toggle
- Currency and language preferences
- Notification controls
- Data export
- Privacy settings

## 🎨 Design System

### Color Palette
- **Primary**: `#FF6B6B` (Coral Red)
- **Primary Dark**: `#E85555`
- **Primary Light**: `#FF8B94`
- **Secondary**: `#FFB347` (Orange)
- **Accent**: `#4ECDC4` (Turquoise)

### Typography
- **Font**: Geist Sans (primary), Geist Mono (code)
- **Headings**: Bold, tight tracking
- **Body**: Regular weight, comfortable line height

### Components
- **Cards**: Rounded corners (12px), subtle shadows
- **Buttons**: Large touch targets (48px min height)
- **Inputs**: 56px height, clear focus states
- **Bottom Nav**: 64px height, 5 main sections

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Mobile-First Approach

This app is designed with a mobile-first philosophy:

- **Touch-optimized**: Large tap targets (min 44x44px)
- **Gesture support**: Swipe actions, pull-to-refresh
- **Safe areas**: Respects device notches and home indicators
- **Performance**: Lazy loading, optimized images
- **Responsive**: Adapts to all screen sizes
- **PWA-ready**: Can be installed as a native app

## 🏗️ Project Structure

```
app/
├── (auth)/
│   └── login/              # Login page
├── (main)/
│   ├── dashboard/          # Home dashboard
│   ├── trips/              # Trip list and details
│   │   └── [tripId]/
│   │       ├── plan/       # Trip itinerary
│   │       ├── money/      # Expense tracking
│   │       ├── photos/     # Photo gallery
│   │       └── packing/    # Packing list
│   ├── money/              # All trips money overview
│   ├── photos/             # All photos
│   └── settings/           # App settings
components/
├── ui/                     # Reusable UI components
│   ├── button.tsx
│   ├── input.tsx
│   ├── card.tsx
│   └── fab.tsx
└── layout/                 # Layout components
    ├── bottom-nav.tsx
    └── mobile-header.tsx
lib/
├── design-system.ts        # Design tokens
├── utils.ts                # Utility functions
└── query-client.ts         # React Query setup
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: 19.2.3
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Type Safety**: TypeScript

## 🎯 Key Features Implementation

### Bottom Navigation
- Fixed position with safe area support
- Active state highlighting
- Smooth transitions
- 5 main sections: Home, Trips, Money, Photos, Settings

### Floating Action Button (FAB)
- Context-aware (changes based on current page)
- Fixed position above bottom nav
- Smooth animations
- Primary action for each screen

### Cards & Lists
- Consistent spacing and shadows
- Hover and active states
- Swipe gestures for actions
- Loading states

### Forms
- Large, touch-friendly inputs
- Clear validation states
- Auto-focus on first field
- Keyboard-aware scrolling

## 🎨 Customization

### Colors
Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: #FF6B6B;
  --primary-dark: #E85555;
  --primary-light: #FF8B94;
  /* ... */
}
```

### Typography
Modify font imports in `app/layout.tsx`:

```typescript
import { Geist, Geist_Mono } from "next/font/google";
```

## 📝 Future Enhancements

- [ ] Real-time collaboration with WebSockets
- [ ] Offline support with Service Workers
- [ ] Push notifications for trip reminders
- [ ] Map integration for location tracking
- [ ] Photo auto-upload from camera
- [ ] AI-powered trip suggestions
- [ ] Multi-currency support
- [ ] Export trip as PDF
- [ ] Social sharing features
- [ ] Integration with booking platforms

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspired by modern travel apps
- Icons by Lucide
- Fonts by Vercel (Geist)
- Built with Next.js and React

---

Made with ❤️ for travelers everywhere 🌍✈️
