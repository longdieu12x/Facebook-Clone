import React from "react";
import "./Rightbar.css";
import { Users } from "src/dummyData";
import Online from "../Online/Online";
// import userEvent from "@testing-library/user-event";
const Rightbar = () => {
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				<div className="birthdayCOntainer">
					<img
						src="assets/gift.png"
						className="birthdayImg"
						alt="birthday-img"
					/>
					<span className="birthdayText">
						<b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
					</span>
				</div>
				<img src="assets/ad.png" className="rightbarAd" alt="" />
				<h4 className="rightbarTitle">Online friends</h4>
				<ul className="rightbarFriendList">
					{Users.map((item) => (
						<Online key={item.id} user={item} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default Rightbar;
