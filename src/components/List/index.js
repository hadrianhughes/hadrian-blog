import React from 'react';
import PropTypes from 'prop-types';

import parseSpans from '../../helpers/parseSpans';

const List = ({ items, ordered }) => (
  ordered ?
  <ol>
    {
      items.map((item, i) => (
        <li dangerouslySetInnerHTML={{ __html: parseSpans(item.text, item.spans) }} key={i} />
      ))
    }
  </ol>
  :
  <ul>
    {
      items.map((item, i) => (
        <li dangerouslySetInnerHTML={{ __html: parseSpans(item.text, item.spans) }} key={i} />
      ))
    }
  </ul>
);

List.propTypes = {
  items: PropTypes.array.isRequired,
  ordered: PropTypes.bool,
};

List.defaultProps = {
  ordered: false,
};

export default List;
