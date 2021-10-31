import React from "react";
import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
// import profileImage from "../../assets/person/5.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userLogoutHandler } from "src/actions/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
const Topbar = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const history = useHistory();
	const logoutHandler = () => {
		dispatch(userLogoutHandler());
		window.location.reload();
	};
	const goToMessenger = () => {
		if (user) {
			history.push("/messenger");
		} else {
			history.push("/login");
		}
	};
	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<span className="logo">
					<Link to="/" className="link">
						Djan
					</Link>
				</span>
			</div>
			<div className="topbarCenter">
				<div className="searchbar">
					<Search className="searchIcon" />
					<input
						placeholder="Search for friend, post or video"
						type="text"
						className="searchInput"
					/>
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarLinks">
					<span className="topbarLink">Homepage</span>
					<span className="topbarLink" onClick={logoutHandler}>
						Logout
					</span>
				</div>
				<div className="topbarIcons">
					<div className="topbarIconItem">
						<Person />
						<span className="topbarIconBadge">1</span>
					</div>
					<div className="topbarIconItem" onClick={goToMessenger}>
						<Chat />
						<span className="topbarIconBadge">2</span>
					</div>
					<div className="topbarIconItem">
						<Notifications />
						<span className="topbarIconBadge">3</span>
					</div>
				</div>
				<Link to={"/profile/" + user.data._id}>
					<img
						src={
							user.data.profilePicture
								? process.env.REACT_APP_PUBLIC_FOLDER + user.data.profilePicture
								: process.env.REACT_APP_PUBLIC_FOLDER + "person/noAvatar.png"
						}
						alt="avatar"
						className="topbarImg"
					/>
				</Link>
			</div>
		</div>
	);
};
export default Topbar;
