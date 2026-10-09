import stylex from '@stylexjs/eslint-plugin';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@stylexjs': stylex,
    },
    rules: {
      '@stylexjs/valid-styles': 'error',
    },
  },
];
