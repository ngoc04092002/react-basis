import React from 'react'
import './header.scss';

import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';


const Header = () => {



  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ngoc Van</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="croll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header