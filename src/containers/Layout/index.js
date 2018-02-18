import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';

class LayoutContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    scrollHeight: PropTypes.number,
    scrollLocked: PropTypes.bool,
  };

  static defaultProps = {
    children: undefined,
    scrollHeight: 0,
    scrollLocked: false,
  };

  constructor (props) {
    super(props);

    this.state = {
      wasLocked: false,
      lastScrollHeight: 0,
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.scrollLocked && !this.state.wasLocked) {
      this.setState({ lastScrollHeight: nextProps.scrollHeight });
    }

    if (this.state.wasLocked && !nextProps.scrollLocked) {
      setTimeout(() => {
        scrollTo(0, this.state.lastScrollHeight);
      }, 0);
    }

    this.setState({ wasLocked: nextProps.scrollLocked });
  }

  render () {
    return (
      <Layout scrollLocked={this.props.scrollLocked}>
        {this.props.children}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  scrollHeight: state.setScrollHeight,
  scrollLocked: state.setScrollLocked,
});

export default connect(mapStateToProps)(LayoutContainer);
