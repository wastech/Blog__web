const express = require("express");
const {
  getCommentByPostId,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/comments");

const router = express.Router();

// const advancedResults = require('../middleware/advancedResults')
// const { protect } = require("../middleware/auth");

router
  .route("/")
  // .get(advancedResults(Category), getCategories)
  .post( createComment);

router.route("/:id").put( updateComment).delete( deleteComment);

router.route("/:postId/comments").get(getCommentByPostId);

module.exports = router;
