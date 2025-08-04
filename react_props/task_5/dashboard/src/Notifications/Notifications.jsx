import './Notifications.css';
import React from 'react';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

function Notifications({ displayDrawer = false, list = [] }) {
  return (
    <>
      <div className="notifications-title">
        Your notifications
      </div>

      {displayDrawer && (
        <div className="notification" >
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
          >
            <img src={closeIcon} alt="close icon" />
          </button>

          {list.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {list.map((notif) => (
                  <NotificationItem
                    key={notif.id}
                    type={notif.type}
                    html={notif.html}
                    value={notif.value}
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

export default Notifications;
