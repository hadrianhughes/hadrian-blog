import React from 'react';
import PropTypes from 'prop-types';

import DateText from '../../components/DateText';

class DateContainer extends React.Component {
  static propTypes = {
    fullDate: PropTypes.string.isRequired,
    block: PropTypes.bool,
  };

  static defaultProps = {
    block: false,
  };

  static getMonthString (month) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return months[month];
  }

  render () {
    const fullDate = new Date(this.props.fullDate);
    const day = fullDate.getDate();
    const month = DateContainer.getMonthString(fullDate.getMonth());
    const year = fullDate.getFullYear();

    return (
      <DateText
        day={day}
        month={month}
        year={year}
        displayBlock={this.props.block}
      />
    )
  }
}

export default DateContainer;
