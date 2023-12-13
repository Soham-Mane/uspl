import React,{useState} from 'react';
import Navbar from './components/Navbar';
import {Box, ThemeProvider, createTheme} from '@mui/material';
import Hero from './components/Hero';
import About from './components/About';
import Demo from './components/Demo';
import Features from './components/Features';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import VideoPlayer from './components/VideoPlayer';
import Testing from './components/Testing';
function App() {
 
  return (
 < >
  {/* <Navbar/> */}
  <Banner/>
 <Hero/>
 <About/>
<Features/>
<Testimonials/>
<Demo/>
<Contact/>
<FAQ/>
<Footer/>
{/* <VideoPlayer/> */}

 </>
  );
}

export default App;
