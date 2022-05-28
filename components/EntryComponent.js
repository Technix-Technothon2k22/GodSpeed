import { Box } from '@chakra-ui/react';
import CallToHackathons from './landing/CallToHackathons';
import Features from './landing/Features';
import Hero from './landing/Hero';
import LandingPageHeader from './ui/LandingPageHeader';

function EntryComponent() {
  return (
    <Box>
      {/* header */}
      <LandingPageHeader />

      {/* Hero */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Hackathons */}
      <CallToHackathons />
    </Box>
  );
}

export default EntryComponent;
