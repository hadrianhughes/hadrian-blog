import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  toggleMenu,
  toggleSearch,
  closeOverlays,
  setScrollLocked,
} from '../../actions';

import Header from '../../components/Header';

const canUseDOM = !!((typeof window !== 'undefined' && window.document && window.document.createElement));

class HeaderContainer extends React.Component {
  static propTypes = {
    menuOpen: PropTypes.bool,
    searchOpen: PropTypes.bool,
    onOpenMenu: PropTypes.func.isRequired,
    onOpenSearch: PropTypes.func.isRequired,
    onCloseOverlay: PropTypes.func.isRequired,
  };

  static defaultProps = {
    menuOpen: false,
    searchOpen: false,
  };

  static height = 72;
  static overlayDelay = 150;

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

  handleScroll () {
    // handle stuff
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
  menuOpen: state.toggleMenu,
  searchOpen: state.toggleSearch,
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
  onCloseOverlay: () => {
    dispatch(closeOverlays());
    dispatch(setScrollLocked(false));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
