import React from 'react';
import PropTypes from 'prop-types';
import s from './Post.scss';

const Post = ({ body, image, title }) => (
  <React.Fragment>
    <img src="http://placecage.com/1200/300" alt={image.value.main.alt} className={s.image} />
    <div className="row">
      <div className="column small-12">
        <h2 className={s.heading}>{title.value}</h2>
        <p className={s.body}>
          {JSON.stringify(body)}
        </p>
      </div>
    </div>
  </React.Fragment>
);

Post.propTypes = {
  body: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
};

export default Post;
