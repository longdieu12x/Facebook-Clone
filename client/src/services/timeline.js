import axios from "axios";

export const getTimelineUser = async (user_id, callback) => {
	await axios
		.get(`${process.env.REACT_APP_API}/posts/timeline/${user_id}`)
		.then((res) => {
			callback(res);
		})
		.catch((err) => {
			if (err.response) {
				callback(err.response.data);
			}
		});
};
