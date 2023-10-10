const async = require("hbs/lib/async");
const reviewModel = require("../model/reviewModel");

const addReview = async (req, res) => {
  try {
    console.log(req.body);
    const { usage, goals, rating, suggestion, birthday } = req.body;

    const newReview = new reviewModel({
      usage,
      goals,
      userExp: rating,
      suggestion,
      birthday,
    });
    const success = await newReview.save();
    console.log(success);
    if (success) {
      console.log("review added");
      res.status(200).json({ message: "success", id: success._id });
    } else {
      console.log("failed");
      res.status(400).json({ message: "failed" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};


const getReview=async(req,res)=>{
   try {
    const {id}=req.params
    const reviewData=await reviewModel.findOne({_id:id})
    console.log(reviewData);
    if(!reviewData){
        res.status(404).json({message:"data not found",})
    }else{
        res.status(200).json({message:"success",reviewData})
    }
   } catch (error) {
    console.log();
    res.status(500).json({error})
   }
}
module.exports = {
  addReview,
  getReview
};
