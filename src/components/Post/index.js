import React from 'react';
import s from './Post.scss';

const Post = ({ title, image, body }) => (
  <React.Fragment>
    <h2 className={s.root}>{title.value}</h2>
    <img src={image.value.main.url} alt={image.value.main.alt} />
    <p>
      {JSON.stringify(body)}
    </p>
  </React.Fragment>
);

export default Post;
