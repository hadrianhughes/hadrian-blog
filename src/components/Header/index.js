import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './Header.scss';

import svgLogo from '../../assets/logo.svg';

import Icon from '../../containers/Icon';
import Overlay from '../Overlay';

const Header = ({ menuOpen, searchOpen, onClickMenu, onClickSearch, hide }) => (
  <header className={`${s.root} ${hide ? s.hide : ''}`}>
    <Link to="/">
      <h1 className={s.title}>
        <img className={s.logo} src={svgLogo} alt="Hadrian Hughes Blog" />
      </h1>
    </Link>
    <div className={s.btnSearch}>
      <Icon ariaLabel="Search" onClick={onClickSearch} variant="search" open={searchOpen} />
    </div>
    <div className={s.btnMenu}>
      <Icon ariaLabel="Menu" onClick={onClickMenu} variant="hamburger" open={menuOpen} />
    </div>
    <Overlay visible={searchOpen}>
      {'SEARCH'}
    </Overlay>
    <Overlay visible={menuOpen}>
      {'MENU'}
    </Overlay>
  </header>
);

Header.propTypes = {
  menuOpen: PropTypes.bool,
  searchOpen: PropTypes.bool,
  onClickMenu: PropTypes.func,
  onClickSearch: PropTypes.func,
  hide: PropTypes.bool,
};

Header.defaultProps = {
  menuOpen: false,
  searchOpen: false,
  onClickMenu: () => {},
  onClickSearch: () => {},
  hide: false,
};

export default Header;
