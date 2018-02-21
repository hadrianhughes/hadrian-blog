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
    scrollLocked: PropTypes.bool,
    onOpenMenu: PropTypes.func.isRequired,
    onOpenSearch: PropTypes.func.isRequired,
    onCloseOverlay: PropTypes.func.isRequired,
  };

  static defaultProps = {
    menuOpen: false,
    searchOpen: false,
    scrollLocked: false,
  };

  static height = 72;
  static overlayDelay = 150;

  constructor (props) {
    super(props);

    this.state = {
      scrollY: undefined,
      hidden: false,
      wasLocked: false,
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
    this.props.menuOpen ? this.props.onCloseOverlay() : this.props.onOpenMenu();
  }

  handleClickSearch () {
    this.props.searchOpen ? this.props.onCloseOverlay() : this.props.onOpenSearch();
  }

  handleScroll () {
    const { scrollY } = window;

    this.setState({
      scrollY: Math.max(0, Math.min(document.body.clientHeight - window.innerHeight, scrollY)),
      hidden: this.state.wasLocked ? this.state.hidden : this.state.scrollY <= Math.max(0, Math.min(document.body.clientHeight - window.innerHeight, scrollY)) && scrollY > 0,
      wasLocked: this.props.scrollLocked,
    });
  }

  render () {
    return (
      <Header
        menuOpen={this.props.menuOpen}
        searchOpen={this.props.searchOpen}
        onClickMenu={this.handleClickMenu}
        onClickSearch={this.handleClickSearch}
        hide={this.state.hidden}
      />
    )
  }
}

const mapStateToProps = state => ({
  menuOpen: state.toggleMenu,
  searchOpen: state.toggleSearch,
  scrollLocked: state.setScrollLocked,
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
