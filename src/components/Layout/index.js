import React from 'react';
import PropTypes from 'prop-types';
import s from './Layout.scss';

import '../../styles/grid.scss';

import Header from '../../containers/Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <main className={s.main}>
    { children }
    </main>
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: undefined,
};

export default Layout;
