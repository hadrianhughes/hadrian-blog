import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Article from './components/Article';

const App = () => (
  <Switch>
    <Route exact path="/" component={Article} />
    <Route path="/article" component={Article} />
  </Switch>
);

export default App;
