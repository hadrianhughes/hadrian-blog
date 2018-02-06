import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './Header.scss';

import svgLogo from '../../assets/logo.svg';

import Icon from '../Icon';
import Overlay from '../Overlay';

const Header = ({ menuOpen, searchOpen, onClickMenu, onClickSearch }) => (
  <header className={s.root}>
    <Link to="/">
      <h1 className={s.title}>
        <img className={s.logo} src={svgLogo} alt="Hadrian Hughes Blog" />
      </h1>
    </Link>
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

Header.propTypes = {
  menuOpen: PropTypes.bool,
  searchOpen: PropTypes.bool,
  onClickMenu: PropTypes.func,
  onClickSearch: PropTypes.func,
};

Header.defaultProps = {
  menuOpen: false,
  searchOpen: false,
  onClickMenu: () => {},
  onClickSearch: () => {},
};

export default Header;
