import React from 'react';
import PropTypes from 'prop-types';
import s from './Overlay.scss';

const Overlay = ({ children, visible }) => (
  <div className={`${s.root} ${visible ? s.visible : ''}`}>
    { children }
  </div>
);

Overlay.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
};

Overlay.defaultProps = {
  children: undefined,
  visible: false,
};

export default Overlay;
