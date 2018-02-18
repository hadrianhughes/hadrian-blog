import React from 'react';
import PropTypes from 'prop-types';
import s from './Layout.scss';

import '../../styles/grid.scss';

import Header from '../../containers/Header';
import Footer from '../Footer';

const Layout = ({ children, scrollLocked }) => (
  <div className={`${s.root} ${scrollLocked ? s.scrollLocked : ''}`}>
    <Header />
    <main className={s.main}>
    { children }
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
  scrollLocked: PropTypes.bool,
};

Layout.defaultProps = {
  children: undefined,
  scrollLocked: false,
};

export default Layout;
