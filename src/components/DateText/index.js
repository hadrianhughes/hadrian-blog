import React from 'react';
import PropTypes from 'prop-types';

import s from './DateText.scss';

const DateText = ({ day, month, year, displayBlock }) => (
  <span className={`${s.root} ${displayBlock ? s.block : ''}`}>{day} {month} {year}</span>
);

DateText.propTypes = {
  day: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  displayBlock: PropTypes.bool,
};

DateText.defaultProps = {
  displayBlock: false,
};

export default DateText;
