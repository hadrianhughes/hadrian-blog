import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from '../../containers/Paragraph';

const FormattedText = ({ content }) => (
  <div>
    {
      content.value.map((item, i) => (
        item.type === 'paragraph' ?
          <Paragraph text={item.text} spans={item.spans} key={i} />
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
