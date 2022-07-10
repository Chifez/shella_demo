import React from "react";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as WishList } from "../assets/icons/wishlist.svg";
import { ReactComponent as Compare } from "../assets/icons/compare.svg";
import { ReactComponent as Cart } from "../assets/icons/bag.svg";
import {
	SearchContainer,
	SearchContainerInput,
	Input,
	Button,
	SearchRightIcons,
	SearchBar,
	LogoContainer,
	CartIcon,
	IconLink,
} from "../pages/Home/Home_styled";

const Header_Search = () => {
	return (
		<SearchContainer>
			<LogoContainer>
				<Logo className="icon logo" />
			</LogoContainer>
			<SearchContainerInput>
				<SearchBar>
					<Input type="text" placeholder="Search products...." />
					<Search className="icon search" />
				</SearchBar>
				<Button>SEARCH</Button>
			</SearchContainerInput>
			<SearchRightIcons>
				<IconLink href="#">
					<WishList className="icon wish" />
				</IconLink>
				<IconLink href="#">
					<Compare className="icon compare" />
				</IconLink>
				<IconLink href="#">
					<CartIcon>
						<Cart className="icon cart" />
						Bag(0)
					</CartIcon>
				</IconLink>
			</SearchRightIcons>
		</SearchContainer>
	);
};

export default Header_Search;
