import axios from "axios";

export const likePostHandler = (post_id, user_id, callback) => {
	axios
		.put(`${process.env.REACT_APP_API}/posts/${post_id}/like`, {
			userId: user_id,
		})
		.then((res) => {
			callback(res.data);
		})
		.catch((err) => {
			if (err.response) {
				callback(err.response.data);
			}
		});
};
