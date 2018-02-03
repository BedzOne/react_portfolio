import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      _replyto: '',
      message: '',
      emailValid: false,
      nameValid: false,
      messageValid: false,
      formErrors: {email: '', password: ''}
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    let emailValid = this.state.emailValid;
  }

  handleOnChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return(
      <section className="contact">
      <div className='overlay'></div>
        <div className='contact__container'>
        <h1>Contact Me</h1>
        <form onSubmit={this.handleSubmit} action="https://formspree.io/abedziak@hotmail.com"
      method="POST">
            <label htmlFor="name">NAME</label>
            <input onChange={this.handleOnChange} type="name" id="name" name="name" required />
            <label htmlFor="email">E-MAIL</label>
            <input onChange={this.handleOnChange} type="email" id="email" name="_replyto" required />
            <label>MESSAGE</label>
            <textarea onChange={this.handleOnChange} id="textarea" name='message' rows="10" maxLength="2000" required></textarea>
            <button disabled= {this.disableButton} type='submit' id="form-btn">Send</button>
        </form>
      </div>
      <a href='https://github.com/BedzOne' target='blank' rel='noopener' className='link1'><i className='icon1 fa fa-github-alt'></i></a>
      <a href='https://linkedin.com/in/andrew-bedziak-47a805b8' target='blank' rel='noopener' className='link2'><i className='icon2 fa fa-linkedin-square'></i></a>  
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/work" >Work</Link>
      </nav>
    </section>
    )
  }
}

export default Contact;