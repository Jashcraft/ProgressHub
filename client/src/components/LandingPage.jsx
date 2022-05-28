import * as React from 'react';
import LandingPageHeader from './LandingPageHeader';
import Hero from './Hero/Hero'
import FeaturedLeaders from './Featured/FeaturedLeadersSection';
import Testimonials from './Testimonials/Testimonials';

const LandingPage = () => {
  return (
    <>
      <LandingPageHeader />
      <Hero />
      <FeaturedLeaders></FeaturedLeaders>
      <Testimonials></Testimonials>
    </>
  )
}

export default LandingPage;