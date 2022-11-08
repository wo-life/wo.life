import React from 'react';
import styled from 'styled-components';
import CenterDiv from '../common/layout/CenterDiv';
import ImgWithFallBack from '../common/ImgWithFallBack';

const iconsWidth = '100%';
const playstoreLink = 'https://play.google.com/store/apps/details?id=com.app.wolife';
const appstoreLink = 'https://play.google.com/store/apps/details?id=com.app.wolife';

const Header = () => {
	const appDownloadLinks = (src, fallbackSrc, alt, link) => {
		return (
			<a href={link} target="blank">
				<ImgWithFallBack src={src} fallbackSrc={fallbackSrc} altText={alt} style={{ width: iconsWidth }} />
			</a>
		);
	};

	return (
		<HeaderWrapper id="top">
			<CenterDiv isPaddingRequired={true}>
				<HeaderTextGroup>
					<h1>
						A seamless social
						<br />
						commerce experience
					</h1>
					<BottomText>Download Now: </BottomText>
					<Flex>
						{appDownloadLinks('google-play-badge.webp', '/google-play-badge.png', 'playstore', playstoreLink)}
						{appDownloadLinks('app-store-badge.webp', '/app-store-badge.png', 'appstore', appstoreLink)}
					</Flex>
				</HeaderTextGroup>
				<ImageWrapper>
					<ImgWithFallBack
						src="/shopping.webp"
						fallbackSrc="/shopping.png"
						altText="shopping"
						style={{ maxWidth: '90%' }}
					/>
				</ImageWrapper>
			</CenterDiv>
		</HeaderWrapper>
	);
};

export default Header;

const HeaderWrapper = styled.header`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	background-color: ${(props) => props.theme.color.background.regular};
	padding: 160px 0 80px 120px;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		padding: 100px 0 40px 0;
	}
`;

const BottomText = styled.h2`
	color: ${(props) => props.theme.color.white.regular};
	letter-spacing: 1px;
	margin-top: 200px;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		margin-top: 80px;
	}
`;

const HeaderTextGroup = styled.div`
	width: 50%;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	h1 {
		color: ${(props) => props.theme.color.background.white};
	}
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 100%;
		margin: 0;
		align-items: flex-start;
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
	width: 50%;
	display: flex;
	justify-content: flex-start;
	align-content: flex-start;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 100%;
		padding: 0;
	}
`;

const ImageWrapper = styled.div`
	width: 50%;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	align-items: flex-end;
	@media (max-width: ${(props) => props.theme.screen.md}) {
		width: 100%;
		justify-self: center;
	}
`;
