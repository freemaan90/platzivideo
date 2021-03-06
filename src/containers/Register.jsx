import React, { useState, Fragment } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions/index';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
	const [ form, setValues ] = useState({
		email    : '',
		name     : '',
		password : ''
	});
	const handleInput = (event) => {
		setValues({
			...form,
			[event.target.name]: event.target.value
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		props.registerRequest(form);
		props.history.push('/');
	};
	return (
		<Fragment>
			<Header isRegister />
			<section className='register'>
				<section className='register__container'>
					<h2>Regístrate</h2>
					<form
						className='register__container--form'
						onSubmit={handleSubmit}>
						<input
							className='input'
							type='text'
							placeholder='Nombre'
							onChange={handleInput}
							name='name'
						/>
						<input
							className='input'
							type='text'
							placeholder='Correo'
							name='email'
							onChange={handleInput}
						/>
						<input
							className='input'
							type='password'
							placeholder='Contraseña'
							name='password'
							onChange={handleInput}
						/>
						<button className='button'>Registrarme</button>
					</form>
					<Link to='/login'>Iniciar sesión</Link>
				</section>
			</section>
		</Fragment>
	);
};
const mapStateToProps = {
	registerRequest
};
export default connect(null, mapStateToProps)(Register);
