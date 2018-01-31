import React from 'react';
import PropTypes from 'prop-types';
import s from './Post.scss';

import FormattedText from '../FormattedText';

const Post = ({ body, image, title }) => (
  <React.Fragment>
    <img src="http://placecage.com/1200/300" alt={image.value.main.alt} className={s.image} />
    <div className="row">
      <div className="column small-12">
        <h2 className={s.heading}>{title.value}</h2>
        <FormattedText content={body} />
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
