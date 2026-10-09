import * as stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

const styles = stylex.create({
  container: {
    width: '100%',
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  bar: (progress: number) => ({
    width: `${progress}%`,
    height: '100%',
    backgroundColor: colors.brand,
    transitionProperty: 'width',
    transitionDuration: '300ms',
  }),
});

export function ProgressBar({ progress }: { progress: number }) {
  const clampedProgress = Math.max(0, Math.min(100, progress));
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.bar(clampedProgress))} />
    </div>
  );
}

