import * as stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

const styles = stylex.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    color: {
      default: colors.text,
      ':hover': colors.brandHover,
    },
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
  },
});

export function HelloWorld() {
  return (
    <div {...stylex.props(styles.container)}>
      <h1 {...stylex.props(styles.title)}>Hello World</h1>
    </div>
  );
}
