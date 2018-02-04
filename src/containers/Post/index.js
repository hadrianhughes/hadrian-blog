import React from 'react';
import PropTypes from 'prop-types';

import Post from '../../components/Post';

class PostContainer extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    triggerFetch: PropTypes.func,
  };

  static defaultProps = {
    data: undefined,
    triggerFetch: () => {},
  };

  componentWillMount () {
    this.props.triggerFetch();
  }

  render () {
    return (
      <Post data={this.props.data} />
    );
  }
}

export default PostContainer;
