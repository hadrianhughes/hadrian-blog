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

    this.state = {
      lastScroll: 0,
    };

    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('touchmove', this.handleScroll);
  }

  handleClickMenu () {
    const { menuOpen, searchOpen } = this.props;

    menuOpen || searchOpen ? setTimeout(() => window.scrollTo(0, this.state.lastScroll), 10) : this.setState({ lastScroll: window.scrollY });
    menuOpen ? this.props.onCloseOverlay() : this.props.onOpenMenu();
  }

  handleClickSearch () {
    const { menuOpen, searchOpen } = this.props;

    menuOpen || searchOpen ? setTimeout(() => window.scrollTo(0, this.state.lastScroll), 10) : this.setState({ lastScroll: window.scrollY });
    searchOpen ? this.props.onCloseOverlay() : this.props.onOpenSearch();
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
    setTimeout(() => {
      dispatch(setScrollLocked(true));
    }, 150);
  },
  onOpenSearch: () => {
    dispatch(closeOverlays());
    dispatch(toggleSearch());
    setTimeout(() => {
      dispatch(setScrollLocked(true));
    }, 150);
  },
  onCloseOverlay: () => {
    dispatch(closeOverlays());
    dispatch(setScrollLocked(false));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
