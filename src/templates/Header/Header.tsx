import styles from "./header.module.css";

export function Header(){
	return(
		<>
		<header>
			<nav className={styles.navbar}>
				<h1 className="logo">soller</h1>
				<ul>
					<li><button className="roboto-medium">Products</button></li>
					<li><button className="roboto-medium">Solutions</button></li>
					<li><button className="roboto-medium">Services</button></li>
					<li><button className="roboto-medium">Configure</button></li>
				</ul>
			</nav>
		</header>
		</>
	)
}