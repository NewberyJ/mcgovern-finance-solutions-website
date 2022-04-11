import React from 'react';
import '../../App.css';
import Content from '../Content'
import HeroSection from '../Hero-section';



function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <Content />
    </React.Fragment>
  )
}

export default Home;
