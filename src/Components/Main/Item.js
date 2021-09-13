import styles from './Item.module.css';
import Input from '../UI/Input';
import { useRef, useState, useContext } from 'react';
import CartContext from '../../Store/cart-context';

const Item = (props) => {
	const cartCtx = useContext(CartContext);
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const submitFormHandler = (e) => {
		e.preventDefault();
		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
			setAmountIsValid(false);
			return;
		}

		cartCtx.addItem({
			id: props.id,
			title: props.title,
			amount: enteredAmountNumber,
			price: props.price,
		});
	};

	return (
		<>
			<li className={styles.item__box}>
				<div className={styles.item__left}>
					<div className={styles.item__title}>{props.title}</div>
					<div className={styles.item__description}>{props.description}</div>
					<div className={styles.item__price}>{`$${props.price}`}</div>
				</div>
				<form className={styles.item__right} onSubmit={submitFormHandler}>
					<Input
						label="Amount"
						input={{
							ref: { amountInputRef },
							id: 'amount_' + props.id,
							type: 'number',
							min: '1',
							max: '99',
							step: '1',
							defaultValue: '1',
							ref: amountInputRef,
						}}
					/>
					<button className={styles.btn_add}>+Add</button>
					{!amountIsValid && <p>Please enter a valid amount</p>}
				</form>
			</li>
		</>
	);
};

export default Item;
