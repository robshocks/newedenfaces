
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddCharacter from './components/AddCharacter';
import NewLayout from './components/NewLayout';

export default (
  <Route component={App}>
      <Route path='/' component={Home} />
      <Route path='/new' component={NewLayout} /> 
      <Route path='/folder' component={AddCharacter} />
    </Route>
);
