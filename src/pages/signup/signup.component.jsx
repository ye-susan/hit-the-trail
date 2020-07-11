import React, { Component } from 'react';
import axios from 'axios';

import './signup.styles.scss';

export default class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    loginEmail: '',
    loginPassword: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSignup = async event => {
    event.preventDefault();

    const user = await axios.post('localhost:5000/users', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });

    console.log(user);
  };

  render() {
    return (
      <div className='auth-page'>
        <div className='sign-up'>
          <form onSubmit={this.handleSignup}>
            <label>Name: </label>
            <input
              type='text'
              name='name'
              onChange={this.handleChange}
              value={this.state.name}
            />
            <label>Email: </label>
            <input
              type='email'
              name='email'
              onChange={this.handleChange}
              value={this.state.email}
            />
            <label>Password: </label>
            <input
              type='password'
              name='password'
              onChange={this.handleChange}
              value={this.state.password}
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className='login'>
          <form>
            <label>Email: </label>
            <input
              type='email'
              name='loginEmail'
              onChange={this.handleChange}
              value={this.state.loginEmail}
            />
            <label>Password: </label>
            <input
              type='password'
              name='loginPassword'
              onChange={this.handleChange}
              value={this.state.loginPassword}
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    );
  }
}
