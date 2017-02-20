import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App';
import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';
import NotFoundPage from './components/NotFoundPage';
import {checkAuth} from './routesAuth';

export default (
  <Route component={App}>
    <IndexRoute component={LoginPage}/>
    <Route onEnter={checkAuth}>
      <Route path="/" component={LoginPage}/>
      <Route path="/homepage" component={HomePage}/>
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
