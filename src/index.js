import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Main';
import {Router, Route, hashHistory} from 'react-router';
import HomePage from './components/pages/Home';
import UserAddPage from './components/pages/UserAdd';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={HomePage}/>
    <Route path='/user/add' component={UserAddPage}/>
  </Router>
), document.getElementById('app'));
