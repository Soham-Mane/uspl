import React from 'react'
import Banner from './Banner'
import Hero from './Hero'
import About from './About'
import Features from './Features'
import Testimonials from './Testimonials'
import Demo from './Demo';
import Contact from './Contact';
import Footer from './Footer';
import FAQ from './FAQ';

const LandingPage = () => {
  return (
    <div className='overflow-x-hidden	'>
       <Banner/>
 <Hero/>
 <About/>
<Features/>
<Testimonials/>
<Demo/>
<Contact/>
<FAQ/>
<Footer/>

    </div>
  )
}

export default LandingPage
