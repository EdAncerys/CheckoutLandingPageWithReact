import React from 'react';

import colors from '../../config/colors';
import FeaturedBannerText from './FeaturedBannerText';

export default function FeaturedBanner({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.banner}>
        <FeaturedBannerText />
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
  },
  logoBanner: {
    gridArea: 'c',
    width: '90vw',
    height: 100,
    alignSelf: 'end',
    backgroundColor: 'tomato',
  },
};
