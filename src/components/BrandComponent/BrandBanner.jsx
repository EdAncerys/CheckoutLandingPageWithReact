import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillWindows } from 'react-icons/ai';
import { AiFillYahoo } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillDropboxCircle } from 'react-icons/ai';
import { DiAndroid } from 'react-icons/di';
import { DiAngularSimple } from 'react-icons/di';
import { DiApple } from 'react-icons/di';
import { DiChrome } from 'react-icons/di';
import { DiHeroku } from 'react-icons/di';

export default function LogoBanner({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.title}>We empower leading global brands</div>
      <div style={styles.wrapper}>
        <div style={styles.logo}>
          <AiFillGithub size={40} />
          <div>Github</div>
        </div>
        <div style={styles.logo}>
          <AiFillWindows size={40} />
          <div>Windows</div>
        </div>
        <div style={styles.logo}>
          <AiFillYahoo size={40} />
          <div>Yahoo</div>
        </div>
        <div style={styles.logo}>
          <AiFillFacebook size={40} />
          <div>Facebook</div>
        </div>
        <div style={styles.logo}>
          <AiFillDropboxCircle size={40} />
          <div>Drop Box</div>
        </div>
        <div style={styles.logo}>
          <DiAndroid size={40} />
          <div>Android</div>
        </div>
        <div style={styles.logo}>
          <DiApple size={40} />
          <div>Apple</div>
        </div>
        <div style={styles.logo}>
          <DiAngularSimple size={40} />
          <div>Angular</div>
        </div>
        <div style={styles.logo}>
          <DiChrome size={40} />
          <div>Chrome</div>
        </div>
        <div style={styles.logo}>
          <DiHeroku size={40} />
          <div>Heroku</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateRows: 'auto auto',
    alignItems: 'center',
    marginTop: 100,
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, auto)',
    alignItems: 'center',
    width: 800,
    marginTop: 20,
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
  title: {
    fontSize: 25,
    width: 450,
    fontWeight: 'bold',
  },
};
