import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import colors from '../config/colors';

export default function NavButton({ title }) {
  return (
    <div style={styles.container}>
      <div style={styles.text}>{title}</div>
      <IoIosArrowDown size={20} />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.medium,
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
    marginRight: 5,
  },
};
