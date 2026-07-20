import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Categories from '../components/Categories/Categories';
import Collections from '../components/collections/Collections';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import MostTrending from '../components/MostTrending';
import Couture from '../components/Couture';
import Insta from '../components/Insta';
const Home: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
        <Hero />
        <Categories />
        <MostTrending/>
        <Collections />
        <Couture />
        <Insta />
        <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;