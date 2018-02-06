import React from 'react';
import PropTypes from 'prop-types';

import checkNestedProperty from '../../helpers/checkNestedProperty';

import Post from '../../components/Post';

class PostContainer extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
    data: {},
  };

  render () {
    const { data } = this.props;

    return (
      <Post
        imageSrc={checkNestedProperty(data, 'data.post.image.value.main.url') ? data.data.post.image.value.main.url : ''}
        imageAlt={checkNestedProperty(data, 'data.post.image.value.main.alt') ? data.data.post.image.value.main.alt : ''}
        title={checkNestedProperty(data, 'data.post.title.value') ? data.data.post.title.value : ''}
        body={checkNestedProperty(data, 'data.post.body') ? data.data.post.body : {}}
      />
    );
  }
}

export default PostContainer;
