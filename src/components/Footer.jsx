import React from 'react';
import '../assets/styles/components/Footer.scss';

const FooterItems = [ 'Terminos de uso', 'Declaración de privacidad', 'Centro de ayuda' ];

const Footer = () => (
	<footer className="footer">
		<a href="/">{FooterItems[0]}</a>
		<a href="/">{FooterItems[1]}</a>
		<a href="/">{FooterItems[2]}</a>
	</footer>
);

export default Footer;
