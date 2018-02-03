import React from 'react';
import PropTypes from 'prop-types';

import s from './Heading.scss';

const Heading = ({ size, children }) => (
  size === 2 ?
    <h2 className={`${s.root} ${s.h2}`}>{ children }</h2>
  :
  size === 3 ?
    <h3 className={`${s.root} ${s.h3}`}>{ children }</h3>
  :
  size === 4 ?
    <h4 className={`${s.root} ${s.h4}`}>{ children }</h4>
  :
  size === 5 ?
    <h5 className={`${s.root} ${s.h5}`}>{ children }</h5>
  :
  size === 6 ?
    <h6 className={`${s.root} ${s.h6}`}>{ children }</h6>
  :
  ''
);

Heading.propTypes = {
  size: PropTypes.number.isRequired,
  children: PropTypes.node,
};

Heading.defaultProps = {
  children: undefined,
};

export default Heading;