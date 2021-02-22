import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

export default function Nav(): ReactElement {
	const Main = styled.div`
		border: 10px solid black;
	`;
	return <Main>Nav bar</Main>;
}
