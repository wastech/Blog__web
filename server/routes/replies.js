const express = require("express");
const {
  getReplies,
  createReply,
  updateReply,
  deleteReply,
  getReplyByCommentId,
} = require("../controllers/replies");

const Reply = require("../models/Reply");

const router = express.Router();

const advancedResults = require("../middleware/advancedResults");
const { protect } = require("../middleware/auth");

router
  .route("/")
  .get(advancedResults(Reply), getReplies)
  .post( createReply);

router.route("/:id").put(protect, updateReply).delete(protect, deleteReply);
router.route("/:commentId/replies").get(getReplyByCommentId);

module.exports = router;
