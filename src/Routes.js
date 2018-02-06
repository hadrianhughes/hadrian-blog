import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page from './containers/Page';
import Post from './containers/Post';
import NotFound from './components/NotFound';
import Home from './containers/Home';

const Routes = ({ data }) => (
  <Switch>
    <Route exact path="/" render={props => (
      <Page data={data} history={props.history}>
        <Home />
      </Page>
    )} />
    <Route path="/post/:postUid" render={props => (
      <Page data={data} history={props.history}>
        <Post />
      </Page>
    )} />
    <Route path="/about" render={props => (
      <div>ABOUT</div>
    )} />
    <Route path="/search/:terms" render={props => (
      <div>SEARCH</div>
    )} />
    <Route path="*" render={props => (
      <NotFound />
    )} />
  </Switch>
);

export default Routes;
