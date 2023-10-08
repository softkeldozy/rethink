import React from 'react';
import './Home.css';
import FeaturedInfo from '../components/featuredinfo/FeaturedInfo';
import LeadSection from '../components/popular-tools/LeadSection';
import Head from '../components/head/Head';

const Home = () => {
  return (
    <div className='home'>
      <Head />
      <LeadSection />
      <FeaturedInfo />

    </div>
  )
}

export default Home