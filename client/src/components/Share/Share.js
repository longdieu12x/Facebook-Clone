import React from "react";
import "./Share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
const Share = () => {
	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img
						className="shareProfileImg"
						src="assets/person/1.jpg"
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
							<PermMedia className="shareIcon" />
							<span className="shareOptionText">Photo or Video</span>
						</div>
						<div className="shareOption">
							<Label className="shareIcon" />
							<span className="shareOptionText">Photo or Video</span>
						</div>
						<div className="shareOption">
							<Room className="shareIcon" />
							<span className="shareOptionText">Photo or Video</span>
						</div>
						<div className="shareOption">
							<EmojiEmotions className="shareIcon" />
							<span className="shareOptionText">Photo or Video</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Share;
