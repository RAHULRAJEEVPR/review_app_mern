const express = require("express");
const router = express.Router();
const { addReview, getReview } = require("../controllers/reviewController");
const { reviewValidation, validate } = require("../middlewares/validator");

router.post("/addReview", reviewValidation, validate, addReview);
router.get("/getReview/:id", getReview);

module.exports = router;
