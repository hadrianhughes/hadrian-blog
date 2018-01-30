import React from 'react';
import { connect } from 'react-redux';

import { toggleMenu, toggleSearch, closeOverlays } from '../../actions';

import Header from '../../components/Header';

class HeaderContainer extends React.Component {
  constructor (props) {
    super(props);

    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
  }

  handleClickMenu () {
    this.props.menuOpen ? this.props.onCloseOverlay() : this.props.onOpenMenu();
  }

  handleClickSearch () {
    this.props.searchOpen ? this.props.onCloseOverlay() : this.props.onOpenSearch();
  }

  render () {
    return (
      <Header
        menuOpen={this.props.menuOpen}
        searchOpen={this.props.searchOpen}
        onClickMenu={this.handleClickMenu}
        onClickSearch={this.handleClickSearch}
      />
    )
  }
}

const mapStateToProps = state => ({
  menuOpen: state.toggleMenu.menuOpen,
  searchOpen: state.toggleSearch.searchOpen,
});

const mapDispatchToProps = dispatch => ({
  onOpenMenu: () => {
    dispatch(closeOverlays());
    dispatch(toggleMenu());
  },
  onOpenSearch: () => {
    dispatch(closeOverlays());
    dispatch(toggleSearch());
  },
  onCloseOverlay: () => dispatch(closeOverlays())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
