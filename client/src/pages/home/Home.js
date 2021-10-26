import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./Home.css";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
// import { useHistory } from "react-router";

const Home = () => {
	const user = useSelector((state) => state.user);
	if (Object.keys(user).length === 0 || Object.keys(user.data).length === 0) {
		return <Redirect to="/login" />;
	}
	return (
		<div className="home">
			<Topbar />
			<div className="homeContainer">
				<Sidebar></Sidebar>
				{user && <Feed user_id={user.data._id}></Feed>}
				<Rightbar></Rightbar>
			</div>
		</div>
	);
};
export default Home;
