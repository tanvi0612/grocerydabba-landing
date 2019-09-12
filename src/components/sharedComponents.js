import styled from 'styled-components';

export const Button = styled.button`
	min-width: ${({ fit }) => (fit ? '100%' : '10rem')};
	text-align: center;
	user-select: none;
	border-radius: 0.2rem;
	padding: 0.3rem;
  // background: ${({ theme, primary }) => primary && theme.accentPrimary};
  background: #ff6347;
	color: ${({ theme, primary }) => (primary ? '#FFF' : theme.accentPrimary)};
	text-decoration: none;
	border: none;
	transition: all 0.3s ease-in-out;
	line-height: inherit;
	text-transform: uppercase;

	cursor: pointer;
	position: relative;

	&:hover,
	&:focus {
		color: ${({ theme, primary }) => (primary ? '#FFF' : theme.accentLight)};
    //background: ${({ theme, primary }) => primary && theme.accentLight};
    background: #ff6347;
	}
`;

export const SectionHeading = styled.h1`
	position: relative;
	text-align: center;

	&:after {
		content: "";
		position: absolute;
		bottom: -0.5rem;
		height: 4px;
		left: calc(50%);
    //background: ${(props) => props.theme.accentPrimary};
    background: #ff6347;
		width: 0;
		transition: all 0.3s ease-in-out;
		transform: translateX(-50%);
	}

	&.active {
		&:after {
			width: 6rem;
		}
	}
`;

export const Page = styled.div`
	padding: 2rem 0;
	min-height: 100vh;
`;
