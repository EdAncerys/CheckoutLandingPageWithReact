import React from 'react';
import '../src/css/App.css';
import NavBar from './components/NavBar';
import FeaturedBanner from './components/FeaturedBanner/FeaturedBanner';
import PaymentBanner from './components/PaymentBanner/PaymentBanner';

export default function App({ props }) {
  return (
    <div style={styles.container}>
      <NavBar />
      <FeaturedBanner />
      <PaymentBanner />
    </div>
  );
}

const styles = {
  container: {},
};
