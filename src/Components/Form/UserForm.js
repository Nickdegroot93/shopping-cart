import { useForm } from 'react-hook-form';
import styles from './UserForm.module.css';
import { useContext } from 'react';
import Modal from '../UI/Modal';
import CartContext from '../../Store/cart-context';

const UserForm = (props) => {
	const cartCtx = useContext(CartContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = (data) => {
		fetch(
			'https://madburgers-cc3a0-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
			{
				method: 'POST',
				body: JSON.stringify({
					user: data,
					order: cartCtx.items,
					totalAmount: cartCtx.totalAmount,
				}),
			}
		);
		console.log('Personal details:');
		console.log(data);
		console.log('Order details:');
		console.log(cartCtx.items);
		console.log(`Total amount: $${cartCtx.totalAmount}`);
		props.onComplete();
		cartCtx.emptyCart();
		reset();
		props.onClose();
	};

	return (
		<Modal onClose={props.onClose}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles['personal-info']}>
					<div>Personal Details</div>
					<div className={styles['form-item']}>
						<input
							placeholder="First Name"
							{...register('firstName', {
								required: 'First name is required',
							})}
						/>
						{errors.firstName && (
							<p className={styles['error-message']}>
								{errors.firstName.message}
							</p>
						)}
					</div>
					<div className={styles['form-item']}>
						<input
							placeholder="Last Name"
							{...register('lastName', {
								required: 'Last name is required',
							})}
						/>
						{errors.lastName && (
							<p className={styles['error-message']}>
								{errors.lastName.message}
							</p>
						)}
					</div>
					<div className={styles['form-item']}>
						<input
							placeholder="Email"
							{...register('email', {
								required: 'Email address is required',
								pattern: {
									value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, // eslint-disable-line
									message: 'Please enter a valid email address',
								},
							})}
						/>
						{errors.email && (
							<p className={styles['error-message']}>{errors.email.message}</p>
						)}
					</div>
					<div className={styles['form-item']}>
						<input
							placeholder="Phone Number"
							{...register('phone', {
								required: 'Phone number is required',
								pattern: {
									value:
										/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, // eslint-disable-line
									message: 'Please enter a valid phone number',
								},
							})}
						/>
						{errors.phone && (
							<p className={styles['error-message']}>{errors.phone.message}</p>
						)}
					</div>
				</div>
				<div className={styles['address-info']}>
					<div>Delivery Address</div>
					<div className={styles['form-item']}>
						<input
							placeholder="Street Address"
							{...register('streetAddress', {
								required: 'Street address is required',
							})}
						/>
						{errors.streetAddress && (
							<p className={styles['error-message']}>
								{errors.streetAddress.message}
							</p>
						)}
					</div>
					<div className={styles['form-item']}>
						<input
							placeholder="City"
							{...register('city', {
								required: 'City is required',
							})}
						/>
						{errors.city && (
							<p className={styles['error-message']}>{errors.city.message}</p>
						)}
					</div>
					<div className={styles['form-item']}>
						<input
							placeholder="Postal / ZIP Code"
							{...register('postal', {
								required: 'Postal / ZIP Code is required',
								pattern: {
									value: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
									message:
										'Please enter a valid postal code. (format: 1234 AB)',
								},
							})}
						/>
						{errors.postal && (
							<p className={styles['error-message']}>{errors.postal.message}</p>
						)}
					</div>
				</div>

				<input type="submit" className={styles['submit-btn']} />
			</form>
		</Modal>
	);
};

export default UserForm;
