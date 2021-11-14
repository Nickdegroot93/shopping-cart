import React from 'react';
import styles from './OrderComplete.module.css';

const OrderComplete = () => {
	return (
		<div className={styles['order-container']}>
			<div className={styles['order-message']}>
				Thank you for order! <br />
				<span>
					Open the console to see a log containing your order details.
				</span>
			</div>
		</div>
	);
};

export default OrderComplete;
