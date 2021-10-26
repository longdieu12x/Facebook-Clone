import React, { useState, useEffect } from "react";
import "./Feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { getTimelineUser } from "../../services/timeline";
import { getProfile } from "../../services/user";

// import { Posts } from "src/dummyData";
const Feed = ({ user_id, profile }) => {
	const [posts, setPosts] = useState([]);
	// const [text, setText] = useState("");
	useEffect(() => {
		profile
			? getProfile(user_id, (res) => {
					// console.log(res);
					setPosts(res);
			  })
			: getTimelineUser(user_id, (res) => {
					setPosts(res);
					// console.log(res);
			  });
	}, [user_id]);
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share user_id={user_id} />
				{posts && posts.map((item) => <Post post={item} key={item._id} />)}
			</div>
		</div>
	);
};

export default Feed;
