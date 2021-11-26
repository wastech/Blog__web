const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    text: {
      type: String,
      minlength: [3, "Must be three characters long"],
      required: [true, "Text is required"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    url: {
      type: String,
      required: [true, "Please add an url"],
      // unique: true,
      match: [
        /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/,
        "Please add a valid URL",
      ],
    },
    postId: {
      type: mongoose.Schema.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true }
);

CommentSchema.virtual("replies", {
  ref: "Reply",
  localField: "_id",
  foreignField: "commentId",
  justOne: false,

  options: { sort: { createdAt: -1 } },
});

module.exports = mongoose.model("Comment", CommentSchema);
