import React from 'react';
import './Navbar.css';

const navbar = () => (
  <header className='navbar'>
    <nav className='navbar_layout'>
      <div className='spacer'/>
      <div className='navbar_links'>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/trips" >Trips</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)


export default navbar;
