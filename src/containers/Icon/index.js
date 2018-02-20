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
      off: undefined,
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ off: !nextProps.open });
  }

  render () {
    return (
      <Icon
        ariaLabel={this.props.ariaLabel}
        onClick={this.props.onClick}
        variant={this.props.variant}
        on={this.props.open}
        off={this.state.off}
      />
    )
  }
}

export default IconContainer;
