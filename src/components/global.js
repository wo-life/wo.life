import styled from 'styled-components';

export const flexCenter = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

export const Container = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
	padding: 0 16px;

	@media (min-width: ${(props) => props.theme.screen.xs}) {
		max-width: 540px;
	}

	@media (min-width: ${(props) => props.theme.screen.sm}) {
		max-width: 720px;
	}

	@media (min-width: ${(props) => props.theme.screen.md}) {
		max-width: 960px;
	}

	@media (min-width: ${(props) => props.theme.screen.lg}) {
		max-width: 1200px;
	}

	${(props) =>
		props.fluid &&
		`
    max-width: 1200px !important;
  `};
`;

export const Section = styled.section`
	padding: 140px 0 80px;
	overflow: hidden;
	background-color: ${(props) => props.theme.color.background.regular};

	@media (max-width: ${(props) => props.theme.screen.md}) {
		padding: 80px 0;
	}

	${(props) =>
		props.accent &&
		`background-color: ${props.accent === 'secondary' ? props.theme.color.white.dark : props.theme.color.primary}`};
`;
