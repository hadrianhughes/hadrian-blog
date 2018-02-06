import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <Link to="/post/hello-world">Click</Link>
  </div>
);

export default Home;
