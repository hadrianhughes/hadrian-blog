import React from 'react';
import s from './Header.scss';

import svgLogo from '../../assets/logo.svg';

import Icon from '../Icon';

const Header = ({ menuOpen, searchOpen, onToggleMenu, onToggleSearch }) => (
  <header className={s.root}>
    { menuOpen ? 'MENU' : null }
    { searchOpen ? 'SEARCH' : null }
    <h1 className={s.title}>
      <img className={s.logo} src={svgLogo} alt="Hadrian Hughes Blog" />
    </h1>
    <div className={s.btnMenu}>
      <Icon ariaLabel="Menu" onClick={onToggleMenu} variant="hamburger" />
    </div>
    <div className={s.btnSearch}>
      <Icon ariaLabel="Search" onClick={onToggleSearch} variant="search" />
    </div>
  </header>
);

export default Header;
