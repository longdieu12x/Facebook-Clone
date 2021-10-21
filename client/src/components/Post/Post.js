import React from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "src/dummyData";
const Post = ({ post }) => {
	const user = Users.filter((u) => u.id === post.id)[0];
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						{user && (
							<>
								<img
									className="postProfileImg"
									src={user.profilePicture}
									alt="profile-image"
								/>
								<span className="postUsername">{user.username}</span>
							</>
						)}
						<span className="postDate">{post.date}</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post?.desc}</span>
					<img src={post.photo} alt="post-img" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img className="likeIcon" src="assets/like.png" alt="" />
						<img className="likeIcon" src="assets/heart.png" alt="" />
						<span className="postLikeCounter">{post.like} people liked it</span>
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
