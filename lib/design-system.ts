// Design System Constants and Utilities - Minimalist Flat Design

export const colors = {
  primary: '#0F172A',
  primaryLight: '#1E293B',
  accent: '#3B82F6',
  accentLight: '#60A5FA',
  accentSubtle: '#DBEAFE',
  success: '#10B981',
  successLight: '#D1FAE5',
  warning: '#F59E0B',
  warningLight: '#FEF3C7',
  error: '#EF4444',
  errorLight: '#FEE2E2',
  info: '#3B82F6',
  infoLight: '#DBEAFE',
} as const;

export const spacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
} as const;

export const borderRadius = {
  sm: '0.25rem',   // 4px - Minimal
  md: '0.375rem',  // 6px - Minimal
  lg: '0.5rem',    // 8px - Minimal
  xl: '0.75rem',   // 12px
  '2xl': '1rem',   // 16px
  full: '9999px',
} as const;

export const typography = {
  h1: 'text-3xl font-bold tracking-tight',
  h2: 'text-2xl font-semibold tracking-tight',
  h3: 'text-xl font-semibold',
  h4: 'text-lg font-semibold',
  body: 'text-base',
  bodySmall: 'text-sm',
  caption: 'text-xs',
} as const;

export const shadows = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
} as const;

// Component variants using class-variance-authority patterns - Flat Design
export const buttonVariants = {
  primary: 'bg-primary text-white hover:bg-primary-light active:opacity-90 transition-all',
  accent: 'bg-accent text-white hover:bg-accent-light active:opacity-90 transition-all',
  secondary: 'bg-surface-secondary text-foreground hover:bg-border transition-all',
  ghost: 'bg-transparent text-foreground hover:bg-surface-secondary transition-all',
  danger: 'bg-error text-white hover:opacity-90 transition-all',
} as const;

export const cardVariants = {
  default: 'bg-surface border border-border',
  flat: 'bg-surface-secondary',
  outlined: 'bg-surface border-2 border-border',
} as const;

// Emoji categories for consistent usage
export const emojiCategories = {
  transport: {
    flight: '✈️',
    car: '🚗',
    taxi: '🚕',
    bus: '🚌',
    train: '🚆',
    boat: '⛵',
  },
  accommodation: {
    hotel: '🏨',
    house: '🏠',
    tent: '⛺',
  },
  food: {
    restaurant: '🍽️',
    pizza: '🍕',
    coffee: '☕',
    breakfast: '🍳',
  },
  activities: {
    temple: '🏛️',
    beach: '🏖️',
    mountain: '⛰️',
    museum: '🏛️',
    shopping: '🛍️',
    camera: '📸',
  },
  money: {
    dollar: '💰',
    card: '💳',
    cash: '💵',
  },
  misc: {
    location: '📍',
    calendar: '📅',
    clock: '⏰',
    checkmark: '✓',
    star: '⭐',
    fire: '🔥',
    heart: '❤️',
  },
} as const;

// Animation durations
export const animations = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
} as const;

// Breakpoints (mobile-first)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

// Z-index layers
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;
