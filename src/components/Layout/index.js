import React from 'react';

import '../../styles/grid.scss';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <main>
    { children }
    </main>
    <Footer />
  </React.Fragment>
);

export default Layout;
