import React from 'react';
import PropTypes from 'prop-types';
import s from './Icon.scss';

const variants = {
  hamburger: 'hamburger',
  search: 'search'
};

const Icon = ({ ariaLabel, onClick, variant }) => (
  <button aria-label={ariaLabel} onClick={onClick} className={`${s.root} ${s[variants[variant]]}`}></button>
);

Icon.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  onClick: () => {},
};

export default Icon;
