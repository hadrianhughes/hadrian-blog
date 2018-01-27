import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Post from './components/Post';

const Routes = ({ data }) => (
  <Switch>
    <Route exact path="/" render={props => {
      /*
        render home page
      */
    }} />
    <Route path="/post/:postUid" render={props => (
      <Post
        title={data.data.post.title}
        image={data.data.post.image}
        body={data.data.post.body}
      />
    )} />
    <Route path="/about" render={props => {
      /*
        render about page
      */
    }} />
    <Route path="/search/:terms" render={props => {
      /*
        render post list
      */
    }}
    />
  </Switch>
);

export default Routes;
