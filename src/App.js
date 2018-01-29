import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Layout from './components/Layout';
import Routes from './Routes';

import './styles/fonts.scss';
import './styles/globals.scss';

import reducer from './reducer';

const store = createStore(reducer);

const App = ({ data }) => (
  <Provider store={store}>
    <Layout>
      <Routes data={data} />
    </Layout>
  </Provider>
)

export default App;
