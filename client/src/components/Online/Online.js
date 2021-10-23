import React from "react";
import "./Online.css";

const Online = ({ user }) => {
	const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<li className="rightbarFriend">
			<div className="rightbarProfileImgContainer">
				<img
					src={publicFolder + user.profilePicture}
					className="rightbarProfileImg"
					alt="profile-img"
				/>
				<span className="rightbarOnline"></span>
			</div>
			<span className="rightbarUsername">{user.username}</span>
		</li>
	);
};
export default Online;
