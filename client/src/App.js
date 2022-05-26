import LandingPageHeader from './components/LandingPageHeader';
import Hero from './components/Hero/Hero'
import { Container } from '@mui/material';
import FeaturedLeaders from './components/Featured/FeaturedLeadersSection';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <LandingPageHeader/>
      <Hero />
      <FeaturedLeaders></FeaturedLeaders>
      <Testimonials></Testimonials>
    </>
  );
}

export default App;
