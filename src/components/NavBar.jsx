import React from 'react';
import { FaCodepen } from 'react-icons/fa';

import colors from '../config/colors';
import NavButton from './NavButton';

export default function NavBar({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        <FaCodepen size={30} /> <div style={styles.logoText}>Checkout</div>
      </div>
      <div style={styles.nav}>
        <NavButton title="Our Solution" />
      </div>
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
  logo: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'auto auto',
    alignItems: 'center',
    color: colors.medium,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 600,
    marginLeft: 10,
  },
};
