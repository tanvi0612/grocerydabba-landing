import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

import { SectionHeading } from '../../../components/sharedComponents';

const WhyGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;

	> div:first-child > div {
		border-right: 1px solid #c3c3c3;
	}

	@media (max-width: 550px) {
		grid-template-columns: 1fr;
	}
`;

const WhyCard = styled.div`
	padding: 2rem 4rem;
	text-align: center;
	margin: 2rem 0;

	@media (max-width: 550px) {
		margin: 0;
		padding: 2rem 0;
		&:first-child {
			border-right: none;
		}
	}
`;

const WhySkipTheLineSection = (props) => (
	<section>
		<div className="container">
			<ScrollAnimation animateIn="fadeIn">
				<SectionHeading>Why GroceryDabba?</SectionHeading>
			</ScrollAnimation>
			<WhyGrid>
				<ScrollAnimation animateIn="fadeIn">
					<WhyCard>
						<h3>Locally Sourced:)</h3>
						<span>
							All groceries are picked up from local vendors, after your order is placed, ensuring
							quality, freshness and wholesome ingredients.
						</span>
					</WhyCard>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn">
					<WhyCard>
						<h3>Bumper Savings!</h3>
						<span>
							We bring you best deals from local vendors and save you time, money and all the hassle of
							lugging bags of groceries.
						</span>
					</WhyCard>
				</ScrollAnimation>
			</WhyGrid>
		</div>
	</section>
);

export default WhySkipTheLineSection;
