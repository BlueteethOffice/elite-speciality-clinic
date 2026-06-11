import React from 'react';

// Common tooth shape to reuse
const ToothShape = () => (
  <path d="M12 21.5C12 21.5 10 22 8 22C6 22 5.5 19 6 16C6 16 5 15 5 12C5 8 7 6 9 6C10 6 11 7 12 7C13 7 14 6 15 6C17 6 19 8 19 12C19 15 18 16 18 16C18.5 19 18 22 16 22C14 22 12 21.5 12 21.5Z" 
        fill="#FFFFFF" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
);

export const TeethCleaningIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ToothShape />
    <path d="M4 8L8 4M6 6L14 14" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="18" cy="8" r="1.5" fill="#EF4444"/>
    <circle cx="20" cy="12" r="1" fill="#EF4444"/>
  </svg>
);

export const FillingsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ToothShape />
    <path d="M10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V12C14 12.5523 13.5523 13 13 13H11C10.4477 13 10 12.5523 10 12V11Z" fill="#9CA3AF"/>
    <path d="M12 5L14 2L16 4L14 7" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ExtractionIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ToothShape />
    <path d="M8 2L16 8M16 2L8 8" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const RootCanalIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ToothShape />
    <path d="M10 16L10 20M14 16L14 20" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 4L12 12" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const MicroscopicRootCanalIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ToothShape />
    <circle cx="16" cy="16" r="4" fill="none" stroke="#2563EB" strokeWidth="1.5"/>
    <path d="M18.5 18.5L22 22" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 16L10 20" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CrownIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ToothShape />
    <path d="M6 8L9 4L12 6L15 4L18 8L16 10H8L6 8Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const TeethWhiteningIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ToothShape />
    <path d="M12 11L14 10L13 12L15 13L13 14L14 16L12 15L10 16L11 14L9 13L11 12L10 10L12 11Z" fill="#FBBF24"/>
    <circle cx="20" cy="5" r="1.5" fill="#0EA5E9"/>
    <circle cx="4" cy="15" r="1" fill="#0EA5E9"/>
  </svg>
);

export const ZoomWhiteningIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ToothShape />
    <path d="M22 2L14 10M14 10L17 12M14 10L12 7" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="14" r="2" fill="#FBBF24"/>
  </svg>
);

export const VeneersIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ToothShape />
    <path d="M6 12C6 8 8 6 12 6C16 6 18 8 18 12" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 2L9 6M16 2L15 6" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const BracesIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ToothShape />
    <path d="M4 12H20" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round"/>
    <rect x="7" y="10" width="3" height="4" rx="1" fill="#EF4444"/>
    <rect x="14" y="10" width="3" height="4" rx="1" fill="#EF4444"/>
  </svg>
);

export const InvisibleBracesIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ToothShape />
    <path d="M5 12C5 8.5 8 6.5 12 6.5C16 6.5 19 8.5 19 12" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
  </svg>
);

export const ImplantsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14C12 14 10 14.5 8 14.5C6 14.5 5.5 11.5 6 8.5C6 8.5 5 7.5 5 4.5C5 2 7 2 9 2C10 2 11 3 12 3C13 3 14 2 15 2C17 2 19 2 19 4.5C19 7.5 18 8.5 18 8.5C18.5 11.5 18 14.5 16 14.5C14 14.5 12 14 12 14Z" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 15V20H14V15" fill="#94A3B8" stroke="#64748B" strokeWidth="1.5"/>
    <path d="M9 16.5H15M9 18.5H15" stroke="#475569" strokeWidth="1.5"/>
  </svg>
);
