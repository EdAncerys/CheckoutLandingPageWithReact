import React from 'react';
import imgOne from '../images/4240f936.png';
import { BsArrowRightShort } from 'react-icons/bs';

export default function LeftBanner({ props }) {
  return (
    <div style={styles.container}>
      <img style={styles.img} src={imgOne} />
      <div style={styles.imgText}>Retail 1 min Read</div>
      <div style={styles.title}>
        ACE Moves Money Faster and Safer with Checkout.com
      </div>
      <div style={styles.text}>
        ACE Money Transfer helps people send and receive money quickly, safely
        and reliably. With over 1 million customers relying on their platform,
        they needed to solve some systemic challenges by upgrading their
        payments process, domestically and internationally.
      </div>
      <div style={styles.link}>
        Read case study <BsArrowRightShort size={25} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: 400,
    marginTop: 50,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    borderRadius: 10,
  },
  imgText: {
    fontSize: 12,
    fontWeight: 200,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    marginTop: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 400,
    marginTop: 30,
  },
  link: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'start',
    alignItems: 'center',
    fontSize: 14,
    fontWeight: 400,
    marginTop: 20,
    cursor: 'pointer',
  },
};
