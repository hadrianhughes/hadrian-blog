import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Home = ({ data }) => (
  <div>
    { JSON.stringify(data) }
  </div>
);

export default Home;
