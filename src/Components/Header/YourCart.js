import styles from './YourCart.module.css';
import CartContext from '../../Store/cart-context';
import { useContext, useEffect, useState } from 'react';

const YourCart = (props) => {
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
	const cartCtx = useContext(CartContext);

	const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
		return currNumber + item.amount;
	}, 0);

	let btnClasses = `${styles.yourcart} ${btnIsHighlighted && styles.bump}`;

	useEffect(() => {
		if (cartCtx.items.length === 0) {
			return;
		}
		setBtnIsHighlighted(true);
		const timer = setTimeout(() => {
			setBtnIsHighlighted(false);
		}, 600);

		return () => {
			clearTimeout(timer);
		};
	}, [cartCtx.items]);

	return (
		<>
			<div className={btnClasses} onClick={props.onClick}>
				<svg
					className={styles.cartlogo}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
					></path>
				</svg>
				<div className={styles.yourcart__text}>Your cart</div>
				<div className={styles.yourcart__amount}>{numberOfCartItems}</div>
			</div>
		</>
	);
};

export default YourCart;
