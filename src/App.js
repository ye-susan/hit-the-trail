import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';

const App = () => (
  <div className='app'>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage} />
    </Switch>
  </div>
);

export default App;
