import React, { useState, useEffect, useRef } from "react";
import "./Share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { getUserDetail } from "src/services/user";
import { uploadImageHandler } from "src/services/image";
const Share = ({ user_id, createPost }) => {
	const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
	// console.log(user.profilePicture);
	const [user, setUser] = useState([]);
	const description = useRef();
	const [file, setFile] = useState(null);
	const submitHandler = (e) => {
		e.preventDefault();
		const newPost = {
			userId: user._id,
			desc: description.current.value,
			img: file.name,
		};
		createPost(newPost);
		description.current.value = "";
	};
	const uploadImage = (e) => {
		let formData = new FormData();
		formData.append("file", e.target.files[0]);
		uploadImageHandler(formData, (res) => {
			console.log(res);
			setFile(e.target.files[0]);
		});
	};
	useEffect(() => {
		getUserDetail(user_id, (res) => {
			setUser(res);
			// console.log(res);
		});
	}, [user_id]);

	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img
						className="shareProfileImg"
						src={
							user.profilePicture
								? `${publicFolder}${user.profilePicture}`
								: `${publicFolder}person/noAvatar.png`
						}
						alt="share-profile-img"
					/>
					<input
						type="text"
						className="shareInput"
						ref={description}
						placeholder={`What's in your mind ${user.username} ?`}
					/>
				</div>
				<hr className="shareHr" />
				<form className="shareBottom" onSubmit={submitHandler}>
					<div className="shareOptions">
						<label htmlFor="file" className="shareOption">
							<PermMedia htmlColor="tomato" className="shareIcon" />
							<span className="shareOptionText">Photo or Video</span>
							<input
								style={{ display: "none" }}
								type="file"
								id="file"
								accept=".png,.jpeg,.jpg"
								onChange={(e) => {
									uploadImage(e);
								}}
							/>
						</label>
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
					<button className="shareButton" type="submit">
						Share
					</button>
				</form>
			</div>
		</div>
	);
};

export default Share;
