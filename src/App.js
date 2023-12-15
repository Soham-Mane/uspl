import React,{useState} from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import User from './components/User';
import Chart from './components/Chart';
import Modal from './components/Modal';
import Contact from './components/Contact';
function App() {
 
  return (
 <>
<Router>
  <Routes>
    <Route exact path="/" element={<LandingPage/>}></Route>
    <Route exact path="/user_demo" element={<User/>}></Route> 
    <Route exact path="/chart" element={<Chart/>}></Route> 
    <Route exact path="/modal" element={<Modal/>}></Route> 
    <Route exact path="/contact" element={<Contact/>}></Route> 

  </Routes>
</Router>


 </>
  );
}

export default App;
