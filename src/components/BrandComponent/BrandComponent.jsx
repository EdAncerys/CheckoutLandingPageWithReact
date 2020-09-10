import React from 'react';
import BrandBanner from './BrandBanner';
import CustomerStories from './CustomerStories';

export default function BrandComponent({ props }) {
  return (
    <div style={styles.container}>
      <BrandBanner />
      <CustomerStories />
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
