import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon';

class IconContainer extends React.Component {
  static propTypes = {
    ariaLabel: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    variant: PropTypes.string.isRequired,
  };

  static defaultProps = {
    onClick: () => {},
  };

  constructor (props) {
    super(props);

    this.state = {
      on: false,
      off: undefined,
    };
  }

  render () {
    return (
      <Icon
        ariaLabel={this.props.ariaLabel}
        onClick={() => {
          this.props.onClick();
          this.setState({
            on: !this.state.on,
            off: this.state.off === undefined ? false : !this.state.off,
          });
        }}
        variant={this.props.variant}
        on={this.state.on}
        off={this.state.off}
      />
    )
  }
}

export default IconContainer;
