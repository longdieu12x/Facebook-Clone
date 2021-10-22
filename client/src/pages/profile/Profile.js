import React from "react";
import "./Profile.css";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
const Profile = () => {
	return (
		<>
			<Topbar />
			<div className="profile">
				<Sidebar></Sidebar>
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								className="profileCoverImg"
								src="assets/post/3.jpg"
								alt="cover-profile-image"
							/>
							<img
								className="profileUserImg"
								src="assets/person/7.jpg"
								alt="profile-image"
							/>
						</div>
					</div>
					<div className="profileInfo">
						<h4 className="profileInfoName">Pham Minh Dang</h4>
						<h4 className="profileInfoDesc">Make change everyday</h4>
					</div>
					<div className="profileRightBottom">
						<Feed></Feed>
						<Rightbar profile></Rightbar>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
