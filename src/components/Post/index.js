import React from 'react';

const Post = ({ title, image, body }) => (
  <React.Fragment>
    <h2>{title.value}</h2>
    <img src={image.value.main.url} alt={image.value.main.alt} />
    <p>
      {JSON.stringify(body)}
    </p>
  </React.Fragment>
);

export default Post;
