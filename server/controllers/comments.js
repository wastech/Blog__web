const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Comment = require("../models/Comment");
const Post = require("../models/Post");

// @desc    Get comments
// @route   GET /api/v1/comments
// @access  Private
exports.getComments = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc    Get comments by video id
// @route   GET /api/v1/comments/:videoId/videos
// @access  Public
exports.getCommentByPostId = asyncHandler(async (req, res, next) => {
  const comments = await Comment.find({ postId: req.params.postId })
    .populate("replies")
    .sort("-createdAt");

  if (!comments) {
    return next(
      new ErrorResponse(`No comment with that Post id of ${req.params.postId}`)
    );
  }

  res.status(200).json({ sucess: true, data: comments });
});

// @desc    Create comment
// @route   POST /api/v1/comments/
// @access  Private
exports.createComment = asyncHandler(async (req, res, next) => {
  console.log(req.body.postId);
  let post = await Post.findOne({
    _id: req.body.postId,
    status: "public",
  });

  if (!post) {
    return next(
      new ErrorResponse(`No post with id of ${req.body.postId}`, 404)
    );
  }
  const comment = await Comment.create(req.body);

  return res.status(200).json({ sucess: true, data: comment });
});

// @desc    Update comment
// @route   PUT /api/v1/comments/:id
// @access  Private
exports.updateComment = asyncHandler(async (req, res, next) => {
  let comment = await Comment.findById(req.params.id).populate("postId");

  if (!comment) {
    return next(
      new ErrorResponse(`No comment with id of ${req.params.id}`, 404)
    );
  }

  if (
    comment.userId.toString() == req.user._id.toString() ||
    comment.postId.userId.toString() == req.user._id.toString()
  ) {
    comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, data: comment });
  } else {
    return next(
      new ErrorResponse(`You are not authorized to update this comment`, 400)
    );
  }
});

// @desc    Delete comment
// @route   DELETE /api/v1/comments/:id
// @access  Private
exports.deleteComment = asyncHandler(async (req, res, next) => {
  let comment = await Comment.findById(req.params.id).populate("postId");

  if (!comment) {
    return next(
      new ErrorResponse(`No comment with id of ${req.params.id}`, 404)
    );
  }

  if (
    comment.userId.toString() == req.user._id.toString() ||
    comment.postId.userId.toString() == req.user._id.toString()
  ) {
    await comment.remove();
  } else {
    return next(
      new ErrorResponse(`You are not authorized to delete this comment`, 400)
    );
  }

  return res.status(200).json({ success: true, comment });
});
