import React, { useState, useEffect } from "react";
import "./Feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { getTimelineUser } from "../../services/timeline";
// import { Posts } from "src/dummyData";
const Feed = () => {
	const [posts, setPosts] = useState([]);
	// const [text, setText] = useState("");
	useEffect(() => {
		getTimelineUser("61744419a4450cd5a1ac68c8", (res) => {
			console.log(res);
		});
	}, []);
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share />
				{/* {Posts.map((item) => (
					<Post post={item} key={item.id} />
				))} */}
			</div>
		</div>
	);
};

export default Feed;
