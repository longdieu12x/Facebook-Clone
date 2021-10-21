import React from "react";
import "./Feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { Posts } from "src/dummyData";
const Feed = () => {
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share />
				{Posts.map((item) => (
					<Post post={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default Feed;
