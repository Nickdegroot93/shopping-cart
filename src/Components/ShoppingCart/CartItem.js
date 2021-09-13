import styles from './CartItem.module.css';

const CartItem = (props) => {
	return (
		<>
			<li className={styles.cartitem__box}>
				<div>
					<div>{props.title}</div>
					<div className={styles.price__box}>
						<div className={styles.price}>{`$${props.price.toFixed(2)}`}</div>
						<div className={styles.amount}>x{props.amount}</div>
					</div>
				</div>
				<div>
					<button className={styles.remove} onClick={props.onRemove}>
						-
					</button>
					<button className={styles.add} onClick={props.onAdd}>
						+
					</button>
				</div>
			</li>
		</>
	);
};
export default CartItem;
