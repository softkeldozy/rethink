import React from 'react';
import './Home.css';
import FeaturedInfo from '../components/featuredinfo/FeaturedInfo';
import Section from '../components/otherSection/Section';
import Head from '../components/head/Head';

const Home = () => {
  return (
    <div className='home'>
      <Head />
      {/* <Section /> */}
      <FeaturedInfo />

    </div>
  )
}

export default Home