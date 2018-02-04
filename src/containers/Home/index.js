import React from 'react';
import PropTypes from 'prop-types';

import Home from '../../components/Home';

class HomeContainer extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    triggerFetch: PropTypes.func,
  };

  static defaultProps = {
    data: {},
    triggerFetch: () => {},
  };

  componentWillMount () {
    this.props.triggerFetch();
  }

  render () {
    return (
      <Home data={this.props.data} />
    );
  }
}

export default HomeContainer;
