import React from 'react';

import colors from '../../config/colors';

export default function FeaturedBannerText({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.boxOne}>Unleash</div>
      <div style={styles.boxTwo}>innovation with connected</div>
      <div style={styles.boxThree}>payments</div>
      <div style={styles.boxFour}>
        Adapt, innovate and thrive with more value from every transaction
        flowing through your business.
      </div>
      <div style={styles.boxFive}>
        <div style={styles.btnDiscover}>Discover More</div>
        <div style={styles.btnGetInTouch}>Get In Touch</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: 300,
    marginLeft: '5vw',
    width: 400,
    fontSize: 65,
    fontWeight: 600,
    color: colors.white,
  },
  boxOne: {
    color: colors.primary,
  },
  boxTwo: {
    color: colors.secondary,
  },
  boxThree: {
    color: colors.primary,
  },
  boxFour: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 600,
  },
  btnDiscover: {
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
  btnGetInTouch: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    fontSize: 20,
    fontWeight: 500,
    color: colors.white,
    cursor: 'pointer',
  },
  boxFive: {
    display: 'flex',
    fontSize: 20,
    fontWeight: 500,
    marginTop: 20,
  },
};
