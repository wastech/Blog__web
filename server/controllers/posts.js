const Post = require("../models/Post");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const cloudinary = require("cloudinary");

// Create new product   =>   /api/v1/admin/post/new
exports.addPost = asyncHandler(async (req, res, next) => {
  const file = req.files.imageUrl;
  const result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
    folder: "post",
    resource_type: "auto",
  });
  // Add user to req,body
  // req.body.user = req.user.id;
  const post = await Post.create({
    ...req.body,
    userId: req.user.id,
    imageUrl: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });
  console.log("this is post", post);
  res.status(200).json({ data: post });
});

// Get all posts   =>   /api/v1/posts?keyword=apple
exports.getPosts = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc    Get single post
// @route   GET /api/v1/posts/:id
// exports.getPost = asyncHandler(async (req, res, next) => {
//   const post = await Post.findById(req.params.id);
//   if (!post) {
//     return next(new ErrorResponse(`No post with that id of ${req.params.id}`));
//   }
//   res.status(200).json({ sucess: true, data: post });
// });

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

// Update Product   =>   /api/v1/admin/product/:id
// Update Product   =>   /api/v1/admin/product/:id
exports.updatePost = asyncHandler(async (req, res, next) => {
  let post = await Post.findById(req.params.id);

  if (!post) {
    return next(new ErrorHandler("post not found", 404));
  }
  let imageresult = "";
  if (req.files) {
    if (!post.imageUrl) {
      imageresult = await cloudinary.v2.uploader.upload(
        req.files.imageUrl.tempFilePath,
        {
          folder: "post",
          resource_type: "auto",
        },
        (error, result) => {
          console.log(error);
        }
      );
    } else {
      await cloudinary.v2.uploader.destroy(post.imageUrl);

      imageresult = await cloudinary.v2.uploader.upload(
        req.files.imageUrl.tempFilePath,
        {
          folder: "post",
          resource_type: "auto",
        },
        (error, result) => {
          console.log(error);
        }
      );
    }
    req.body.imageUrl = {
      url: imageresult.secure_url,
      public_id: imageresult.public_id,
    };
  }
  const updated = await Post.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: req.body,
    },
    { new: true }
  );
  res.status(200).json({
    message: "Updated successfully",
  });

  res.status(200).json({
    success: true,
    post,
  });
});

// Delete post   =>   /api/v1/admin/post/:id
exports.deletePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(new ErrorResponse("post not found", 404));
  }

  // Deleting images associated with the post
  for (let i = 0; i < post.imageUrl.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      post.imageUrl[i].public_id
    );
  }

  await post.remove();

  res.status(200).json({
    success: true,
    message: "post is deleted.",
  });
});
