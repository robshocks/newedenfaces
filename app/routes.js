
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddCharacter from './components/AddCharacter';
import NewLayout from './components/NewLayout';
import NewOptions from './components/NewOptions';
import NewFolder from './components/NewFolder';
import DisplayFolder from './components/DisplayFolder';

export default (
  <Route component={App}>
      <Route path='/' component={Home} />
      <Route component={NewLayout} >
        <Route path='/new' component={NewOptions} /> 
      <Route path='/new/folder' component={NewFolder} />
      </Route>
      <Route component={DisplayFolder} >
        <Route path='folder/:folderName' />
      </Route>
  </Route>
);
