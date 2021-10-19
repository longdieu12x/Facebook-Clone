import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./Home.css";
const Home = () => {
	return (
		<div className="home">
			<Topbar />
			<div className="homeContainer">
				<Sidebar></Sidebar>
				<Feed></Feed>
				<Rightbar></Rightbar>
			</div>
		</div>
	);
};
export default Home;
