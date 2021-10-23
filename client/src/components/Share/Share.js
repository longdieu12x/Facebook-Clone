import React from "react";
import "./Share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
const Share = () => {
	const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img
						className="shareProfileImg"
						src={`${publicFolder}person/1.jpg`}
						alt="share-profile-img"
					/>
					<input
						type="text"
						className="shareInput"
						placeholder="What's in your mind Safak ?"
					/>
				</div>
				<hr className="shareHr" />
				<div className="shareBottom">
					<div className="shareOptions">
						<div className="shareOption">
							<PermMedia htmlColor="tomato" className="shareIcon" />
							<span className="shareOptionText">Photo or Video</span>
						</div>
						<div className="shareOption">
							<Label htmlColor="blue" className="shareIcon" />
							<span className="shareOptionText">Tag</span>
						</div>
						<div className="shareOption">
							<Room htmlColor="green" className="shareIcon" />
							<span className="shareOptionText">Location</span>
						</div>
						<div className="shareOption">
							<EmojiEmotions htmlColor="gold" className="shareIcon" />
							<span className="shareOptionText">Feelings</span>
						</div>
					</div>
					<button className="shareButton">Share</button>
				</div>
			</div>
		</div>
	);
};

export default Share;
