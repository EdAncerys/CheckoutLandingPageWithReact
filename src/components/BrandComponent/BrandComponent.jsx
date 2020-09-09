import React from 'react';
import BrandBanner from './BrandBanner';

export default function BrandComponent({ props }) {
  return (
    <div style={styles.container}>
      <BrandBanner />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
