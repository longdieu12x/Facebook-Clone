const router = require("express").Router();
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
//create a post
router.post("/create", async (req, res) => {
	const newPost = new Post(req.body);
	try {
		const savedPost = await newPost.save();
		res.status(200).json(savedPost);
	} catch (err) {
		res.status(500).json(err);
	}
});
// update a post
router.put("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.user_id === req.body.user_id) {
			await post.updateOne({ $set: req.body });
			res.status(200).json("The post has been updated!");
		} else {
			res.status(403).json("You can update only your post!");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});
//delete a post

router.delete("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.user_id === req.body.user_id) {
			await post.deleteOne();
			res.status(200).json("The post has been deleted");
		} else {
			res.status(403).json("You can delete only your post");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});
//like / dislike a post

router.put("/:id/like", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post.likes.includes(req.body.user_id)) {
			await post.updateOne({ $push: { likes: req.body.user_id } });
			res.status(200).json("The post has been liked");
		} else {
			await post.updateOne({ $pull: { likes: req.body.user_id } });
			res.status(200).json("The post has been disliked");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});
//get a post

router.get("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.status(200).json(post);
	} catch (err) {
		res.status(500).json(err);
	}
});

//get timeline posts

router.get("/timeline/all", async (req, res) => {
	try {
		const currentUser = await User.findById(req.body.user_id);
		const userPosts = await Post.find({ user_id: currentUser._id });
		const friendPosts = await Promise.all(
			currentUser.followings.map((friend_id) => {
				return Post.find({ user_id: friend_id });
			})
		);
		res.json(userPosts.concat(...friendPosts));
	} catch (err) {
		res.status(500).json(err);
	}
});
module.exports = router;
