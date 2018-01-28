import React from 'react';
import s from './Header.scss';

import svgLogo from '../../assets/logo.svg';

const Header = () => (
  <header className={s.root}>
    <h1 className={s.title}>
      <img className={s.logo} src={svgLogo} alt="Hadrian Hughes Blog" />
    </h1>
  </header>
);

export default Header;
