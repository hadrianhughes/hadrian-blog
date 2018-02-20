import React from 'react';
import PropTypes from 'prop-types';
import s from './Icon.scss';

const variants = {
  hamburger: 'hamburger',
  search: 'search'
};

const Icon = ({ ariaLabel, onClick, variant, on, off }) => (
  <button aria-label={ariaLabel} onClick={onClick} className={`${s.root} ${s[variants[variant]]} ${on ? s.on : ''} ${off ? s.off : ''}`}>
    <div />
  </button>
);

Icon.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string.isRequired,
  on: PropTypes.bool,
  off: PropTypes.bool,
};

Icon.defaultProps = {
  onClick: () => {},
  on: false,
  off: undefined,
};

export default Icon;
