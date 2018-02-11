import React from 'react';
import PropTypes from 'prop-types';

import PostList from '../../components/PostList';

class HomeContainer extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
    data: {},
  };

  render () {
    const { results } = this.props.data;

    return results ? <PostList posts={this.props.data.results} /> : null;
  }
}

export default HomeContainer;
