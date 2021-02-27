import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import Diaryinfo from "../components/diaryInfo";
import CPaint from "../components/paint";

export default function Paint(): ReactElement {
	const Main = styled.div`
		background: #f6f6ee;
		border-right: 5px solid black;
		box-sizing: border-box;
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		@media only screen and (max-width: 1200px) {
			width: 80%;
			height: 100%;
			border-right: none;
			border-bottom: 5px solid black;
		}
		@media only screen and (max-width: 480px) {
			/* margin-left: 1rem; */
			height: 70%;
		}
	`;
	const Paintbox = styled.div`
		border: 5px solid black;
		border-radius: 2rem;
		margin: 3rem 2rem 3rem 2rem;
		height: 90%;
		display: flex;
		flex-direction: column;
		@media only screen and (max-width: 480px) {
			/* margin-left: 1rem; */
			margin: 2rem 1rem 2rem 1rem;
		}
	`;
	const Title = styled.div`
		// border: 3px solid black;
		margin-top: 0.5rem;
		padding-left: 1rem;
		font-size: 1.2rem;
		font-weight: bold;
		letter-spacing: 0.2rem;
	`;
	const Buttons = styled.div`
		// border: 5px solid black;
		margin-bottom: 2rem;
		padding-right: 1rem;
		flex-grow: 0.2;
		display: flex;
		flex-direction: row;
		// align-items: right;
		justify-content: flex-end;
	`;
	const Button = styled.button`
		// border: 1px solid black;
		background: #f6f6ee;
		margin-right: 1rem;
		font-size: 1rem;
		font-weight: bold;
		height: 80%;
	`;

	return (
		<Main>
			<Paintbox>
				<Diaryinfo />
				<Title>😍(유저)의 행복한 하루😍</Title>
				<CPaint />
				<Buttons>
					<Button>새종이</Button>
					<Button>다그렸다버튼</Button>
				</Buttons>
			</Paintbox>
		</Main>
	);
}
