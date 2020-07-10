import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
  <header>
    <h1 class="title">Hit-the-Trail</h1>
    <nav>
      <Link to='/'>TRAILS</Link>
      <Link to='/'>MAP</Link>
      <Link to='/'>LISTS</Link>
    </nav>
  </header>
);

export default Header;
