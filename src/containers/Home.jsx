import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouseItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/Home.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
	const initialState = useInitialState(API);
	return (
		<div className='App'>
			<Header />
			<Search />
			{initialState.mylist.length > 0 && (
				<Categories title={'Mi Lista'}>
					<Carousel>
						{initialState.mylist.map((item) => (
							<CarouseItem key={item.id} {...item} />
						))}
					</Carousel>
				</Categories>
			)}

			<Categories title={'Tendencias'}>
				<Carousel>
					{initialState.trends.map((item) => (
						<CarouseItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>

			<Categories title={'Originales de Platzi Video'}>
				<Carousel>
					{initialState.originals.map((item) => (
						<CarouseItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>

			<Footer />
		</div>
	);
};

export default Home;