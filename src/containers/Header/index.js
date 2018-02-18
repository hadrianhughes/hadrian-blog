import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  toggleMenu,
  toggleSearch,
  closeOverlays,
  addToHeaderPosition,
  setScrollHeight,
} from '../../actions';

import Header from '../../components/Header';

class HeaderContainer extends React.Component {
  static propTypes = {
    menuOpen: PropTypes.bool,
    searchOpen: PropTypes.bool,
    headerPosition: PropTypes.number,
    onOpenMenu: PropTypes.func.isRequired,
    onOpenSearch: PropTypes.func.isRequired,
    onCloseOverlay: PropTypes.func.isRequired,
    addToHeaderPosition: PropTypes.func.isRequired,
  };

  static defaultProps = {
    menuOpen: false,
    searchOpen: false,
    headerPosition: 0,
  };

  static height = 72;

  constructor (props) {
    super(props);

    this.state = {
      lastScroll: 0,
      loaded: false,
    };

    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount () {
    this.setState({ loaded: true });
    this.handleScroll();

    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleClickMenu () {
    this.props.menuOpen ? this.props.onCloseOverlay() : this.props.onOpenMenu();
  }

  handleClickSearch () {
    this.props.searchOpen ? this.props.onCloseOverlay() : this.props.onOpenSearch();
  }

  handleScroll () {
    const { scrollTop } = document.documentElement;

    this.props.addToHeaderPosition(-(scrollTop - this.props.scrollHeight), -(HeaderContainer.height));
    this.props.setScrollHeight(scrollTop);
  }

  render () {
    const overlayOpen = this.props.menuOpen || this.props.searchOpen;

    return (
      <Header
        menuOpen={this.props.menuOpen}
        searchOpen={this.props.searchOpen}
        overlayOpen={overlayOpen}
        onClickMenu={this.handleClickMenu}
        onClickSearch={this.handleClickSearch}
        headerPosition={this.props.headerPosition}
        hide={(Math.abs(this.props.headerPosition) >= HeaderContainer.height || !this.state.loaded) && !overlayOpen}
      />
    )
  }
}

const mapStateToProps = state => ({
  menuOpen: state.toggleMenu,
  searchOpen: state.toggleSearch,
  headerPosition: state.addToHeaderPosition,
  scrollHeight: state.setScrollHeight,
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
  onCloseOverlay: () => dispatch(closeOverlays()),
  addToHeaderPosition: (value, min) => dispatch(addToHeaderPosition(value, min)),
  setScrollHeight: value => dispatch(setScrollHeight(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
