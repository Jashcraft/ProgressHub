import * as React from 'react';
import LandingPageHeader from './LandingPageHeader';
import Hero from './Hero/Hero'
import FeaturedLeaders from './Featured/FeaturedLeadersSection';
import Testimonials from './Testimonials/Testimonials';
import Auth from '../utils/auth'

const LandingPage = () => {
  if(Auth.loggedIn()){
    window.location.replace('/dashboard')
  }
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