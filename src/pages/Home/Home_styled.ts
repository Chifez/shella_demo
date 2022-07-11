import styled from "styled-components";

export const ContainerTop = styled.div`
	position: relative;
	display: flex;
	top: 0.5rem;
	justify-content: space-between;
	align-items: center;
	max-width: 100vw;
	// height: 10vh;
	// border: 2px solid black;
	font-size: 0.8rem;
	font-family: commercial, monospace;
	color: gray;
	margin: 0 5rem;
	margin-bottom: 2rem;
`;

export const TopLeft = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	// border: 1px solid black;
	// margin: 0 1rem;
`;

export const TopLeftItems = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	margin: 0 0.5rem 0 0;
	// border: 1px solid red;
	width: auto;
`;

export const TopLeftIcons = styled.svg`
	width: 21px;
	height: 21px;
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
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: auto;
`;

/****************** Header_search *******************/

export const SearchContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	// border: 1px solid black;
	margin: 1rem 5rem;
	height: auto;
	max-width: 100vw;
`;

export const SearchContainerInput = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	// border: 2px solid red;
	left: 5rem;
`;

export const SearchBar = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0.5px solid gray;
	fill: gray;
	background: black;
`;

export const LogoContainer = styled.div`
	width: 60px;
`;

export const Input = styled.input`
	padding: 0.5em 15rem 0.5rem 3rem;
	outline: none;
	border: none;
	background: #e5e5e5;
	transition: all 0.3s ease-in;

	&:hover::placeholder {
		color: black;
	}

	&:hover {
		background: white;
		color: black;
	}
`;

export const Button = styled.button`
	padding: 0.6rem 1.4rem;
	margin-left: 2rem;
	border: 1px solid black;
	background: transparent;
	transition: all 0.3s ease-in;

	&:hover {
		color: white;
		background: black;
	}
`;

export const SearchRightIcons = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const IconLink = styled.a`
	text-decoration: none;
	color: black;
`;

export const CartIcon = styled.div`
	display: inline-flex;
	justify-content: space-between;

	&:hover {
		color: gray;
		fill: gray;
	}
`;

/***********Header_Navbar **********/

export const NavbarContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	// border: 2px solid red;
	padding: 0 5rem;

	max-width: 100vw;
	background: #e5e5e5;
`;

export const NavbarCategories = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	// border: 2px solid red;
	background: black;
	color: white;
	height: 100%;
	width: 18vw;
	// padding-left: 0.3rem;
	padding: 0.4rem 0 0.4rem 0.3rem;
`;

export const CategoryTitle = styled.div`
	text-transform: uppercase;
	font-size: 0.9rem;
	// border: 1px solid blue;
`;

export const NavbarLinks = styled.div`
	position: absolute;
	display: flex;
	justify-content: space-around;
	align-items: center;
	left: 25rem;
	margin-left: 1rem;
`;

export const NavbarLink = styled.a`
	text-decoration: none;
	margin: 0 0.4rem;
	color: black;
`;

export const NavTitle = styled.p`
	text-transform: uppercase;
	font-size: 0.9rem;
`;
