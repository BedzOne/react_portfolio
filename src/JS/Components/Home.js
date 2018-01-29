import React, { Component } from 'react';

import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <div className='container'>
          <Header/>
          <Navigation />
          <a href='https://github.com/BedzOne' target='blank' rel='noopener' className='link1'><i className='icon1 fa fa-github-alt'></i></a>
          <a href='https://linkedin.com/in/andrew-bedziak-47a805b8' target='blank' rel='noopener' className='link2'><i className='icon2 fa fa-linkedin-square'></i></a>  
          <Footer /> 
        </div>
      </div>
    )
  }
}

export default Home;