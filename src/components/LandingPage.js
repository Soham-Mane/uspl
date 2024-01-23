<<<<<<< HEAD
import React from 'react'
// import Banner from './Banner'
import Hero from './Hero'
import About from './About'
import Features from './Features'
import Testimonials from './Testimonials'
import Demo from './Demo';
import Contact from './Contact';
import Footer from './Footer';
import FAQ from './FAQ';
import Price from './Price';
import Navbar from './Navbar';
const LandingPage = () => {
  return (
    <div className='overflow-x-hidden	'>
       {/* <Banner/> */}
       <Navbar/>
 <Hero/>
 <About/>
<Features/>
{/* <Testimonials/> */}
<Demo/>
<Contact/>
<FAQ/>
<Footer/>

    </div>
  )
}

export default LandingPage
=======
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
>>>>>>> 2f0ac5b9ed5d1683cd83381cefbb0d08bb19b833
