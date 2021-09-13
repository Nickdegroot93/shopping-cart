import styles from './ShoppingCart.module.css';
import CartItem from './CartItem';
import React from 'react';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../Store/cart-context';

const ShoppingCart = (props) => {
	const cartCtx = useContext(CartContext);

	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItems = cartCtx.items.map((item) => (
		<CartItem
			key={item.id}
			title={item.title}
			price={item.price}
			amount={item.amount}
			onRemove={cartItemRemoveHandler.bind(null, item.id)}
			onAdd={cartItemAddHandler.bind(null, item)}
		/>
	));

	return (
		<Modal onClose={props.onClose}>
			<div className={styles.cart__box}>
				{cartItems}
				{!hasItems && (
					<p className={styles['empty-error']}>{`Your cart is empty.`}</p>
				)}
				<div className={styles.amount__box}>
					<div className={styles.amount__title}>Total Amount</div>
					<div className={styles.amount__price}>
						{`$${cartCtx.totalAmount.toFixed(2)}`}
					</div>
				</div>
				<div className={styles.cta__box}>
					<button onClick={props.onClose}>Close</button>
					{hasItems && <button>Order</button>}
				</div>
			</div>
		</Modal>
	);
};
export default ShoppingCart;
