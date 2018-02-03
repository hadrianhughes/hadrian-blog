import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from '../../components/Paragraph';

class ParagraphContainer extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    spans: PropTypes.array,
  };

  static defaultProps = {
    text: '',
    spans: [],
  };

  parseNodes () {
    let { text } = this.props;

    this.props.spans.forEach(span => {
      const start = text.substring(0, span.start);
      const end = text.substring(span.end);
      const el = this.selectElement(span.type);
      const node = `<${el}${span.type === 'hyperlink' ? ' href="' + span.data.value.url + '"' : ''}>${text.substring(span.start, span.end)}</${el}>`;

      text = `${start}${node}${end}`;
    });

    return text;
  }

  selectElement (type) {
    switch (type) {
      case 'strong':
        return 'strong';
      case 'em':
        return 'em';
      case 'hyperlink':
        return 'a';
    }
  }

  render () {
    const nodes = this.parseNodes();

    return (
      <Paragraph html={nodes} />
    );
  }
}

export default ParagraphContainer;
