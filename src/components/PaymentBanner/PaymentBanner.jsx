import React from 'react';

export default function PaymentBanner({ props }) {
  return (
    <div style={styles.container}>
      <div></div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
