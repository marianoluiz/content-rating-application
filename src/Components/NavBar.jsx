import React, { Component } from 'react';
import '../styles/NavBar.css';
import '../styles/index.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className='navBar'>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>

    )
  }
}