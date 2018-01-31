import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ html }) => (
  <p dangerouslySetInnerHTML={{ __html: html }} />
);

Paragraph.propTypes = {
  html: PropTypes.string,
};

Paragraph.defaultProps = {
  html: '',
};

export default Paragraph;
