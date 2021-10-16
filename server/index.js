const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();
const port = process.env.PORT || 8080;
mongoose.connect(
	process.env.MONGO_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("Connected to mongo");
	}
);
// middleware
app.use(express.json()); // Make post request thi duoc parse ra json
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
	console.log("Backend is running");
});
