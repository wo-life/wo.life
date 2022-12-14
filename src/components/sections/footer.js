import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Container } from '../global';

const socialIconWidth = '25';

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<FooterWrapper id="footer">
			<FooterColumnContainer>
				<FooterColumn>
					<ul>
						<li>
							<FooterLink to="/returns-and-exchange">Returns & Exchange</FooterLink>
						</li>
						<li>
							<FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
						</li>
						<li>
							<FooterLink to="/terms-and-conditions">Terms & Conditions</FooterLink>
						</li>
					</ul>
				</FooterColumn>
				<SocialLinks>
					<ul>
						<li>
							<AnchorFlex href="https://www.facebook.com/wolifeglobal" target="blank">
								<img src="/facebook.png" alt="facebook" width={socialIconWidth} />
								<SocialText>Facebook</SocialText>
							</AnchorFlex>
						</li>
						<li>
							<AnchorFlex href="https://www.instagram.com/wolifeofficial" target="blank">
								<img src="/instagram.png" alt="instagram" width={socialIconWidth} />
								<SocialText>Instagram</SocialText>
							</AnchorFlex>
						</li>
						<li>
							<AnchorFlex href="https://twitter.com/wolifeofficial" target="blank">
								<img src="/twitter.png" alt="twitter" width={socialIconWidth} />
								<SocialText>Twitter</SocialText>
							</AnchorFlex>
						</li>
						<li>
							<AnchorFlex href="https://www.linkedin.com/company/wolife" target="blank">
								<img src="/linkedin.png" alt="linkedin" width={socialIconWidth} />

								<SocialText>Linkedin</SocialText>
							</AnchorFlex>
						</li>
					</ul>
				</SocialLinks>
			</FooterColumnContainer>
			<BrandContainer>
				<Logo>wo.life</Logo>
			</BrandContainer>
			<CopyRightWrapper>
				<p>Copyright © {year}, All Right Reserved</p>
			</CopyRightWrapper>
		</FooterWrapper>
	);
};

const FooterWrapper = styled.footer`
	padding: 48px 0 0;
	color: ${(props) => props.theme.color.background.white};
	background-color: ${(props) => props.theme.color.background.regular};
`;

const Logo = styled.div`
	font-family: ${(props) => props.theme.font.extrabold};
	${(props) => props.theme.font_size.regular};
	text-decoration: none;
	letter-spacing: 1px;
	margin: 0;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 9;
	outline: 0px;
`;

const BrandContainer = styled(Container)`
	position: relative;
	padding-top: 48px;
	display: flex;
	align-items: flex-end;

	@media (max-width: ${(props) => props.theme.screen.sm}) {
	}
`;
const FooterColumnContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding-top: 48px;
	padding-bottom: 48px;

	@media (max-width: ${(props) => props.theme.screen.sm}) {
	}
`;

const FooterColumn = styled.div`
	span {
		font-size: 16px;
		font-family: ${(props) => props.theme.font.bold};
	}
	ul {
		list-style: none;
		margin: 16px 0;
		padding: 0;
		li {
			margin-bottom: 12px;
			font-family: ${(props) => props.theme.font.normal};
			font-size: 15px;
		}
	}
`;

const SocialLinks = styled.div`
	color: ${(props) => props.theme.color.background.white};
	span {
		font-size: 16px;
		padding-bottom: 10px;
		font-family: ${(props) => props.theme.font.bold};
	}
	ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: space-between;
	}
	ul li {
		list-style: none;
		margin: 0 15px;
	}
`;

const FooterLink = styled(Link)`
	text-decoration: none;
	color: ${(props) => props.theme.color.background.white};
	&:hover {
		color: ${(props) => props.theme.color.background.white};
	}
`;

const AnchorFlex = styled.a`
	color: inherit;
	text-decoration: none;
	padding-bottom: 0.3rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
`;

const SocialText = styled.p`
	text-decoration: none;
	margin: 0;
	padding: 0;
	font-size: 14px;
`;

const CopyRightWrapper = styled.div`
	margin: 0;
	padding: 20px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 1px solid ${(props) => props.theme.color.background.white};
	letter-spacing: 0.5px;
	p {
		font-size: 12px;
	}
`;

export default Footer;
