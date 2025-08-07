import { StyleSheet, css } from 'aphrodite';
import React, { Component } from 'react';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';


const styles = StyleSheet.create({
  notification: {
    border: '2px dotted #e1484c',
    padding: '2px 0px 5px 5px',
    position: 'fixed',
    top: '40px',
    right: '15px',
    width: '350px',
    backgroundColor: '#fff',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '14px',
    lineHeight: 1.4,
    zIndex: 1000,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    borderRadius: '5px',
  },
  notificationsTitle: {
    position: 'fixed',
    top: '20px',
    right: '25px',
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '14px',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  closeIcon: {
    width: '12px',
    height: '12px',
  },
  emptyNotification: {
    fontWeight: 'normal',
    fontSize: '13px',
    margin: 0,
    padding: '5px 10px',
  },
  title: {
    margin: '0 0 10px 0',
    fontWeight: 'bold',
  },
  ul: {
    paddingLeft: '20px',
    margin: 0,
  },
});

class Notifications extends Component {
  static defaultProps = {
    displayDrawer: false,
    list: [],
  };

  shouldComponentUpdate(nextProps) {
      const currentLength = this.props.list ? this.props.list.length : 0;
      const nextLength = nextProps.list ? nextProps.list.length : 0;

      return currentLength !== nextLength;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, list } = this.props;

    return (
      <>
        <div className={css(styles.notificationsTitle)}>
          Your notifications
        </div>

        {displayDrawer && (
          <div className={css(styles.notification)}>
            {list.length === 0 ? (
              <p className={css(styles.emptyNotification)}>No new notification for now</p>
            ) : (
              <>
                <button
                  className={css(styles.closeButton)}
                  aria-label="Close"
                  onClick={() => console.log('Close button has been clicked')}
                >
                  <img src={closeIcon} alt="close icon" className={css(styles.closeIcon)} />
                </button>

                <p className={css(styles.title)}>Here is the list of notifications</p>
                <ul className={css(styles.ul)}>
                  {list.map((notif) => (
                    <NotificationItem
                      key={notif.id}
                      id={notif.id}
                      type={notif.type}
                      html={notif.html}
                      value={notif.value}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

export default Notifications;
