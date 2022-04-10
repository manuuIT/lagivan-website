import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>La Givan</HeroH1>
          <HeroP>Utvin nr.160 B </HeroP>
          <HeroP>Comanda la : 0256 379 969 / 0733 401 269</HeroP>
          <HeroP>Livrari domiciliu orar: 12:00-23:00</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
