import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addToResults, incrementPage, hideButton } from '../../actions';

import PostList from '../../components/PostList';

class PostListContainer extends React.Component {
  static propTypes = {
    posts: PropTypes.array,
    results: PropTypes.array,
    page: PropTypes.number,
    noMore: PropTypes.bool,
    shouldHideButton: PropTypes.bool,
    addToResults: PropTypes.func.isRequired,
    incrementPage: PropTypes.func.isRequired,
    hideButton: PropTypes.func.isRequired,
  };

  static defaultProps = {
    posts: [],
    results: [],
    page: 1,
    noMore: false,
    shouldHideButton: false,
  };

  constructor (props) {
    super(props);

    this.fetchMoreResults = this.fetchMoreResults.bind(this);
  }

  componentDidMount () {
    this.props.addToResults(this.props.posts);
    this.props.incrementPage();
  }

  fetchMoreResults () {
    const { host } = location;
    const { page } = this.props;
    fetch(`//${host}/api/posts/${page}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (this.props.page === data.total_pages) this.props.hideButton();
        this.props.addToResults(data.results);
        this.props.incrementPage();
      });
  }

  render () {
    const posts = this.props.results.length > 0 ? this.props.results : this.props.posts;
    return (
      <PostList
        posts={posts}
        loadMore={this.fetchMoreResults}
        hideButton={this.props.shouldHideButton || this.props.noMore}
      />
    )
  }
}

const mapStateToProps = state => ({
  results: state.addToResults,
  page: state.incrementPage,
  shouldHideButton: state.hideButton,
});

const mapDispatchToProps = dispatch => ({
  addToResults: data => dispatch(addToResults(data)),
  incrementPage: () => dispatch(incrementPage()),
  hideButton: () => dispatch(hideButton()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
