import React from 'react';
import s from './Header.scss';

import svgLogo from '../../assets/logo.svg';

import Icon from '../Icon';
import Overlay from '../Overlay';

const Header = ({ menuOpen, searchOpen, onClickMenu, onClickSearch }) => (
  <header className={s.root}>
    <h1 className={s.title}>
      <img className={s.logo} src={svgLogo} alt="Hadrian Hughes Blog" />
    </h1>
    <div className={s.btnMenu}>
      <Icon ariaLabel="Menu" onClick={onClickMenu} variant="hamburger" topLayer />
    </div>
    <div className={s.btnSearch}>
      <Icon ariaLabel="Search" onClick={onClickSearch} variant="search" topLayer />
    </div>
    <Overlay visible={menuOpen}>
      {'MENU'}
    </Overlay>
    <Overlay visible={searchOpen}>
      {'SEARCH'}
    </Overlay>
  </header>
);

export default Header;
