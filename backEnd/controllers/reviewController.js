const reviewModel=require("../model/reviewModel")

const addReview=async(req,res)=>{
    try {
        const {usage,goals,userExp,suggestion,birthday}=req.body

        const newReview=new reviewModel({
            usage,
            goals,
            userExp,
            suggestion,
            birthday
        })
        const success=await newReview.save()
        if(success){
            console.log("review added");
            res.status(200).json({message:"success"})
        }else{
            console.log("failed");
            res.status(400).json({message:"failed"})

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error})

    }
}


module.exports={
    addReview
}