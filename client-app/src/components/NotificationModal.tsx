import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Modal from "react-modal";

Modal.setAppElement("#root");
interface Props {
	modalIsOpen: boolean;
	setIsOpen: any;
	message: string;
}

export default function NotificationModal(props: Props): ReactElement {
	const history = useHistory();
	const { modalIsOpen, setIsOpen, message } = props;

	function closeModal() {
		if (message === "모든 입력사항은 필수 입니다.") {
			setIsOpen(false);
		} else if (message === "회원가입 되었습니다") {
			setIsOpen(false);
			history.push("/");
		} else if (message === "그림일기가 등록되었습니다") {
			setIsOpen(false);
			history.push("/diaryview");
		}
	}

	return (
		<Modal isOpen={modalIsOpen} style={ModalStyles}>
			<ModalBox>
				<Title>{message}</Title>
				<BackBtn>
					<button onClick={closeModal} type="button" style={btnStyle}>
						확인
					</button>
				</BackBtn>
			</ModalBox>
		</Modal>
	);
}
const ModalBox = styled.div`
	border: 10px solid yellow;
	margin: auto;
	/* padding-left: 4rem; */
	width: 30rem;
	height: 15rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	z-index: 1;
`;
const Title = styled.div`
	/* border: 1px solid red; */
	font-size: 1.5rem;
	font-weight: bold;
	text-align: center;
`;
const BackBtn = styled.div`
	/* border: 1px solid red; */
	display: flex;
	justify-content: flex-end;
	padding-right: 3rem;
`;
const ModalStyles = {
	content: {
		margin: "auto",
		// marginTop: "10rem",
		// marginLeft: "10rem",
		width: "22rem",
		height: "18rem",
		background: "#f3f3e9",
		display: "flex",
		alignItems: "center",
	},
};
const btnStyle = {
	border: "1px solid black",
	width: "5rem",
	height: "3rem",
	fontSize: "1rem",
};
