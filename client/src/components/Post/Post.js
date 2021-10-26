import React, { useState, useEffect } from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "src/dummyData";
import { getUserDetail } from "src/services/user";
import { format } from "timeago.js";
import { likePostHandler } from "src/services/post";
const Post = ({ post }) => {
	// const user = Users.filter((u) => u.id === post.id)[0];
	const [user, setUser] = useState([]);
	const { userId, likes: likeArr, _id: post_id } = post;
	const [like, setLike] = useState(0);
	// const [isLiked, setIsLiked] = useState(false);
	const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
	const likeHandler = () => {
		likePostHandler(post_id, userId, (res) => {
			console.log(res);
			if (res == "The post has been liked") {
				// console.log("true");
				setLike(like + 1);
			} else {
				setLike(like - 1);
			}
		});
	};
	useEffect(() => {
		getUserDetail(userId, (res) => {
			setUser(res);
		});
		setLike(likeArr.length);
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
											: publicFolder + "person/noAvatar.png"
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
