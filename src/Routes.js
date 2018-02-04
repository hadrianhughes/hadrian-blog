import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Post from './components/Post';

const Routes = ({ data }) => (
  <Switch>
    <Route exact path="/" render={props => (
      <div>HOME</div>
    )} />
    <Route path="/post/:postUid" render={props => (
      <Post
        title={data.data.post.title}
        image={data.data.post.image}
        body={data.data.post.body}
      />
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
