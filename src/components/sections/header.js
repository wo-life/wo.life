import React from 'react';
import styled from 'styled-components';
import CenterDiv from '../common/layout/CenterDiv';

const iconsWidth = '100';
const playstoreLink = 'https://play.google.com/store/apps/details?id=com.app.wolife';
const appstoreLink = 'https://play.google.com/store/apps/details?id=com.app.wolife';

const Header = () => {
	const appDownloadLinks = (image, altText, link) => {
		return (
			<a href={link} target="blank">
				<img src={image} alt={altText} width={iconsWidth} />
			</a>
		);
	};

	return (
		<HeaderWrapper id="top">
			<CenterDiv isPaddingRequired={false}>
				<HeaderTextGroup>
					<h1>
						A seamless social
						<br />
						commerce experience
					</h1>
					<BottomText>Download Now : </BottomText>
					<Flex>
						{appDownloadLinks('/playstore.png', 'playstore', playstoreLink)}
						{appDownloadLinks('/app-store.png', 'appstore', appstoreLink)}
					</Flex>
				</HeaderTextGroup>
				<ImageWrapper>
					<img src="/mainscreen.png" alt="banner" style={{ maxWidth: '80%', transform: 'rotate(-90deg)' }} />
				</ImageWrapper>
			</CenterDiv>
		</HeaderWrapper>
	);
};

export default Header;

const HeaderWrapper = styled.header`
	background-color: ${(props) => props.theme.color.background.regular};
	padding: 160px 0 80px 0;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		padding: 100px 0 40px 0;
	}
`;

const BottomText = styled.h1`
	color: ${(props) => props.theme.color.white.regular};
	letter-spacing: 1px;
	margin-top: 200px;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		margin-top: 80px;
	}
`;

const HeaderTextGroup = styled.div`
	width: 50%;
	margin: 0 2rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	h1 {
		color: ${(props) => props.theme.color.background.white};
	}
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 100%;
		margin: 0;
		align-items: center;
		h1 {
			font-size: 2.2rem;
			line-height: 2.5rem;
		}
	}
	@media (max-width: ${(props) => props.theme.screen.sm}) {
		h1 {
			font-size: 1.8rem;
			line-height: 2.2rem;
		}
	}
`;

const Flex = styled.div`
	width: 60%;
	display: flex;
	justify-content: space-around;
	align-content: center;
	grid-template-columns: 1fr 1fr;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 55%;
		padding: 0;
	}
`;

const ImageWrapper = styled.div`
	width: 50%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 100%;
		justify-self: center;
	}
`;
