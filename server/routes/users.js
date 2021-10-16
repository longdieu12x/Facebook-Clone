const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
router.get("/", (req, res) => {
	res.send("This is user root");
});

//update user
router.put("/:id", async (req, res) => {
	if (req.body.user_id === res.params.id || req.user.isAdmin) {
		if (req.body.password) {
			try {
				const salt = await bcrypt.genSalt(10);
				req.body.password = await bcrypt.hash(req.body.password, salt);
			} catch (err) {
				return res.status(500).json(err);
			}
		}
		try {
			const user = await User.findByIdAndUpdate(req.params.id, {
				$set: req.body,
			});
			res.status(200).json("Account has been updated");
		} catch (err) {
			return res.status(500).json(err);
		}
	} else {
		return res.status(403).json("You can only update your account !");
	}
});
//delete user

// get a user

// follow a user

// unfollow a user

module.exports = router;
