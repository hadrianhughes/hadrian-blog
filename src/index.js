import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Layout from './components/Layout';
import Routes from './Routes';

render(
  <BrowserRouter>
    <App data={data} />
  </BrowserRouter>,
  document.getElementById('root')
);
