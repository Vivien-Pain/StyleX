	import { useState } from 'react';
import { HelloWorld } from './HelloWorld';
import { Button } from './Button';
import * as stylex from '@stylexjs/stylex';
import { colors, spacing } from './tokens.stylex';
import { night } from './night';

const styles = stylex.create({
  container: {
    padding: spacing.lg,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
    alignItems: 'flex-start',
    backgroundColor: colors.surface,
    color: colors.text,
    transitionProperty: 'background-color, color',
    transitionDuration: '200ms',
    minHeight: '100vh',
  },
  row: {
    display: 'flex',
    gap: spacing.md,
    flexWrap: 'wrap',
  },
});

function App() {
  const [isNight, setIsNight] = useState(false);

  return (
    <div {...stylex.props(styles.container, isNight && night)}>
      <HelloWorld />
      <div {...stylex.props(styles.row)}>
        <Button variant="primary" size="small">Primary Small</Button>
        <Button variant="primary" size="medium">Primary Medium</Button>
        <Button variant="primary" size="large">Primary Large</Button>
      </div>
      <div {...stylex.props(styles.row)}>
        <Button variant="secondary" size="small">Secondary Small</Button>
        <Button variant="secondary" size="medium">Secondary Medium</Button>
        <Button variant="secondary" size="large">Secondary Large</Button>
      </div>
      <div {...stylex.props(styles.row)}>
        <Button variant="danger" size="small">Danger Small</Button>
        <Button variant="danger" size="medium">Danger Medium</Button>
        <Button variant="danger" size="large">Danger Large</Button>
      </div>
      <div {...stylex.props(styles.row)}>
        <Button disabled>Disabled Primary</Button>
        <Button variant="secondary" disabled>Disabled Secondary</Button>
        <Button variant="danger" disabled>Disabled Danger</Button>
      </div>
    
    </div>
  );
}

export default App;

