import React from 'react';
import PropTypes from 'prop-types';

import Layout from './components/Layout';
import Routes from './Routes';

import './styles/grid.scss';

const App = ({ data }) => (
  <Layout>
    <Routes data={data} />
  </Layout>
)

export default App;
