import React from 'react';
import '../src/css/App.css';
import NavBar from './components/NavBar';
import FeaturedBanner from './components/FeaturedBanner/FeaturedBanner';

export default function App({ props }) {
  return (
    <div style={styles.container}>
      <NavBar />
      <FeaturedBanner />
    </div>
  );
}

const styles = {
  container: {},
};
