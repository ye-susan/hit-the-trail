import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
  <header>
    <span>Hit-the-Trail</span>
    <nav>
      <Link to='/'>TRAILS</Link>
      <Link to='/'>MAP</Link>
      <Link to='/'>SAVED LISTS</Link>
    </nav>
  </header>
);

export default Header;
