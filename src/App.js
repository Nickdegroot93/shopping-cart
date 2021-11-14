import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';
import UserForm from './Components/Form/UserForm';

function App() {
	const [showCart, setShowCart] = useState(false);
	const [hasOrdered, setHasOrdered] = useState(false);
	const [orderComplete, setOrderComplete] = useState(false);

	const showCartHandler = () => {
		setShowCart(true);
	};

	const hideCartHandler = () => {
		setShowCart(false);
	};

	const showOrderHandler = () => {
		setHasOrdered(true);
	};

	const hideOrderHandler = () => {
		setHasOrdered(false);
		setShowCart(false);
	};

	const orderCompleteHandler = () => {
		setOrderComplete(true);
	};

	return (
		<CartProvider>
			{showCart && !hasOrdered && (
				<ShoppingCart onClose={hideCartHandler} onOrder={showOrderHandler} />
			)}
			{hasOrdered && (
				<UserForm
					onClose={hideOrderHandler}
					onComplete={orderCompleteHandler}
				/>
			)}
			<Header onShowCart={showCartHandler} />
			<Main orderComplete={orderComplete} />
			<Footer />
		</CartProvider>
	);
}

export default App;
