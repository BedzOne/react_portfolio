import React, { Component } from 'react';

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className='work__project'>
      <div className='work__project-desc'>
        <h2>{this.props.title}</h2>
        <p>{this.props.desc}</p>
        <div className='work__project-desc-links'>
          <a href={this.props.LinkGithub} target='blank' rel='noopener'>Github</a>
          <a href={this.props.LinkDemo} target='blank' rel='noopener'>Demo</a>
        </div>
      </div>
      <div className='work__project-images'>
        <figure>
          <img id='image1' src={this.props.img} style={this.props.image2style} alt='project image' />
          {!this.props.displayImage ? null : <img id='image2' src={this.props.img2} style={this.props.style} alt='project image' /> }
        </figure>
      </div>
    </section>
    )
  }
}

export default Project;