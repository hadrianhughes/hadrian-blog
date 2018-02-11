import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from './CTA.scss';

const CTA = ({ href, onClick, children }) => (
  href ?
    <Link className={s.root} to={href}>{children}</Link>
  :
    <button className={s.root} onClick={onClick}>{children}</button>
);

CTA.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

CTA.defaultProps = {
  href: undefined,
  onClick: () => {},
  children: undefined,
};

export default CTA;
