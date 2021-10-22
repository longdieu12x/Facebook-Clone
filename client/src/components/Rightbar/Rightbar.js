import React from "react";
import "./Rightbar.css";
import { Users } from "src/dummyData";
import Online from "../Online/Online";
// import userEvent from "@testing-library/user-event";
const Rightbar = ({ profile }) => {
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				{!profile ? (
					<>
						<div className="birthdayCOntainer">
							<img
								src="assets/gift.png"
								className="birthdayImg"
								alt="birthday-img"
							/>
							<span className="birthdayText">
								<b>Pola Foster</b> and <b>3 other friends</b> have a birthday
								today
							</span>
						</div>
						<img src="assets/ad.png" className="rightbarAd" alt="" />
						<h4 className="rightbarTitle">Online friends</h4>
						<ul className="rightbarFriendList">
							{Users.map((item) => (
								<Online key={item.id} user={item} />
							))}
						</ul>
					</>
				) : (
					<>
						<h4 className="rightbarTitle">User information</h4>
						<div className="rightbarInfo">
							<div className="rightbarInfoItem">
								<div className="rightbarInfoKey">City:</div>
								<div className="rightbarInfoValue">Ninh Binh</div>
							</div>
							<div className="rightbarInfoItem">
								<div className="rightbarInfoKey">From:</div>
								<div className="rightbarInfoValue">Ninh Binh</div>
							</div>
							<div className="rightbarInfoItem">
								<div className="rightbarInfoKey">Relationship:</div>
								<div className="rightbarInfoValue">Single</div>
							</div>
						</div>
						<h4 className="rightbarTitle">User friends</h4>
						<div className="rightbarFollowings">
							{[1, 2, 3, 4, 5].map((item) => (
								<div className="rightbarFollowing">
									<img
										src="assets/person/1.jpg"
										alt="rightbar-image"
										className="rightbarFollowingImg"
									/>
									<span className="rightbarFollowingName">Tran Phuc Thanh</span>
								</div>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Rightbar;
