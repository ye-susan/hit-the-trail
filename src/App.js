import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';

const App = () => (
  <div className='App'>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage} />
    </Switch>
  </div>
);

export default App;

/**
 * Proposed States:
 * - SearchBar: search field state
 * - Filter: filter based on trail criteria (array will change as boxes are ticked off)
 * - User's List: list changes as user removes/adds trails to their personal list
 * - Selected Trail: if user selects trail --> map will show location of trail
 * 
 * Components to Build: 
 * X header
 * - SearchBar
 * - Filter list
 * - Filter check box
 * - Map: Will use Leaflet
 * - Trail list: will use HikingProject API
 * - User List: remove/add/star  buttons
 *    - list item
 *    - buttons for user list
 */