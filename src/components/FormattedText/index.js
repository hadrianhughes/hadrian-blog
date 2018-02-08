import React from 'react';
import PropTypes from 'prop-types';

import parseSpans from '../../helpers/parseSpans';

import Heading from '../Heading';
import List from '../List';

const FormattedText = ({ content }) => (
  <div>
    {
      content.map((item, i) => (
        item.type === 'paragraph' ?
          <p dangerouslySetInnerHTML={{ __html: parseSpans(item.text, item.spans) }} key={i} />
        :
        item.type.includes('heading') ?
          <Heading size={parseInt(item.type.match(/\d+$/)[0])} key={i}>{item.text}</Heading>
        :
        item.type === 'u-list' || item.type === 'o-list' ?
          <List items={item.items} ordered={item.type === 'o-list'} key={i} />
        :
        item.type === 'image' ?
          <img src={item.url} alt={item.alt} width={item.dimensions.width} height={item.dimensions.height} key={i} />
        :
        item.type === 'video' ?
          <iframe src={item.url} width={item.dimensions.width} height={item.dimensions.height} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen key={i} />
        :
        ''
      ))
    }
  </div>
);

FormattedText.propTypes = {
  content: PropTypes.array.isRequired,
};

export default FormattedText;
