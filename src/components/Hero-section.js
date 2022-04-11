import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero-section.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='./images/image.jpg'/>
        <div className='hero-wrapper'>


            <div className='hero-text-container'>

              <h1>Let McGovern Finance Solutions help you grow</h1>

            </div>
        </div>
    </div>
  );
}

export default HeroSection;
