const express = require("express");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
  getCategories,
  getTags,
  getRelated,
  getUserPosts,
} = require("../controllers/posts");

const Post = require("../models/Post");

const router = express.Router({ mergeParams: true });

// const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get( getPosts)
  .post(upload.single("imageUrl"), protect, authorize("admin"), addPost);

router
  .route("/:id")
  .get(getPost)
  .put(upload.single("imageUrl"), protect, authorize("admin"), updatePost)
  .delete(protect, authorize("admin"), deletePost);

router.route("/category/:categoryId").get(getCategories);
router.route("/related/:categoryId").get(getRelated);
router.route("/userpost/:userId").get(getUserPosts);
router.route("/tags/:tagsId").get(getTags);

module.exports = router;
