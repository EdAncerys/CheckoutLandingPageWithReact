import React from 'react';
import imgOne from '../images/4dcae14a.jpeg';
import { BsArrowRightShort } from 'react-icons/bs';
import { GrGooglePlus } from 'react-icons/gr';
import colors from '../../config/colors';

export default function LeftBanner({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.boxOne}>
        <div style={styles.gPlus}>
          <GrGooglePlus size={25} />
          <div style={styles.gText}>Google Plus</div>
        </div>
        ACE Money Transfer helps people send and receive money quickly, safely
        and reliably. With over 1 million customers relying on their platform,
        they needed to solve some systemic challenges by upgrading their
        payments process, domestically and internationally.
        <div style={styles.link}>
          Read case study <BsArrowRightShort size={25} />
        </div>
      </div>
      <img style={styles.img} src={imgOne} />
      <div style={styles.imgText}>Digital 2 min Read</div>
      <div style={styles.title}>'AnyVan' Increases Payment Approval Rates</div>
      <div style={styles.text}>
        Delivering anything over the size of a standard parcel is difficult,
        particularly if you want the process to be efficient, timely and
        affordable. This is where AnyVan comes in.
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
  boxOne: {
    height: 300,
    backgroundColor: colors.primary,
    fontSize: 16,
    fontWeight: 400,
    color: colors.white,
    borderRadius: 10,
    padding: 30,
    marginBottom: 30,
  },
  gPlus: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'start',
    alignItems: 'center',
    marginBottom: 20,
  },
  gText: {
    marginLeft: 10,
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
