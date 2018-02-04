import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class PageContainer extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
    data: undefined,
  };

  constructor (props) {
    super(props);

    this.state = {
      data: props.data,
      initialStale: false,
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentWillReceiveProps () {
    this.setState({
      data: undefined,
      initialStale: true,
    });
  }

  fetchData () {
    if (this.state.initialStale) {
      console.log('fetch data');
    }
  }

  render () {
    return (
      <React.Fragment>
        {
          React.cloneElement(this.props.children, { data: this.state.data, triggerFetch: this.fetchData })
        }
      </React.Fragment>
    )
  }
}

export default PageContainer;
