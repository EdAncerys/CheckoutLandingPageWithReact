import React from 'react';
import { FaCodepen } from 'react-icons/fa';

import colors from '../config/colors';
import NavButton from './NavButton';

export default function NavBar({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.navLeft}>
        <div style={styles.logo}>
          <FaCodepen size={30} />
          <div style={styles.logoText}>checkout</div>
        </div>
        <NavButton title="Our Solution" />
        <NavButton title="Company" />
        <NavButton title="Discover" />
      </div>
      <div style={styles.navRight}>
        <NavButton title="Login" />
        <div style={styles.btnAccount}>Get Test Account</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100vw',
    height: 100,
  },
  navLeft: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '5vw',
    color: colors.white,
  },
  logo: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 600,
    marginLeft: 10,
    marginRight: 20,
  },
  navRight: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAccount: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    border: `1px solid ${colors.primary}`,
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    fontWeight: 500,
    color: colors.white,
    cursor: 'pointer',
  },
};
