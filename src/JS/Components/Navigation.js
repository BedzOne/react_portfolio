import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {

  render() {
    return(
      <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/work" >Work</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    )
  }
}

export default Navigation;