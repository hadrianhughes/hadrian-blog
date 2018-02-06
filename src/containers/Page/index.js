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

  componentDidMount () {
    this.unlisten = this.props.history.listen((location, action) => {
      this.fetchData();
    });
  }

  componentWillUnmount () {
    this.unlisten();
  }

  fetchData () {
    const { host, pathname } = location;
    fetch(`//${host}/api${pathname}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          data
        });
      });
  }

  render () {
    return (
      <React.Fragment>
        {
          React.cloneElement(this.props.children, { data: this.state.data })
        }
      </React.Fragment>
    )
  }
}

export default PageContainer;
