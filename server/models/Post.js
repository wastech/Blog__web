const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      minlength: [3, "Must be three characters long"],
    },
    description: {
      type: String,
      default: "",
    },
    imageUrl: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    views: {
      type: Number,
      default: 0,
    },
    tags: {
      type: String,
      enum: ["draft", "private", "public"],
      default: "draft",
    },
    categoryId: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);




module.exports = mongoose.model("Post", PostSchema);
