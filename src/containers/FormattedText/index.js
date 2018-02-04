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

        if (item.type === 'list-item' || item.type === 'o-list-item') {
          list.push(item);

          if (content.value[i + 1].type !== item.type) {
            result.push({
              type: item.type === 'list-item' ? 'u-list' : 'o-list',
              items: list,
            });

            list = [];
          }
        } else {
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
