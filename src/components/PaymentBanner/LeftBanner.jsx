import React from 'react';
import { TiTick } from 'react-icons/ti';

import colors from '../../config/colors';

export default function LeftBanner({ props }) {
  return (
    <div style={styles.container}>
      Solutions
      <div style={styles.boxOne}>Better payments, unlimited opportunities</div>
      <div style={styles.boxTwo}>
        You deserve more than plain old payments. Our super-connected technology
        makes them seamless and so much more. Get faster, more reliable
        transactions. Higher conversions. Unbeatable insight and flexibility. So
        you can delight your customers and unlock new revenue streams.
      </div>
      <div style={styles.boxThree}>
        <div style={styles.solution}>
          <TiTick />
          Global acquiring network for speed and reliability
        </div>
        <div style={styles.solution}>
          <TiTick />
          Purpose-built, modular platform fits you forever
        </div>
        <div style={styles.solution}>
          <TiTick />
          Next-level granular data empowers you to innovate
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontSize: 18,
    width: 450,
    fontWeight: 'bold',
  },
  boxOne: {
    fontSize: 35,
  },
  boxTwo: {
    fontSize: 20,
    marginTop: 20,
    color: colors.medium,
    fontWeight: 'normal',
  },
  boxThree: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'normal',
  },
  solution: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'start',
    alignItems: 'center',
  },
};
