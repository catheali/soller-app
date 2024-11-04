import styles from "./footer.module.css";

export function Footer(){
	return(
		<>
		<footer>
			<div className={styles.footerLogo}>
				<div>
					<svg width="56" height="33" viewBox="0 0 56 33" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M37.4078 32.5H50.3255L18.3257 0.5H5.40784L37.4078 32.5Z" fill="#0F172A"/>
					<path d="M24.9622 0.500002L55.8096 31.3474V0.5H47.4617V10.2391L37.7226 0.5L24.9622 0.500002Z" fill="#0F172A"/>
					<path d="M0 1.57129V32.4999H8.34782V22.7607L18.0869 32.4999H30.9287L0 1.57129Z" fill="#0F172A"/>
					</svg>
				</div>
				<h1 className="logo"> soller </h1>
				<span className="roboto-regular"> @2023 Soller, Inc. All rights reserved</span>
			</div>
			<div className={styles.footerButtons}>
				<ul className="roboto-medium">
						<li><button >Terms</button></li>
						<li><button >Privacy</button></li>
						<li><button >Support</button></li>	
				</ul>
			</div>
		</footer>
		</>
	)
}