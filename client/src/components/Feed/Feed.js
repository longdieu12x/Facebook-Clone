import React, { useState, useEffect } from "react";
import "./Feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { getTimelineUser } from "../../services/timeline";
import { getProfile } from "../../services/user";
import { createPostHandler } from "src/services/post";

// import { Posts } from "src/dummyData";

const Feed = ({ user_id, profile }) => {
	const [posts, setPosts] = useState([]);
	const createPost = (values) => {
		createPostHandler(values, (res) => {
			setPosts((state) => [res, ...state]);
		});
	};
	useEffect(() => {
		profile
			? getProfile(user_id, (res) => {
					setPosts(
						res.sort((p1, p2) => {
							return new Date(p2.createdAt) - new Date(p1.createdAt);
						})
					);
			  })
			: getTimelineUser(user_id, (res) => {
					setPosts(
						res.sort((p1, p2) => {
							return new Date(p2.createdAt) - new Date(p1.createdAt);
						})
					);
			  });
	}, [user_id]);
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share user_id={user_id} createPost={createPost} />
				{posts && posts.map((item) => <Post post={item} key={item._id} />)}
			</div>
		</div>
	);
};

export default Feed;
