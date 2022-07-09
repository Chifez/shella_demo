import styled from "styled-components";

export const ContainerTop = styled.div`
	position: relative;
	display: flex;
	top: 0.5rem;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	// height: 10vh;
	// border: 2px solid black;
	font-size: 0.8rem;
	font-family: commercial, monospace;
	color: gray;
	padding: 0 5rem;
	margin-bottom: 2rem;
`;

export const TopLeft = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	// border: 1px solid black;
	margin: 0 1rem;
`;

export const TopLeftItems = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	margin: 0 0.5rem;
	// border: 1px solid red;
	width: auto;
`;

export const TopLeftIcons = styled.svg`
	width: 22px;
	height: 22px;
	margin: 0 5px;
`;

export const TopRightItems = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	// border: 2px solid blue;
`;

export const SignIn = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.5rem;
	border-right: 0.5px solid lightgray;
`;

export const TopRight = styled.div`
	margin: 0 1rem;
`;

export const DropDown = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
