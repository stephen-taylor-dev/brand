/**
 * Taylor Smart LLC — Tailwind CSS Brand Colors
 * taylorsmart.ai
 *
 * Usage in tailwind.config.js:
 *   const { colors } = require('./brand/colors/tailwind-config');
 *   module.exports = { theme: { extend: { colors } } };
 *
 * Then use classes like: bg-primary-950, text-accent-500, border-highlight-500
 */

const colors = {
  primary: {
    50: '#E8EAF0',
    100: '#C5CAD9',
    200: '#9EA6BF',
    300: '#7782A5',
    400: '#596791',
    500: '#3B4C7E',
    600: '#354576',
    700: '#2D3B6B',
    800: '#263261',
    900: '#19214E',
    950: '#0B1121',
  },
  accent: {
    50: '#E0FBFF',
    100: '#B3F5FF',
    200: '#80EEFF',
    300: '#4DE7FF',
    400: '#26E1FF',
    500: '#00D4FF',
    600: '#00AADF',
    700: '#0080B0',
    800: '#005E82',
    900: '#003D55',
    950: '#001F2B',
  },
  highlight: {
    50: '#FFF8E6',
    100: '#FFEDB3',
    200: '#FFE080',
    300: '#FFD44D',
    400: '#FFCA26',
    500: '#FFC107',
    600: '#DFAA00',
    700: '#B08700',
    800: '#826400',
    900: '#554100',
    950: '#2B2100',
  },
  neutral: {
    50: '#F8F9FB',
    100: '#F1F3F7',
    200: '#E2E5ED',
    300: '#CDD2DE',
    400: '#9BA3B8',
    500: '#6B7492',
    600: '#515A74',
    700: '#3C4459',
    800: '#282E3F',
    900: '#181C28',
    950: '#0D0F16',
  },
};

const semanticColors = {
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#00D4FF',
};

module.exports = { colors, semanticColors };
