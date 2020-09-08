import React from 'react';
import PaymentImg from '../images/nathan-dumlao-lvWw_G8tKsk-unsplash.jpg';
import colors from '../../config/colors';

export default function RightBanner({ props }) {
  return (
    <div style={styles.container}>
      checkout.com <br /> Payment Solutions
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gridTemplateRows: 200,
    fontSize: 35,
    width: '35vw',
    height: 400,
    backgroundImage: `url(${PaymentImg})`,
    backgroundSize: 'cover',
    color: colors.white,
    marginLeft: 30,
  },
};
