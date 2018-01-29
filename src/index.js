import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Layout from './components/Layout';
import Routes from './Routes';

const data = window.__INITIAL__;

hydrate(
  <BrowserRouter>
    <App data={data} />
  </BrowserRouter>,
  document.getElementById('root')
);
