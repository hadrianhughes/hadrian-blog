import React from 'react';
import PropTypes from 'prop-types';
import s from './Post.scss';

const Post = ({ body, image, title }) => (
  <React.Fragment>
    <h2>{title.value}</h2>
    <img src={image.value.main.url} alt={image.value.main.alt} />
    <p className={s.body}>
      {JSON.stringify(body)}
    </p>
  </React.Fragment>
);

Post.propTypes = {
  body: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
};

export default Post;
