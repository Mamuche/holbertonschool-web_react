import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
    fontWeight: 'bold',
  },
});

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, id, markAsRead } = this.props;

    const itemStyle = css(type === 'urgent' ? styles.urgent : styles.default);

    if (html) {
      return (
        <li
          className={itemStyle}
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
        ></li>
      );
    }

    return (
      <li
        className={itemStyle}
        data-notification-type={type}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.object,
  value: PropTypes.string,
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: null,
  value: '',
  id: 0,
  markAsRead: () => {},
};

export default NotificationItem;
