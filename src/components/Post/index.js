import React from 'react';
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
  body: PropTypes.obj.isRequired,
  image: PropTypes.obj.isRequired,
  title: PropTypes.obj.isRequired,
};

export default Post;
