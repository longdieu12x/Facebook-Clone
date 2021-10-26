import React, { useEffect, useState } from "react";
import "./Profile.css";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import { useLocation } from "react-router";
import { getUserDetail } from "src/services/user";

const Profile = () => {
	const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
	const location = useLocation();
	// const history = useHistory();
	const currentUserId = location.pathname.split("/")[2];
	const [user, setUser] = useState([]);
	useEffect(() => {
		getUserDetail(currentUserId, (res) => {
			setUser(res);
			// console.log(res);
		});
	}, [currentUserId]);
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
								src={
									user.coverPicture
										? `${publicFolder}${user.coverPicture}`
										: `${publicFolder}person/noCover.png`
								}
								alt="cover-profile-image"
							/>
							<img
								className="profileUserImg"
								src={
									user.profilePicture
										? `${publicFolder}${user.profilePicture}`
										: `${publicFolder}person/noAvatar.png`
								}
								alt="profile-image"
							/>
						</div>
					</div>
					<div className="profileInfo">
						<h4 className="profileInfoName">Pham Minh Dang</h4>
						<h4 className="profileInfoDesc">Make change everyday</h4>
					</div>
					<div className="profileRightBottom">
						<Feed user_id={currentUserId} profile></Feed>
						<Rightbar profile></Rightbar>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
