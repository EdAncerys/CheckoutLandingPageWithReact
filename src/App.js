import React from 'react';
import '../src/css/App.css';
import NavBar from './components/NavBar';
import FeaturedBanner from './components/FeaturedBanner/FeaturedBanner';
import PaymentBanner from './components/PaymentBanner/PaymentBanner';
import TechnologyBanner from './components/TechnologyBanner/TechnologyBanner';
import BrandComponent from './components/BrandComponent/BrandComponent';

export default function App({ props }) {
  return (
    <div style={styles.container}>
      <NavBar />
      <FeaturedBanner />
      <PaymentBanner />
      <TechnologyBanner />
      <BrandComponent />
    </div>
  );
}

const styles = {
  container: {},
};
