import React from "react";
import Header_Navbar from "../../components/Header_Navbar";
import Header_Search from "../../components/Header_Search";
import Header_Top from "../../components/Header_Top";

const Home = () => {
	return (
		<div className="Home">
			<Header_Top />
			<Header_Search />
		</div>
	);
};

export default Home;
