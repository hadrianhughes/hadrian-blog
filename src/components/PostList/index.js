import React from 'react';
import PropTypes from 'prop-types';

import s from './PostList.scss';

import { Link } from 'react-router-dom';
import Heading from '../Heading';
import FormattedText from '../FormattedText';
import DateText from '../../containers/DateText';
import CTA from '../../components/CTA';

const PostList = ({ posts, loadMore, hideButton }) => (
  <div className="row">
    <div className="column small-12">
      <ol className={s.root}>
        {
          posts.map((post, i) => (
            <li className={s.listItem} key={i}>
              <article className={s.article}>
                <DateText block fullDate={post.first_publication_date} />
                <Link to={`/post/${post.uid}`}>
                  <Heading size={3}>{post.data.post.title.value}</Heading>
                  <FormattedText className={s.intro} content={[ post.data.post.intro.value[0] ]} />
                </Link>
              </article>
            </li>
          ))
        }
      </ol>
      {
        hideButton ?
        null
        :
          <div className={s.buttonContainer}>
            <CTA onClick={loadMore}>Load more</CTA>
          </div>
      }
    </div>
  </div>
);

PostList.propTypes = {
  posts: PropTypes.array,
  loadMore: PropTypes.func.isRequired,
  hideButton: PropTypes.bool,
};

PostList.defaultProps = {
  posts: [],
  hideButton: false,
};

export default PostList;
