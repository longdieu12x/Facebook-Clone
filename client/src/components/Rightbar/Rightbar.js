import React, { useEffect, useState } from "react";
import "./Rightbar.css";
import { Users } from "src/dummyData";
import Online from "../Online/Online";
import { getUserFriends } from "src/services/user";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { Add, Remove } from "@mui/icons-material";
import { userFollowHandler } from "src/services/user";
const Rightbar = ({ profile, user }) => {
	const user_id = user ? user._id : null;
	const currentUser = useSelector((state) => state.user).data;
	const [friends, setFriends] = useState([]);
	const [followed, setFollowed] = useState(false);
	useEffect(() => {
		setFollowed(currentUser.followings.includes(user_id));
	}, [currentUser, user_id]);
	const history = useHistory();
	useEffect(() => {
		if (user_id) {
			getUserFriends(user_id, (res) => {
				setFriends(res);
			});
		}
	}, [user_id]);
	const toFriendProfile = (e) => {
		const friend_id = e.target.getAttribute("data-key");
		history.push(`/profile/${friend_id}`);
	};
	const followHandler = () => {
		console.log(followed, user_id, currentUser._id);
		userFollowHandler(followed, user_id, currentUser._id, (res) => {
			setFollowed((state) => !state);
		});
	};
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
						{currentUser._id !== user_id && (
							<button className="rightbarFollowButton" onClick={followHandler}>
								{followed ? "Unfollow" : "Follow"}
								{followed ? <Remove /> : <Add />}
							</button>
						)}
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
							{friends &&
								friends.map((item) => (
									<div className="rightbarFollowing">
										<img
											src={
												item.profilePicture
													? process.env.REACT_APP_PUBLIC_FOLDER +
													  item.profilePicture
													: process.env.REACT_APP_PUBLIC_FOLDER +
													  "person/noAvatar.png"
											}
											alt="rightbar-image"
											onClick={toFriendProfile}
											className="rightbarFollowingImg"
											key={item._id}
											data-key={item._id}
										/>
										<span className="rightbarFollowingName">
											{item.username}
										</span>
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
