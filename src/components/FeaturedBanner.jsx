import React from 'react';

import colors from '../config/colors';

export default function FeaturedBanner({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.banner}>
        Unleash innovation with connected payments
      </div>
      <div style={styles.logoBanner}>
        <div>logo</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100vw',
    height: 800,
    marginTop: -200,
    backgroundImage: `linear-gradient(
        45deg, 
        ${colors.primary},
        ${colors.secondary}, 
        ${colors.primary}
      )`,
    display: 'grid',
    gridTemplateAreas: "'a b' 'c c'",
    justifyContent: 'center',
  },
  banner: {
    gridArea: 'a',
    marginTop: 300,
    marginLeft: '10vw',
    width: '40vw',
    height: 300,
    backgroundColor: 'tomato',
  },
  logoBanner: {
    gridArea: 'c',
    width: '90vw',
    height: 100,
    alignSelf: 'end',
    backgroundColor: 'tomato',
  },
};
