import React from 'react';
import { TextWrapper, ParagraphWrapper } from '../common/layout/TextWrapper';
import { HeadingText, Paragraph } from '../common/layout/Text';
import CenterDiv from '../common/layout/CenterDiv';
import Image from '../common/image';

const Shop = () => {
	return (
		<CenterDiv isPaddingRequired={true}>
			<Image src="/phone-shop.webp" fallbackSrc="/phone-shop.png" altText="shop" style={{ maxWidth: '90%' }} />
			<TextWrapper>
				<HeadingText heading1="Shop from your favourite" heading2="brands" />
				<ParagraphWrapper>
					<div>
						<Paragraph text="Easy to purchase directly from a" />
						<Paragraph text="users post or our marketplace." />
					</div>
					<div>
						<Paragraph text="Shop from a catalog of verified" />
						<Paragraph text="direct to consumer brands" />
					</div>
				</ParagraphWrapper>
			</TextWrapper>
		</CenterDiv>
	);
};

export default Shop;
