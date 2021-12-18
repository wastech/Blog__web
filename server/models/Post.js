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

    imageUrl: {
      type: String,
      match: [/^(ftp|http|https):\/\/[^ "]+$/, "Invalid url"],
      default: [
        "https://res.cloudinary.com/agustems/image/upload/v1598881434/roomer/no-image_klm" +
          "dah.png",
      ],
    },
    cloudinary_id: {
      type: String,
    },
    // imageUrl: [
    //   {
    //     public_id: {
    //       type: String,
    //       required: true,
    //     },
    //     url: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
    views: {
      type: Number,
      default: 0,
    },

    tags: [String],
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
