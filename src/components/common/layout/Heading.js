import React from 'react';
import styled from 'styled-components';
import { HorizontalRow } from './Text';

const Heading = (props) => {
	const { heading } = props;
	return (
		<Header>
			<HorizontalRow />
			<PrimaryHeading>{heading}</PrimaryHeading>
			<HorizontalRow />
		</Header>
	);
};

const Header = styled.div`
	width: 70%;
	margin: 0 auto;
	padding: 0;
	display: flex;
	gap: 4rem;
	align-items: center;
	color: ${(props) => props.theme.color.background.white};
`;

const PrimaryHeading = styled.h3`
	font-weight: 600;
	font-size: 2rem;
`;

export default Heading;
