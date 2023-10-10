const reviewModel = require("../model/reviewModel");

const addReview = async (req, res) => {
  try {
    console.log(req.body);
    const { usage, goals, rating, suggestion, birthday } = req.body;
    const goal = goals.map((i) => {
      return i.value;
    });
    const newReview = new reviewModel({
      usage: usage.value,
      goals: goal,
      userExp: rating,
      suggestion,
      birthday,
    });
    const success = await newReview.save();
    console.log(success);
    if (success) {
      console.log("review added");
      res.status(200).json({ message: "success" });
    } else {
      console.log("failed");
      res.status(400).json({ message: "failed" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = {
  addReview,
};
