const Post = require("../models/Post");
const APIFeatures = require("../utils/apiFeatures");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const cloudinary = require("../utils/cloudinary");

// Create new post   =>   /api/v1/admin/post/new
exports.addPost = asyncHandler(async (req, res, next) => {
  const result = await cloudinary.uploader.upload(req.file.path, {
    folder: "post",
    resource_type: "auto",
  });
  const { title, description, categoryId } = req.body;
  const tags = req.body.tags.replace(/\s/g, "").split(",");
  const post = await Post.create({
    tags,
    description,
    title,
    categoryId,
    userId: req.user.id,
    imageUrl: result.secure_url,
    cloudinary_id: result.public_id,
  });
  console.log("first", post)

  res.status(200).json({ success: true, data: post });
});

// Get all posts   =>   /api/v1/posts?keyword=apple
exports.getPosts = asyncHandler(async (req, res, next) => {
  const resPerPage = 30;
  const postCount = await Post.countDocuments();

  const apiFeatures = new APIFeatures(
    Post.find({})
      .populate("userId", "name avatar")
      .populate("categoryId", "title")
      .sort("-createdAt "),
    req.query
  )

    .search()
    .filter();
  let posts = await apiFeatures.query;
  let filteredPostsCount = posts.length;

  apiFeatures.pagination(resPerPage);
  posts = await apiFeatures.query.clone();

  res.status(200).json({
    success: true,
    postCount,
    resPerPage,
    filteredPostsCount,
    data: posts,
  });
});

// Get single post details   =>   /api/v1/post/:id
exports.getPost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id)
    .populate("userId")
    .populate("categoryId");

  if (!post) {
    return next(new ErrorResponse("post not found", 404));
  }

  res.status(200).json({
    success: true,
    post,
  });
});

// Get  post categories   =>   /api/v1/post/:categoryId
exports.getCategories = asyncHandler(async (req, res, next) => {
  const categories = await Post.find({ categoryId: req.params.categoryId })
    .populate("userId")
    .populate("categoryId");

  if (!categories) {
    return next(new ErrorResponse("category not found", 404));
  }
  res.status(200).json({
    success: true,
    categories,
  });
});

// Get user post   =>   /api/v1/post/:userId
exports.getUserPosts = asyncHandler(async (req, res, next) => {
  const userPosts = await Post.find({ userId: req.params.userId })
    .populate("userId")
    .populate("categoryId");

  if (!userPosts) {
    return next(new ErrorResponse("userPosts not found", 404));
  }
  res.status(200).json({
    success: true,
    userPosts,
  });
});

// Get single post details   =>   /api/v1/post/:categoryId
exports.getTags = asyncHandler(async (req, res, next) => {
  const tags = await Post.find({ tags: req.params.tagsId })
    .populate("userId")
    .populate("categoryId");

  if (!tags) {
    return next(new ErrorResponse("category not found", 404));
  }
  res.status(200).json({
    success: true,
    tags,
  });
});

// Get single post details   =>   /api/v1/post/:categoryId
exports.getRelated = asyncHandler(async (req, res, next) => {
  const categories = await Post.find({ categoryId: req.params.categoryId })
    .populate("userId")
    .populate("categoryId");

  if (!categories) {
    return next(new ErrorResponse("category not found", 404));
  }
  res.status(200).json({
    success: true,
    categories,
  });
});

// Update Product   =>   /api/v1/admin/product/:id
// Update Product   =>   /api/v1/admin/product/:id
exports.updatePost = asyncHandler(async (req, res, next) => {
  let post = await Post.findById(req.params.id);
  await cloudinary.uploader.destroy(post.cloudinary_id);
  // Upload image to cloudinary
  let result;
  if (req.file) {
    result = await cloudinary.uploader.upload(req.file.path);
  }
  const data = {
    title: req.body.title,
    description: req.body.description,
    tags: req.body.tags,
    categoryId: req.body.categoryId,
    imageUrl: result.secure_url,
    cloudinary_id: result.public_id,
  };
  post = await Post.findByIdAndUpdate(req.params.id, data, { new: true });
  res.status(200).json({
    success: true,
    post,
  });
});

// Delete post   =>   /api/v1/admin/post/:id
exports.deletePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  await cloudinary.uploader.destroy(post.cloudinary_id);
  if (!post) {
    return next(new ErrorResponse("post not found", 404));
  }

  // // Deleting images associated with the post
  // for (let i = 0; i < post.imageUrl.length; i++) {
  //   const result = await cloudinary.v2.uploader.destroy(
  //     post.imageUrl[i].public_id
  //   );
  // }

  await post.remove();

  res.status(200).json({
    success: true,
    message: "post is deleted.",
  });
});
