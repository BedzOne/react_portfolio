import React, { Component } from 'react';

class ScrollDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWorkHome: false
    }

  }

  handleOnClick() {
    this.setState({
      showWorkHome: true
    }, () => {
      let newState = this.state.showWorkHome;
      this.props.handleOnClick(newState);
    })
  }

  render() {
    return(
      <button className='scroll-button'>Down</button>
    )
  }
}

export default ScrollDown;