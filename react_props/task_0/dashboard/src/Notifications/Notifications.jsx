import './Notifications.css';
import React from 'react';
import closeIcon from '../assets/close-button.png';
import { getLatestNotification } from '../utils/utils';



function Notifications() {
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
				<li data-priority="default">New course available</li>
				<li data-priority="urgent">New resume available</li>
				<li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
			</ul>
		</div>
	);
}

export default Notifications
