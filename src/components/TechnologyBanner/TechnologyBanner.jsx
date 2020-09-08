import React from 'react';
import { BiJoystick } from 'react-icons/bi';
import { GiStickSplitting } from 'react-icons/gi';
import { GiStickyBoot } from 'react-icons/gi';
import { BsArrowRightShort } from 'react-icons/bs';

import colors from '../../config/colors';

export default function TechnologyBanner({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.banner}>
        <div style={styles.boxOne}>Features</div>
        <div style={styles.boxTwo}>Technology that changes everything</div>

        <div style={styles.techSolutions}>
          <div style={styles.boxFive}>
            <BiJoystick size={65} />
            <div style={styles.boxThree}>One powerful platform</div>
            <div style={styles.boxFour}>
              Streamline your payments through one unified API that evolves with
              you and responds to change as it happens.
            </div>
            <div style={styles.boxSix}>
              Our solution <BsArrowRightShort size={25} />
            </div>
          </div>
          <div style={styles.boxFive}>
            <GiStickSplitting size={65} />
            <div style={styles.boxThree}>Global payments coverage</div>
            <div style={styles.boxFour}>
              Grow anywhere with local acquiring in major markets, 150+
              currencies and most popular payment methods.
            </div>
            <div style={styles.boxSix}>
              Feature parity <BsArrowRightShort size={25} />
            </div>
          </div>
          <div style={styles.boxFive}>
            <GiStickyBoot size={65} />
            <div style={styles.boxThree}>Unrivaled data and insight</div>
            <div style={styles.boxFour}>
              Get a radically transparent view of your payments data and instant
              insights you can change your world with.
            </div>
            <div style={styles.boxSix}>
              Reporting and data
              <BsArrowRightShort size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: 600,
    backgroundColor: colors.secondary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  banner: {
    display: 'grid',
    gridTemplateRows: 'repeat(3, auto)',
    alignItems: 'center',
    width: 800,
  },
  boxOne: {
    fontWeight: 'normal',
  },
  boxTwo: {
    fontSize: 35,
    marginTop: 10,
    color: colors.primary,
  },
  boxThree: {
    fontSize: 20,
    marginTop: 10,
  },
  boxFour: {
    fontWeight: 'normal',
    marginTop: 10,
    color: colors.white,
  },
  boxFive: {
    marginRight: 30,
  },
  boxSix: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'start',
    alignItems: 'center',
    cursor: 'pointer',
  },
  techSolutions: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, auto)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
};
