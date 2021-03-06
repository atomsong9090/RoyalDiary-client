import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import User from "../components/userCollection";

export default function UserInfo(): ReactElement {
	return (
		<Main>
			<User />
		</Main>
	);
}
const Main = styled.div`
	background: #f3f3e9;
	display: flex;
	flex-direction: row;
	width: 50%;
	height: 100%;
	box-sizing: border-box;
	@media only screen and (max-width: 1200px) {
		width: 80%;
		height: 100%;
	}
`;
