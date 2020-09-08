import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

export default function PaymentBanner({ props }) {
  return (
    <div style={styles.container}>
      <LeftBanner />
      <RightBanner />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 100,
  },
};
