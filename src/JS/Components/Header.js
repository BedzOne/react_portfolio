import React, { Component } from 'react';

import logo from '../../assets/images/logo.png';

class Header extends Component {

  render() {
    return(
      <header>
        <figure>
          <img src={logo} alt='Main logo' />
        </figure>
        <div className='header__desc'>
          <h1>Andrew Bedziak</h1>
          <p>I'm a front end developer with knowledge of Javascript, React, Sass and HTML</p>
        </div>
      </header>
    )
  }
}

export default Header;