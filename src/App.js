import React, { useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/Hero';
import Profile from './Components/Aboutme';
import SkillSection from './Components/Skills';
import PortfolioSection from './Components/Portfolio';
import CompTIASection from './Components/CompTIASection'; // Import the new component
import Footer from './Components/Footer';
import PortfolioSection2 from './Components/Portfolio2';

const MainComponent = () => {
  // Create refs for each section
  const heroRef = useRef(null);
  const profileRef = useRef(null);
  const skillRef = useRef(null);
  const compTIARef = useRef(null); // New ref for CompTIA section
  const portfolioRef = useRef(null);
  const portfolio2Ref = useRef(null);
  const footerRef = useRef(null);

  const refs = {
    heroRef,
    profileRef,
    skillRef,
    compTIARef, 
    portfolioRef,
    footerRef,
  };

  return (
    <div>
      <Navbar refs={refs} />
      <div ref={heroRef}><HeroSection /></div>
      <div ref={profileRef}><Profile /></div>
      <div ref={compTIARef}><CompTIASection /></div>
      <div ref={skillRef}><SkillSection /></div>
      
      <div ref={portfolioRef}><PortfolioSection /></div>
      <div ref={portfolio2Ref}><PortfolioSection2 /></div>
      <div ref={footerRef}><Footer /></div>
    </div>
  );
};

export default MainComponent;
