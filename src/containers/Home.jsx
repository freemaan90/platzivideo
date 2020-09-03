import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouseItem from '../components/CarouselItem';
import '../assets/styles/Home.scss';

const Home = ({ myList, trends, originals }) => {
	return (
		<Fragment>
			<Header />
			<Search isHome />
			{myList.length > 0 && (
				<Categories title={'Mi Lista'}>
					<Carousel>
						{myList.map((item) => (
							<CarouseItem key={item.id} {...item} isList />
						))}
					</Carousel>
				</Categories>
			)}

			<Categories title={'Tendencias'}>
				<Carousel>
					{trends.map((item) => (
						<CarouseItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>

			<Categories title={'Originales de Platzi Video'}>
				<Carousel>
					{originals.map((item) => (
						<CarouseItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		myList    : state.myList,
		trends    : state.trends,
		originals : state.originals
	};
};

export default connect(mapStateToProps, null)(Home);
