import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillWindows } from 'react-icons/ai';
import { AiFillYahoo } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillDropboxCircle } from 'react-icons/ai';

export default function LogoBanner({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        <AiFillGithub size={60} />
        <div>Github</div>
      </div>
      <div style={styles.logo}>
        <AiFillWindows size={60} />
        <div>Windows</div>
      </div>
      <div style={styles.logo}>
        <AiFillYahoo size={60} />
        <div>Yahoo</div>
      </div>
      <div style={styles.logo}>
        <AiFillFacebook size={60} />
        <div>Facebook</div>
      </div>
      <div style={styles.logo}>
        <AiFillDropboxCircle size={60} />
        <div>Drop Box</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, auto)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90vw',
    alignSelf: 'end',
    marginTop: 50,
    marginBottom: 50,
  },
  logo: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
  },
};
