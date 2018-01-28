import React from 'react';
import s from './Header.scss';

import svgLogo from '../../assets/logo.svg';

import Icon from '../Icon';

const Header = () => (
  <header className={s.root}>
    <h1 className={s.title}>
      <img className={s.logo} src={svgLogo} alt="Hadrian Hughes Blog" />
    </h1>
    <div className={s.btnMenu}>
      <Icon ariaLabel="Menu" variant="hamburger" />
    </div>
    <div className={s.btnSearch}>
      <Icon ariaLabel="Search" variant="search" />
    </div>
  </header>
);

export default Header;
