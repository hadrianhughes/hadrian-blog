import React from 'react';
import s from './Footer.scss';

const Footer = () => (
  <footer className={s.root}>
    <div className={s.body}>
      <span className={s.copyright}>Copyright &copy; Hadrian Hughes</span>
    </div>
  </footer>
);

export default Footer;
