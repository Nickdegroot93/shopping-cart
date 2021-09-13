import styles from './Footer.module.css';
import logo from '../../Img/logo_gradient.png';

const Footer = () => {
	return (
		<>
			<div className={styles.footer}>
				<img className={styles.logo} src={logo} alt={'logo'} width={70} />
				<div className={styles.title}>MadBurgers</div>
				<div className={styles.copyright}>
					<p>© Copyright by Nick de Groot. Created with React.js</p>
				</div>
			</div>
		</>
	);
};
export default Footer;
