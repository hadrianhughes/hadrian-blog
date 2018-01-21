import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Post from './components/Post';

const App = ({ data }) => (
  <Switch>
    <Route exact path="/" render={props => (
      <Post
        title={data.data.post.title}
        image={data.data.post.image}
        body={data.data.body}
      />
    )} />
    <Route path="/post" render={props => (
      <Post
        title={data.data.post.title}
        image={data.data.post.image}
        body={data.data.post.body}
      />
    )} />
  </Switch>
);

export default App;
