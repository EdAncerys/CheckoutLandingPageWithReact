import React from 'react';
import LeftBanner from './LeftBanner';

export default function PaymentBanner({ props }) {
  return (
    <div style={styles.container}>
      <LeftBanner />
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
