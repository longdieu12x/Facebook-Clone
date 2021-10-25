import React, { useState, useEffect } from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "src/dummyData";
import { getUserDetail } from "src/services/user";
import { format } from "timeago.js";
const Post = ({ post }) => {
	// const user = Users.filter((u) => u.id === post.id)[0];
	const [user, setUser] = useState([]);
	const { userId, likes } = post;
	const [like, setLike] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(false);
	const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
	const likeHandler = () => {
		setIsLiked((state) => !state);
		setLike(isLiked ? like - 1 : like + 1);
	};
	useEffect(() => {
		getUserDetail(userId, (res) => {
			setUser(res);
		});
		setLike(likes);
	}, [userId]);
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						{user && (
							<>
								<img
									className="postProfileImg"
									src={
										user.profilePicture
											? publicFolder + user.profilePicture
											: publicFolder + "user/noAvatar.png"
									}
									alt="profile-image"
								/>
								<span className="postUsername">{user.username}</span>
							</>
						)}
						<span className="postDate">{format(post.createdAt)}</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post?.desc}</span>
					<img src={post.img ? publicFolder + post.img : ""} alt="post-img" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img
							className="likeIcon"
							src="assets/like.png"
							onClick={likeHandler}
							alt=""
						/>
						<img
							className="likeIcon"
							src="assets/heart.png"
							onClick={likeHandler}
							alt=""
						/>
						<span className="postLikeCounter">{like} people liked it</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">{post.comment} comments</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
