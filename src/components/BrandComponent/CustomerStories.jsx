import React from 'react';
import colors from '../../config/colors';
import { BsArrowRightShort } from 'react-icons/bs';

export default function CustomerStories({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.boxOne}>
        Customer stories
        <div style={styles.boxTwo}>
          <div style={styles.boxTwoA}>
            Discover our difference View all case studies
          </div>
          <div style={styles.boxTwoB}>
            <div>View all case studies</div>
            <BsArrowRightShort size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 1000,
    marginBottom: 50,
  },
  boxOne: {
    fontWeight: 'normal',
  },
  boxTwo: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    fontSize: 35,
    marginTop: 10,
    color: colors.primary,
  },
  boxTwoA: { width: 'auto' },
  boxTwoB: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    fontSize: 18,
    alignSelf: 'end',
    justifyItems: 'end',
  },
};
