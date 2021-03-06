import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Header from './components/header/header.component';
import Trails from './pages/trails/trails.component';
import SignUp from './pages/signup/signup.component';

const App = () => (
  <div className='App'>
    <Header />
    <Switch>
      <Route exact path='/' component={Trails} />
      <Route path='/signup' component={SignUp} />
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
