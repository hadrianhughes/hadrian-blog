import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from '../../containers/Paragraph';
import Heading from '../Heading';

const FormattedText = ({ content }) => (
  <div>
    {
      content.value.map((item, i) => (
        item.type === 'paragraph' ?
          <Paragraph text={item.text} spans={item.spans} key={i} />
        :
        item.type.includes('heading') ?
          <Heading size={parseInt(item.type.match(/\d+$/)[0])} key={i}>{item.text}</Heading>
        :
        ''
      ))
    }
  </div>
);

FormattedText.propTypes = {
  content: PropTypes.object.isRequired,
};

export default FormattedText;
