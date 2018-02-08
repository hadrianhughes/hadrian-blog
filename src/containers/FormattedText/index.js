import React from 'react';
import PropTypes from 'prop-types';

import FormattedText from '../../components/FormattedText';

class FormattedTextContainer extends React.Component {
  static propTypes = {
    content: PropTypes.object.isRequired,
  };

  prepareContent () {
    const { content } = this.props;
    let result = [];
    let list = [];

    if (content.value) {
      for (let i = 0;i < content.value.length;i++) {
        const item = content.value[i];

        switch (item.type) {
          case 'list-item' || 'o-list-item':
            list.push(item);

            if (content.value[i + 1].type !== item.type) {
              result.push({
                type: item.type === 'list-item' ? 'u-list' : 'o-list',
                items: list,
              });
              list = [];
            }
            break;
          case 'embed':
            if (item.oembed.type === 'video') {
              const ytId = item.oembed.embed_url.match(/watch\?v=(.+?)(&.*)?$/)[1];
              result.push({
                type: 'video',
                url: `http://www.youtube.com/embed/${ytId}`,
                dimensions: {
                  width: item.oembed.width,
                  height: item.oembed.height,
                }
              });
            } else {
              result.push(item);
            }
            break;
          default:
            result.push(item);
        }
      }
    }

    return result;
  }

  render () {
    return (
      <FormattedText content={this.prepareContent()} />
    );
  }
}

export default FormattedTextContainer;
