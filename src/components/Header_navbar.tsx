import React from "react";
import { ReactComponent as CategoryIcon } from "../assets/icons/category.svg";

const Header_Navbar = () => {
	return (
		<div>
			<div>
				<CategoryIcon />
				<p>categories</p>
			</div>
			<a href="#">
				<p>about</p>
			</a>
			<a href="#">
				<p>delivery</p>
			</a>
			<a href="#">
				<p>payment</p>
			</a>
			<a href="#">
				<p>contacts</p>
			</a>
			<a href="#">
				<p>mega menu</p>
			</a>
			<a href="#">
				<p>mega menu 2</p>
			</a>
			<a href="#">
				<p>mega menu 3</p>
			</a>
		</div>
	);
};

export default Header_Navbar;
