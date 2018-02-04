import React from 'react';
import PropTypes from 'prop-types';
import s from './Post.scss';

import Heading from '../Heading';
import FormattedText from '../../containers/FormattedText';

const Post = ({ data }) => (
  <React.Fragment>
    {
      data ?
      <React.Fragment>
        <img src="http://placecage.com/1200/600" alt={data ? data.data.post.image.value.main.alt : ''} className={s.image} />
        <div className="row">
          <div className="column small-12">
            <Heading size={2}>{data ? data.data.post.title.value : ''}</Heading>
            <FormattedText content={data ? data.data.post.body : {}} />
          </div>
        </div>
      </React.Fragment>
      :
      ''
    }
  </React.Fragment>
);

Post.propTypes = {
  data: PropTypes.object,
};

Post.defaultProps = {
  data: undefined,
};

export default Post;
