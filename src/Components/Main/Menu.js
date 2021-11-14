import styles from './Menu.module.css';
import Item from './Item';
import { useEffect, useState } from 'react';

const Menu = () => {
	const [menuItems, setMenuItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(null);

	useEffect(() => {
		const getMealData = async () => {
			try {
				const response = await fetch(
					'https://madburgers-cc3a0-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
				);
				if (!response.ok || response.type === 'basic') {
					throw new Error('Something went wrong!');
				}
				const data = await response.json();
				const menuItems = [];
				for (const key in data) {
					menuItems.push({
						id: key,
						title: data[key].title,
						price: data[key].price,
						description: data[key].description,
					});
				}
				setMenuItems(menuItems);
				setIsLoading(false);
			} catch (err) {
				setIsError(err.message);
			}
		};
		getMealData();
	}, []);

	if (isError) {
		return (
			<div className={styles.menu__container}>
				<div className={styles.menu__title}>Menu</div>
				<p>{isError}</p>
			</div>
		);
	}

	const mealsList = menuItems.map((item) => (
		<Item
			id={item.id}
			key={item.id}
			title={item.title}
			description={item.description}
			price={item.price}
		/>
	));

	return (
		<>
			<div className={styles.menu__container}>
				{isLoading && !isError ? (
					<>
						<div className={styles.menu__title}>Menu</div>
						<p>Loading Menu...</p>
					</>
				) : (
					<>
						<div className={styles.menu__title}>Menu</div>
						<ul className={styles.menu__items}>{mealsList}</ul>
					</>
				)}
			</div>
		</>
	);
};

export default Menu;
