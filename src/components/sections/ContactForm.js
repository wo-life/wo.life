import React, { useState } from 'react';
import styled from 'styled-components';
import { Section } from '../global';

const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [message, setMessage] = useState('');

	const handleChange = (event) => {
		const { id, value } = event.target;
		if (id === 'name') {
			setName(value);
		} else if (id === 'email') {
			setEmail(value);
		} else if (id === 'mobile') {
			setMobile(value);
		} else if (id === 'message') {
			setMessage(value);
		}
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		setName('');
		setEmail('');
		setMobile('');
		setMessage('');
	};

	return (
		<Section id="contact">
			<CenterDiv>
				<PrimaryHeading>Contact Us</PrimaryHeading>
				<FormContainer onSubmit={handleFormSubmit}>
					<InputField type="text" id="name" value={name} onChange={handleChange} placeholder="Name" />
					<InputField type="email" id="email" value={email} onChange={handleChange} placeholder="Email" />
					<InputField type="text" id="mobile" value={mobile} onChange={handleChange} placeholder="Mobile" />
					<TextArea value={message} id="message" onChange={handleChange} placeholder="Message" />
					<Button type="submit">Send</Button>
				</FormContainer>
			</CenterDiv>
		</Section>
	);
};

const CenterDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: ${(props) => props.theme.color.background.white};
	background-color: ${(props) => props.theme.color.background.regular};
`;

const PrimaryHeading = styled.h3`
	font-size: 3rem;
	font-weight: 600;
`;

const FormContainer = styled.div`
	width: 70%;
	margin: 0 auto;
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.1rem;
`;

const InputField = styled.input`
	width: 60%;
	display: block;
	height: 1rem;
	margin: 2rem 0;
	padding: 1rem 0 2rem 0;
	font-size: 1.5rem;
	font-weight: 600;
	outline: none;
	letter-spacing: 0.1rem;
	border: 0;
	border-bottom: 2px solid lightgrey;
	background-color: transparent;
	color: ${(props) => props.theme.color.background.white};
`;

const TextArea = styled.textarea`
	width: 60%;
	height: 5rem;
	margin: 1rem 0;
	padding: 1rem 0;
	font-size: 1.5rem;
	font-weight: 600;
	display: block;
	outline: none;
	border: 0;
	border-bottom: 2px solid lightgrey;
	background-color: transparent;
	letter-spacing: 0.1rem;
	color: ${(props) => props.theme.color.background.white};
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 2rem;
	padding: 2rem;
	margin: 2rem;
	color: #fff;
	font-size: 1.5rem;
	font-weight: 600;
	text-align: center;
	letter-spacing: 0.2rem;
	background-color: #3498db;
	border: 2px solid #3498db;
	border-radius: 0.5rem;
	cursor: pointer;
	text-decoration: none;
	box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
	transition: all 150ms ease-in-out;
	&:hover {
		box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
	}
`;

export default ContactForm;
