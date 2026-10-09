import * as stylex from '@stylexjs/stylex';
import type { ComponentProps, ReactNode } from 'react';
import { colors } from './tokens.stylex';

const base = stylex.create({
  button: {
    borderWidth: 0,
    borderRadius: 6,
    cursor: 'pointer',
    fontWeight: 600,
    transitionProperty: 'background-color, transform, opacity',
    transitionDuration: '0.2s',
    outline: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ':focus-visible': {
      outlineWidth: 2,
      outlineStyle: 'solid',
      outlineColor: '#005fcc',
      outlineOffset: 2,
    },
    opacity: {
      default: 1,
      ':disabled': 0.5,
    },
    transform: {
      default: null,
      ':active:not(:disabled)': 'scale(0.95)',
    },
  },
});

const variants = stylex.create({
  primary: {
    backgroundColor: {
      default: colors.brand,
      ':hover:not(:disabled)': colors.brandHover,
    },
    color: '#fff',
  },
  secondary: {
    backgroundColor: {
      default: '#eaeaea',
      ':hover:not(:disabled)': '#ccc',
    },
    color: '#333',
  },
  danger: {
    backgroundColor: {
      default: '#ff4d4f',
      ':hover:not(:disabled)': '#d9363e',
    },
    color: '#fff',
  },
});

const sizes = stylex.create({
  small: {
    paddingInline: 12,
    paddingBlock: 6,
    fontSize: 14,
  },
  medium: {
    paddingInline: 16,
    paddingBlock: 8,
    fontSize: 16,
  },
  large: {
    paddingInline: 24,
    paddingBlock: 12,
    fontSize: 18,
  },
});

interface ButtonProps extends Omit<ComponentProps<'button'>, 'style' | 'className'> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  children: ReactNode;
  xstyle?: stylex.StyleXStylesWithout<{ position: null; display: null }>;
}

export function Button({ variant = 'primary', size = 'medium', xstyle, children, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      {...stylex.props(
        base.button,
        variants[variant],
        sizes[size],
        xstyle
      )}
    >
      {children}
    </button>
  );
}
