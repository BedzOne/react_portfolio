import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Anime from 'react-anime';

import Project from './Project';

import project1Img from '../../../assets/images/project1/news1.png';
import project2ImgOne from '../../../assets/images/project2/weather1.png';
import project2ImgTwo from '../../../assets/images/project2/weather2.png';
import project3Img from '../../../assets/images/project3/project3.png';
import project4Img from '../../../assets/images/project4/main-1.png';

let showImage = {
  display: "block",
  width: "45%",
  height: "100%",
  marginLeft: '1em'
}

let showImage2 = {
  display: "block",
  width: "45%",
  height: "100%",
  marginLeft: '0'
}

let desc1 = 'Application created using Vanilla Javascript. It fetches data from NEWS API to display articles from 60 global news sources. Users can save their favourite news sources into localStorage. It is fully responsive and has clean design and easy UI. I created styles using SASS';

let desc2 = 'Weather forecast application created with Javascript. It gets data from Dark SKY API to show current weather forecast and daily weather for the next four days. Icons used in here are Skycons and background images are taken from PEXELS.COM. The design is created to work mainly on mobile devices';

let desc3 = 'React application which fetches data from Movie Database and displays list of movies. User can also see details of each movie like trailer, description and images. I created it using create-react-app. It is not responsive yet and I am currently working on improving styling and adding some animations';

let desc4 = 'This is a personal trainer website I was creating for a personal trainer in London. The project is in hiatus now however. It is fully responsive and works on all devices. I was striving for modern look to provide great UX.';

class Work extends Component {
  constructor() {
    super();

    this.state = {
      displayImage: false
    }
  }

  render() {
    return(
      <Anime 
      easing='linear'
      direction='normal'
      duration={2000}
      loop={false}
      opacity={1}
      >
      <section className='work'>
        <Project title='News App' 
          displayImage={this.state.displayImage} 
          img={project1Img} 
          LinkGithub={'https://github.com/BedzOne/news-app'}
          LinkDemo={'https://bedzone.github.io/news-app/'}
          desc={desc1}
          />
        <Project 
          title='Weather Forecast' 
          img={project2ImgOne} 
          img2={project2ImgTwo} 
          displayImage={!this.state.displayImage} 
          style={showImage}
          image2style={showImage2}
          LinkGithub={'https://github.com/BedzOne/weather-app'}
          LinkDemo={'https://bedzone.github.io/weather-app/'}
          desc={desc2}
          />
        <Project 
          title='Movie Search' 
          img={project3Img} 
          LinkGithub={'https://github.com/BedzOne/react_moviedb-app'}
          LinkDemo={'https://react-movieapp.herokuapp.com'}
          desc={desc3}
          />
        <Project 
          title='Personal Trainer Website' 
          img={project4Img} 
          LinkGithub={'https://github.com/BedzOne/sebastian-budny-pt'}
          LinkDemo={'https://bedzone.github.io/sebastian-budny-pt/'}
          desc={desc4}
        />
        <nav>
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </section>
      </Anime>
    )
  }
}

export default Work;