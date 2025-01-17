import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import Modal from "react-modal";
import googleLogo from "../assets/images/socialsignin/google.png";
import kakaoLogo from "../assets/images/socialsignin/kakao.png";
import githubLogo from "../assets/images/socialsignin/github.png";

Modal.setAppElement("#root");
interface Props {
	modalIsOpen: boolean;
	setIsOpen: (e: boolean) => void;
}

export default function SocialModal(props: Props): ReactElement {
	const { modalIsOpen, setIsOpen } = props;

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<Modal isOpen={modalIsOpen} style={ModalStyles}>
			<ModalBox>
				<Title>쏘샬 로그인으로 입장하기</Title>
				<Buttons>
					<img src={googleLogo} style={logoStyle} alt="" />
					<img src={kakaoLogo} style={logoStyle} alt="" />
					<img src={githubLogo} style={logoStyle} alt="" />
				</Buttons>
				<BackBtn>
					<button onClick={closeModal} type="button" style={btnStyle}>
						뒤로 가기
					</button>
				</BackBtn>
			</ModalBox>
		</Modal>
	);
}

const ModalBox = styled.div`
	//border: 10px solid yellow; */
	margin: auto;
	/* padding-left: 4rem; */
	width: 45rem;
	height: 15rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const Title = styled.div`
	/* border: 1px solid red; */
	font-size: 1.7rem;
	font-weight: bold;
	text-align: center;
`;
const Buttons = styled.div`
	/* border: 1px solid red; */
	display: flex;
	justify-content: center;
`;
const BackBtn = styled.div`
	/* border: 1px solid red; */
	display: flex;
	/* width: 5rem; */
	justify-content: flex-end;
	padding-right: 2rem;
`;
const ModalStyles = {
	content: {
		margin: "auto",
		width: "22rem",
		height: "18rem",
		background: "#f3f3e9",
		display: "flex",
		alignItems: "center",
	},
};
const logoStyle = {
	margin: "1rem",
	width: "4rem",
};
const btnStyle = {
	border: "1px solid black",
	width: "4.5rem",
	height: "2rem",
	fontSize: "0.9rem",
};
