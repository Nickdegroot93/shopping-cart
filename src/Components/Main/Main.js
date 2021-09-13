import styles from './Main.module.css';
import Menu from './Menu';

const Main = (props) => {
	return (
		<>
			<div className={styles.hero}>
				<Menu menuItems={props.menuItems} />
			</div>
		</>
	);
};

export default Main;
