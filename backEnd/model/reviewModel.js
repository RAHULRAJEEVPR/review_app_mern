const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    usage: {
      type: String,
      required: true,
    },
    goals: {
      type: Array,
      items: {
        type: String,
      },
    },
    userExp: {
      type: Number,
      required: true,
    },
    suggestion: {
      type: String,
    },
    birthday: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);
const reviewModel = mongoose.model("reviews", reviewSchema);
module.exports = reviewModel;
