import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';

function App() {
	const [showCart, setShowCart] = useState(false);

	const showCartHandler = () => {
		setShowCart(true);
	};

	const hideCartHandler = () => {
		setShowCart(false);
	};

	return (
		<CartProvider>
			{showCart && <ShoppingCart onClose={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<Main />
			<Footer />
		</CartProvider>
	);
}

export default App;
