import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from './Post.scss';

import Heading from '../Heading';
import FormattedText from '../../containers/FormattedText';

const Post = ({ imageSrc, imageAlt, title, body }) => (
  <React.Fragment>
    <img src="http://placecage.com/1200/600" alt={imageAlt} className={s.image} />
    <div className="row">
      <div className="column small-12">
        <Heading size={2}>{title}</Heading>
        <FormattedText content={body} />
      </div>
    </div>
  </React.Fragment>
);

Post.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.object,
};

Post.defaultProps = {
  imageSrc: '',
  imageAlt: '',
  title: '',
  body: {},
};

export default Post;
