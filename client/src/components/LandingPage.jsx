import * as React from 'react';
import LandingPageHeader from './LandingPageHeader';
import Mission from './Hero/Mission'
import FeaturedLeaders from './Featured/FeaturedLeadersSection';
import Testimonials from './Testimonials/Testimonials';
import Hero from './Hero/Hero';

const LandingPage = () => {
  return (
    <>
      <LandingPageHeader />
      <Hero />
      <Mission />
      <FeaturedLeaders/>
      <Testimonials/>
    </>
  )
}

export default LandingPage;