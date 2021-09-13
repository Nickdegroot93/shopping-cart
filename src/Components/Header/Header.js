import styles from './Header.module.css';
import YourCart from './YourCart';
import logo from '../../Img/logo_gradient.png';

const Header = (props) => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.title__box}>
					<img className={styles.logo} src={logo} alt="Logo" height={35} />
					<div className={styles.title}>MadBurgers</div>
				</div>

				<YourCart onClick={props.onShowCart} />
			</header>
		</>
	);
};

export default Header;
