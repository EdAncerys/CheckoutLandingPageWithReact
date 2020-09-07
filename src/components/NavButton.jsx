import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import colors from '../config/colors';

export default function NavButton({ title }) {
  const [hover, setHover] = useState(false);
  const btnColor = hover ? colors.primary : colors.white;

  return (
    <div
      style={{ ...styles.container, ...{ color: btnColor } }}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      <div style={styles.text}>{title}</div>
      <IoIosArrowDown size={20} />
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    margin: 10,
    gridTemplateColumns: 'auto auto',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
    marginRight: 5,
  },
};
