export type PastelColor = 'mint' | 'yellow' | 'blue' | 'pink' | 'lavender';

export interface ColorScheme {
  bgLight: string;
  badgeBg: string;
  badgeText: string;
  border: string;
  iconBg: string;
  hoverBg: string;
}

export const PASTEL_SCHEMES: Record<PastelColor, ColorScheme> = {
  mint: {
    bgLight: 'bg-[#F2FAF5]',
    badgeBg: 'bg-[#DDF4E7]',
    badgeText: 'text-[#166534]',
    border: 'border-[#C8EDD7]',
    iconBg: 'bg-[#DDF4E7] text-[#166534]',
    hoverBg: 'hover:bg-[#E4F6EC]'
  },
  yellow: {
    bgLight: 'bg-[#FFFDF4]',
    badgeBg: 'bg-[#FFE8A3]',
    badgeText: 'text-[#854D0E]',
    border: 'border-[#FEE28C]',
    iconBg: 'bg-[#FFE8A3] text-[#854D0E]',
    hoverBg: 'hover:bg-[#FFF8DE]'
  },
  blue: {
    bgLight: 'bg-[#F4F9FE]',
    badgeBg: 'bg-[#DDEFFD]',
    badgeText: 'text-[#1E40AF]',
    border: 'border-[#C5E4FC]',
    iconBg: 'bg-[#DDEFFD] text-[#1E40AF]',
    hoverBg: 'hover:bg-[#E9F4FE]'
  },
  pink: {
    bgLight: 'bg-[#FFF5F6]',
    badgeBg: 'bg-[#FBE5E7]',
    badgeText: 'text-[#9F1239]',
    border: 'border-[#F8D2D6]',
    iconBg: 'bg-[#FBE5E7] text-[#9F1239]',
    hoverBg: 'hover:bg-[#FCEEF0]'
  },
  lavender: {
    bgLight: 'bg-[#F9F7FE]',
    badgeBg: 'bg-[#EAE3FA]',
    badgeText: 'text-[#581C87]',
    border: 'border-[#DDD4F7]',
    iconBg: 'bg-[#EAE3FA] text-[#581C87]',
    hoverBg: 'hover:bg-[#F3EFFC]'
  }
};
