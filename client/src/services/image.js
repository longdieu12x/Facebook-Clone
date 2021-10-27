import axios from "axios";

export const uploadImageHandler = (file, callback) => {
	axios
		.post(`${process.env.REACT_APP_API}/upload`, file)
		.then((res) => {
			callback(res.data);
		})
		.catch((res) => {
			callback(res.response.data);
		});
};
