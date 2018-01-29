import React from 'react';
import { connect } from 'react-redux';

import { toggleMenu, toggleSearch } from '../../actions';

import Header from '../../components/Header';

const mapStateToProps = state => ({
  menuOpen: state.toggleMenu.menuOpen,
  searchOpen: state.toggleSearch.searchOpen,
});

const mapDispatchToProps = dispatch => ({
  onToggleMenu: () => dispatch(toggleMenu()),
  onToggleSearch: () => dispatch(toggleSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
