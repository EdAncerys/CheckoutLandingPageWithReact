import React from 'react';
import { FaCodepen } from 'react-icons/fa';

export default function NavBar({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        <FaCodepen /> Checkout
      </div>
      <div style={styles.nav}>Checkout</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    alignItems: 'center',
    textAlign: 'center',
    width: '100vw',
    height: 100,
  },
};
