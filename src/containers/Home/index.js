import React from 'react';
import PropTypes from 'prop-types';

import PostList from '../../containers/PostList';

class HomeContainer extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
    data: {},
  };

  render () {
    const { results } = this.props.data;
    const noMore = this.props.data.results_per_page > this.props.data.results_size;

    return results ? (
      <PostList
        posts={results}
        noMore={noMore}
      />
     ) : null;
  }
}

export default HomeContainer;
