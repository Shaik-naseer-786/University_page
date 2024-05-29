import React, { useEffect, useState } from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

import './Navbar.css'
import logo from '../../assets/paruluniversity_logo.png';
import pulogo from '../../assets/pulogo.png';

const Navbar = () => {

  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50?setSticky(true):setSticky(false);
    })
  },[])
  return (
    <nav className={`container ${sticky ? 'dark-nav':''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to="alumni" smooth={true} offset={-260} duration={500}>Alumni</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>

      </ul>
    </nav>
  )
}

export default Navbar
