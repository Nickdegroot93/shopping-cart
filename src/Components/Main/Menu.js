import styles from './Menu.module.css';
import Item from './Item';

const menuItems = [
	{
		title: 'Butler Burger',
		description: 'Aioli, pickles, onion jam and arugula.',
		price: 8.95,
		id: 1,
	},
	{
		title: 'Republic Burger',
		description:
			'Mayonnaise, plum jam, Brie cheese, hazelnuts and arugula in balsamic vinaigrette.',
		price: 9.95,
		id: 2,
	},
	{
		title: 'Mayor Burger',
		description:
			'Mayonnaise, chimichurri, pickled onion and grilled cherry tomatoes.',
		price: 9.95,
		id: 3,
	},
	{
		title: `Mad Burger`,
		description:
			'Double beef patty, double cheese, beef bacon, onion rings, lettuce, tomatoes, mayo and BBQ sauce.',
		price: 10.95,
		id: 4,
	},
	{
		title: 'Son of a Bun Veggie',
		description:
			'Quinoa wheat and lentils patty with mushrooms stuffed with "gouda cheese", roasted cherry tomatoes, lettuce, pickles, Thousand Island dressing, and date honey mustard',
		price: 8.95,
		id: 5,
	},
	{
		title: 'Chicken Paradise',
		description:
			'Crispy chicken, cheddar cheese grilled onion, tomatoes, lettuce, pickles, garlic sauce, mayo and chipotle sauce.',
		price: 7.95,
		id: 6,
	},
];

const Menu = () => {
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
				<div className={styles.menu__title}>Menu</div>
				<ul className={styles.menu__items}>{mealsList}</ul>
			</div>
		</>
	);
};

export default Menu;
