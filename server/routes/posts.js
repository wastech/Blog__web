const express = require("express");
const {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
  getCategories,
} = require("../controllers/posts");

const Post = require("../models/Post");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(advancedResults(Post), getPosts)
  .post(protect, authorize("admin"), addPost);

router
  .route("/:id")
  .get(getPost)
  .put(protect, authorize("admin"), updatePost)
  .delete(protect, authorize("admin"), deletePost);

  router.route("/category/:categoryId").get(getCategories);

module.exports = router;
