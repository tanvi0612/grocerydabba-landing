import React, { useState } from 'react';
import styled from 'styled-components';

import { SectionHeading } from '../../../components/sharedComponents';

// images
import jaiProfile from '../../../assets/images/jai.jpeg';
import sayaniProfile from '../../../assets/images/sayani.jpeg';
import adityaProfile from '../../../assets/images/aditya.jpg';
import devProfile from '../../../assets/images/dev.jpeg';
import vasanthProfile from '../../../assets/images/vasanth.jpeg';

const TestimonialGird = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2rem;
	justify-content: space-between;
	text-align: center;
	padding: 2rem 0;

	@media (max-width: 550px) {
		grid-template-columns: 1fr;
	}
`;

const TestimonialCard = styled.div`
	min-height: 500px;
	padding: 2rem 1rem;
	position: relative;
	background: white;
	margin-top: 6rem;
	box-shadow: 0 0 10px -5px;
	width: 90%;
	margin: 3rem auto 0;

	display: flex;
	flex-direction: column;

	&:before {
		content: "";
		position: absolute;
		top: -1rem;
		left: -1rem;
		height: 100%;
		width: 100%;
		background: ${({ theme }) => theme.accentLight};
		z-index: -1;
	}

	@media (max-width: 550px) {
		min-height: 400px;
	}
`;

const developerTestimonial = [
	{
		cite:
			'I was one of the first few to have gotten featured on SkipTheLine. Having developed programming skills, I lacked the network to nail the best possible job as a fresher. SkipTheLine ensured that I had 5 offers within 7 days and was spoilt for choices. If it is not for SkipTheLine, I might have landed at a place where my true potential wouldn’t have been met and I am ever grateful',
		author: 'Jai Kathuria',
		image: jaiProfile
	},

	{
		cite:
			'Having moved on from a startup, I was looking for an opportunity to join a small but high growth team with a proven track record. I didn’t want to hunt for opportunities by applying through traditional ways that don’t necessarily enable the best to find the best jobs. Upon getting featured, I had 5+ offers and chose and joined one within a month',
		author: 'Aditya',
		image: adityaProfile
	},

	{
		cite:
			'The biggest strength of SkipTheLine is its network and how fast it enables talented developers to find the best places to work. I as a developer have only been focussed on acquiring skills and when I came to know about SkipTheLine, it was all I was looking for in order to land a job at a high growth startup and I got one within a month',
		author: 'Sayani',
		image: sayaniProfile
	}
];

const startupTestimonials = [
	{
		cite:
			'We have hired two people already through SkipTheLine and did so within two months. It curates the best talent in a format never seen before and helps separates the best allowing us to save on time to close a hire',
		author: 'Vasanth, Smallcase',
		image: vasanthProfile
	},

	{
		cite:
			'SkipTheLine curation of developers is possibly the best and fastest way to identify and hire talented developers. We have hired one already and sure to do more in the future',
		author: 'Dev, Credit Saison India',
		image: devProfile
	}
];

const Indicator = styled.div`
	height: 4px;
	width: ${(props) => (props.active ? '2rem' : '1rem')};
	margin: 0.5rem;
	background: ${(props) => (props.active ? '#000' : '#f3f3f3')};
	transition: all 0.3s ease-in-out;
	border-radius: 0;
	cursor: pointer;
`;

const IndicatorWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem 0;

	&:hover ${Indicator} {
		height: 10px;
	}
`;

const Testimonials = (props) => {
	const [ activeIndex, setIndex ] = useState(0);
	const data = props.data[activeIndex];
	return (
		<TestimonialCard>
			<img
				style={{
					borderRadius: '50%',
					height: '80px',
					width: '80px',
					objectFit: 'contain',
					objectPosition: 'center',
					margin: '0rem auto 2rem'
				}}
				src={
					data.image ||
					'https://media.licdn.com/dms/image/C4D03AQGqDxAwdRLP9Q/profile-displayphoto-shrink_800_800/0?e=1564617600&v=beta&t=v7gi8AI-SnpLNkTasWTy3HvcWWkalfVicrYwkKCxeL8'
				}
				alt=""
			/>
			<h4>{data.author}</h4>
			<p style={{ flex: 1 }}>{data.cite}</p>

			<IndicatorWrap>
				{props.data.map((a, idx) => (
					<Indicator key={idx} active={idx === activeIndex} onClick={() => setIndex(idx)} />
				))}
			</IndicatorWrap>
		</TestimonialCard>
	);
};

const TestimonialSection = () => {
	return (
		<section>
			<div className="container">
				<SectionHeading>SkipTheLine works?</SectionHeading>
				<TestimonialGird>
					<div>
						<h3>What Developers Say</h3>

						<Testimonials data={developerTestimonial} />
					</div>

					<div>
						<h3>What Companies Say</h3>

						<Testimonials data={startupTestimonials} />
					</div>
				</TestimonialGird>
			</div>
		</section>
	);
};

export default TestimonialSection;
