import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav>
        <Link to="/about">About</Link>
        <Link to="/work" >Work</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    )
  }
}

export default ButtonsContainer;