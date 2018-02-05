import React from 'react';
import { Link } from 'react-router-dom';

import s from './NotFound.scss';

import Heading from '../Heading';

const NotFound = () => (
  <div className={s.root}>
    <Heading size={2} center>Oops... you've gone AWOL.</Heading>
    <p className={s.backText}>Click <Link to="/">here</Link> to go back to safety.</p>
  </div>
);

export default NotFound;
