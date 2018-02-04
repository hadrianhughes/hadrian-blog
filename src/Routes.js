import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page from './containers/Page';
import Post from './containers/Post';
import Home from './containers/Home';

const Routes = ({ data }) => (
  <Switch>
    <Route exact path="/" render={props => (
      <Page data={data}>
        <Home />
      </Page>
    )} />
    <Route path="/post/:postUid" render={props => (
      <Page data={data}>
        <Post />
      </Page>
    )} />
    <Route path="/about" render={props => (
      <div>ABOUT</div>
    )} />
    <Route path="/search/:terms" render={props => (
      <div>SEARCH</div>
    )}
    />
  </Switch>
);

export default Routes;
