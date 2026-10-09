import * as stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

export const night = stylex.createTheme(colors, {
  surface: '#111827',
  text: '#f9fafb',
  brand: '#4da3ff',
  brandHover: '#80c2ff',
});

