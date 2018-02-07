import React from 'react';
import PropTypes from 'prop-types';

import Home from '../../components/Home';

class HomeContainer extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
    data: {},
  };

  render () {
    return (
      <Home data={this.props.data} />
    );
  }
}

export default HomeContainer;
