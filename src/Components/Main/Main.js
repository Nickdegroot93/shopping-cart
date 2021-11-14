import styles from './Main.module.css';
import Menu from './Menu';
import OrderComplete from './OrderComplete';

const Main = ({ orderComplete, menuItems }) => {
	return (
		<>
			<div className={styles.hero}>
				{orderComplete && <OrderComplete />}
				<Menu menuItems={menuItems} />
			</div>
		</>
	);
};

export default Main;
