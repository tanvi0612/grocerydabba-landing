import React from 'react';
import styled from 'styled-components';
import { SectionHeading } from '../../../components/sharedComponents';
import ScrollAnimation from 'react-animate-on-scroll';

// images
import applyImage from '../../../assets/images/apply-hiw.svg';
import shortlistImage from '../../../assets/images/shortlist-hiw.svg';
import callImage from '../../../assets/images/call-hiw.svg';
import hireImage from '../../../assets/images/hire-hiw.svg';

const howItWorksCards = [
	{
		title: 'Message Us.',
		subtitle:
			"Let's get in touch. We are a small local business that strives to provide best customer service. We are all ears for all your grocery needs! "
	},
	{
		title: 'Place Your Order.',
		subtitle:
			'Ran out of Daal? Needs some Turmeric? We are here to help! Just place your order. We search for best deals across all local Indian grocery vendors, without compromising on quality.'
	},
	{
		title: 'Groceries delivered. Get Cooking!',
		subtitle:
			"At a minimal cost of delivery, let us save you time, money and energy. We have delivered! Now it's your turn to get cooking :)"
	}
	// {
	// 	title: 'Get Featured and Get Hired',
	// 	subtitle:
	// 		'The moment you are featured, you will be flooded with offers. On average, a single developer receives 5+ offers within 7 days.'
	// }
];

const WorkCard = styled.div`
	border-radius: 0.5rem;
	text-align: center;
	padding: 2rem;
	direction: ltr;
`;

const WorkCardTitle = styled.h3`font-weight: bold;`;

const WorkCardDesc = styled.div`direction: ltr;`;

const WordCardGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1rem;
	align-items: center;
	direction: ${({ reverse }) => (reverse ? 'rtl' : 'ltr')};
	margin: 4rem 0;

	@media (max-width: 550px) {
		grid-template-columns: 1fr;
		direction: ltr;
	}
`;

const WorkImage = styled.img`
	max-height: 300px;
	object-fit: contain;
	object-position: center;
`;

const HowItWorksSection = (props) => {
	return (
		<section className="how-it-works">
			<div className="container">
				<ScrollAnimation animateIn="fadeIn">
					<SectionHeading className={'active'}>How it works?</SectionHeading>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn">
					<WordCardGrid>
						{/* <WordCardPosition x={1} y={1}> */}
						<WorkImage src={applyImage} alt="" />
						<WorkCard>
							<WorkCardTitle>{howItWorksCards[0].title}</WorkCardTitle>
							<WorkCardDesc>{howItWorksCards[0].subtitle}</WorkCardDesc>
						</WorkCard>
					</WordCardGrid>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn">
					<WordCardGrid reverse>
						<WorkImage src={shortlistImage} alt="" />
						<WorkCard>
							<WorkCardTitle>{howItWorksCards[1].title}</WorkCardTitle>
							<WorkCardDesc>{howItWorksCards[1].subtitle}</WorkCardDesc>
						</WorkCard>
					</WordCardGrid>
				</ScrollAnimation>

				<ScrollAnimation animateIn="fadeIn">
					<WordCardGrid>
						<WorkImage src={callImage} alt="" />
						<WorkCard>
							<WorkCardTitle>{howItWorksCards[2].title}</WorkCardTitle>
							<WorkCardDesc>{howItWorksCards[2].subtitle}</WorkCardDesc>
						</WorkCard>
					</WordCardGrid>
				</ScrollAnimation>

				{/* <ScrollAnimation animateIn="fadeIn">
					<WordCardGrid reverse>
						<WorkImage src={hireImage} alt="" />
						<WorkCard>
							<WorkCardTitle>{howItWorksCards[3].title}</WorkCardTitle>
							<WorkCardDesc>{howItWorksCards[3].subtitle}</WorkCardDesc>
						</WorkCard>
					</WordCardGrid>
				</ScrollAnimation> */}
			</div>
		</section>
	);
};

export default HowItWorksSection;
