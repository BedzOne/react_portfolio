import React, { Component } from 'react';

import Header from './Header';
import ButtonsContainer from './Buttons/ButtonsContainer';
import ScrollDown from './Buttons/ScrollDown';

import Footer from './Footer';

class Home extends Component {
  constructor() {
    super();
  }

  handleOnClick(newState) {
    this.props.handleOnClick(newState);
  }

  render() {
    return(
      <div className='container'>
        <Header/>
        <ButtonsContainer />
        <Footer />
        <ScrollDown 
          showMain={this.props.showMain}
          handleOnClick={this.props.handleOnClick.bind(this)}
        />
        <a href='' className='link1'><i className='icon1 fa fa-github-alt'></i></a>
        <a href='' className='link2'><i className='icon2 fa fa-linkedin-square'></i></a>   
      </div>
    )
  }
}

export default Home;