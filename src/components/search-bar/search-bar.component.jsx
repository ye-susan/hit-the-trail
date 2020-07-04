import React from 'react';
import { Link } from 'react-router-dom';

import './search-bar.styles.scss';

const SearchBar = () => (
  <div>
    <input 
      type="search" 
      placeholder='Search Trails'
    />
  </div>
);

export default SearchBar;
