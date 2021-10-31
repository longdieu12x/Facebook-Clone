const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const router = express.Router();
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const path = require("path");
const cors = require("cors");
dotenv.config();
const corsOptions = {
	origin: "*",
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};
mongoose.connect(
	process.env.MONGO_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("Connected to MongoDB");
	}
);
app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors(corsOptions));
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/images");
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	},
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
	try {
		return res.status(200).json("File uploded successfully");
	} catch (error) {
		console.error(error);
	}
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
server.listen(process.env.PORT, () => {
	console.log("Backend server is running!");
});
// const io = require("socket.io")(server, {
// 	cors: {
// 		origin: "*",
// 		methods: ["GET", "POST"],
// 		credentials: true,
// 	},
// });
// let users = [];

// const addUser = (userId, socketId) => {
// 	!users.some((user) => user.userId === userId) &&
// 		users.push({ userId, socketId });
// };

// const removeUser = (socketId) => {
// 	users = users.filter((user) => user.socketId !== socketId);
// };

// const getUser = (userId) => {
// 	return users.find((user) => user.userId === userId);
// };

// io.on("connection", (socket) => {
// 	//when ceonnect
// 	console.log("a user connected.");

// 	//take userId and socketId from user
// 	socket.on("addUser", (userId) => {
// 		addUser(userId, socket.id);
// 		io.emit("getUsers", users);
// 	});

// 	//send and get message
// 	socket.on("sendMessage", ({ senderId, receiverId, text }) => {
// 		io.to(users.find((user) => user.userId === receiverId).socketId).emit(
// 			"getMessage",
// 			{
// 				senderId,
// 				text,
// 			}
// 		);
// 	});

// 	//when disconnect
// 	socket.on("disconnect", () => {
// 		console.log("a user disconnected!");
// 		removeUser(socket.id);
// 		io.emit("getUsers", users);
// 	});
// });
