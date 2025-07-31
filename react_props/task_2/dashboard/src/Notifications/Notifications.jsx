import './Notifications.css';
import React from 'react';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';


function Notifications({ list = [] }) {
	return (
		<div className="notification" style={{ position: 'relative', paddingRight: '30px' }}>
			<button style={{
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
			<img src={closeIcon} alt="close icon" style={{ width: '10px', height: '10px' }} />
			</button>

      		<p>Here is the list of notifications</p>

			<ul>
				{list.map((notif) => {
					return (
						<NotificationItem
							key={notif.id}
							type={notif.type}
							html={notif.html}
							value={notif.value}
						/>
						);
				})}
			</ul>
		</div>
	);
}

export default Notifications
