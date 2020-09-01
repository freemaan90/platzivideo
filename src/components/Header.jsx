import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const pageText = [ 'Perfil', 'Cuenta', 'Cerrar Sesión' ];

const Header = () => (
	<header className="header">
		<img className="header__img" src={logo} alt="Platzi Video" />
		<div className="header__menu">
			<div className="header__menu--profile">
				<img src={userIcon} alt="" />
				<p>{pageText[0]}</p>
			</div>
			<ul>
				<li>
					<a href="/">{pageText[1]}</a>
				</li>
				<li>
					<a href="/">{pageText[2]}</a>
				</li>
			</ul>
		</div>
	</header>
);
export default Header;
