import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import Anime from 'react-anime';

import img from '../../assets/images/about.jpeg';


class About extends Component {
  
  render() {
    return(
      <Anime 
        easing='linear'
        direction='normal'
        duration={2000}
        loop={false}
        opacity={1}
      >
      <section className='about'>
      <div className='overlay'></div>
        <div className='about__item'>
          <div className='about__item-desc'>
            <h2>About Me</h2>
            <p>Hi! My name is Andrew. I initially got my interest in programming when a friend of mine, a back-end developer suggested I learn Javascript. I have been coding and working with front end technologies for the past year. I love creating websites and applications using HTML, CSS and Javascript. I am currently learning React JS and this portfolio is actually created in React.</p>
            <p>I am also fluent in both written and spoken English and hold a Cambridge Proficiency certifaction (CPE).</p>
            <p>In my free time I train brazilian jiu-jitsu and well for the past year code :)</p>
          </div>
        </div>
        <div className='about__item'>
          <div className='about__item-list'>
            <div>
              <h2>My Skillset</h2>
              <ul>
                <li>HTML</li>
                <li>SASS</li>
                <li>JAVASCRIPT (ES6)</li>
                <li>REACT</li>
                <li>WEBPACK/GULP</li>
                <li>JQUERY</li>
              </ul>
            </div>
            <div>
              <h2>Beginner level</h2>
              <ul>
                <li>MONGODB</li>
                <li>NODE</li>
                <li>EXPRESS</li>
                <li>LOOPBACK</li>
                <li>MATERIALIZE CSS</li>
                <li>FIREBASE</li>
              </ul>
            </div>
            <a href='https://1drv.ms/b/s!AmWdDs3A4uCNiSHdCDBTp6xD_sN6' target='blank' rel='noopener'>My CV</a>
          </div>
        </div>
        <nav>
          <Link to="/" >Home</Link>
          <Link to="/work" >Work</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </section>
      </Anime>
    )
  }
}

export default About;