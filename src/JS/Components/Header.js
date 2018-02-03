import React, { Component } from 'react';
import Anime from 'react-anime';

import logo from '../../assets/images/logo.png';

class Header extends Component {

  render() {
    return(
      <header>
        <Anime 
            easing='easeInOutElastic'
            delay={1000}
            direction='normal'
            loop={false}
            translateX={{value: '40em', duration: 1500}}
            rotate={{value: 360, duration: 1500, easing: 'easeInOutSine'}}
          >
          <figure>
            <img src={logo} alt='Main logo' />
          </figure>
        </Anime>
        <div className='header__desc'>
          <h1>Andrew Bedziak</h1>
          <p>I'm a front end developer with knowledge of Javascript, React, Sass and HTML</p>
        </div>
      </header>
    )
  }
}

export default Header;