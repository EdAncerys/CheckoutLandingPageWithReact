import React from 'react';

import colors from '../config/colors';

export default function FeaturedBanner({ props }) {
  return (
    <div style={styles.container}>
      <div>hello</div>
    </div>
  );
}

const styles = {
  container: {
    width: '100vw',
    height: 1000,
    marginTop: -200,
    backgroundImage: `linear-gradient(
        45deg, 
        ${colors.primary} 35%, 
        ${colors.secondary}, 
        ${colors.primary}
      )`,
  },
};
