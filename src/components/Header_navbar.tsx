import React from "react";
import { ReactComponent as CategoryIcon } from "../assets/icons/category.svg";
import {
	NavbarContainer,
	NavbarCategories,
	CategoryTitle,
	NavbarLinks,
	NavbarLink,
	NavTitle,
} from "../pages/Home/Home_styled";

const Header_Navbar = () => {
	return (
		<NavbarContainer>
			<NavbarCategories>
				<CategoryIcon className="icon hamburger" />
				<CategoryTitle>categories</CategoryTitle>
			</NavbarCategories>
			<NavbarLinks>
				<NavbarLink href="#">
					<NavTitle>about</NavTitle>
				</NavbarLink>
				<NavbarLink href="#">
					<NavTitle>delivery</NavTitle>
				</NavbarLink>
				<NavbarLink href="#">
					<NavTitle>payment</NavTitle>
				</NavbarLink>
				<NavbarLink href="#">
					<NavTitle>contacts</NavTitle>
				</NavbarLink>
				<NavbarLink href="#">
					<NavTitle>mega menu</NavTitle>
				</NavbarLink>
				<NavbarLink href="#">
					<NavTitle>mega menu 2</NavTitle>
				</NavbarLink>
				<NavbarLink href="#">
					<NavTitle>mega menu 3</NavTitle>
				</NavbarLink>
			</NavbarLinks>
		</NavbarContainer>
	);
};

export default Header_Navbar;
