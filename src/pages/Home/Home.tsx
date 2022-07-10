import React from "react";
import Header_Navbar from "../../components/Header_Navbar";
import Header_Search from "../../components/Header_Search";
import Header_Top from "../../components/Header_Top";
import "./Home.css";

const Home = () => {
	return (
		<div className="Home" style={{ width: "100vw" }}>
			<Header_Top />
			<Header_Search />
			<Header_Navbar />
		</div>
	);
};

export default Home;
