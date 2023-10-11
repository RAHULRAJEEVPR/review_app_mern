import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import axios from "axios";
import { toast } from "react-toastify";
import reviewSchema from "../schemas/reviewSchema";
import { usageOptions } from "../constants/constant";
import UsageCom from "../components/reviewPage/UsageCom";
import GoalsCom from "../components/GoalsCom";
import RateCom from "../components/reviewPage/RateCom";
import SuggestionCom from "../components/reviewPage/SuggestionCom";
import BirthdayCom from "../components/reviewPage/BirthdayCom";
export default function ReviewPage() {
  const navigate = useNavigate();
  // Form submission handler
  const handleSubmit = async (values) => {
    try {
      // Make API request to add review
      const response = await axios.post("http://localhost:3000/addReview", {
        ...values,
      });
      if (response) {
        navigate(`/result/${response.data.id}`);
      }
    } catch (error) {
      toast.error("Server down please try after some time ");
      console.error("Error:", error);
    }
  };
  // Formik hook for form management
  const formik = useFormik({
    initialValues: {
      usage: usageOptions[0].value,
      goals: [],
      rating: null,
      birthday: "",
    },
    validationSchema: reviewSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="w-full h-screen">
      <div className="flex justify-center  ">
        <div className="flex flex-col  py-10 px-4 md:px-10 xl:w-5/12 lg:w-3/6  shadow-xl mt-2  ">
          <div className="flex justify-center my-4">
            <img className="w-48" src={logo} alt="" />
          </div>
          <div className="mt-6">
            <h1
              style={{ color: "#F59F00" }}
              className="md:text-2xl text-xl font-serif font-semibold"
            >
              Share Your Thoughts: Rate & Review Our App!
            </h1>
          </div>
          <form action="" onSubmit={formik.handleSubmit}>
            <UsageCom formik={formik} />
            <GoalsCom formik={formik} />
            <RateCom formik={formik} />
            <SuggestionCom formik={formik} />
            <BirthdayCom formik={formik} />
            <div>
              <div className="flex  mt-10 justify-center">
                <button
                  type="submit"
                  className="rounded-lg text-lg shadow-sm  font-bold px-8 r py-2 mb-3 transition
                   duration-300 ease-in-out bg-amber-500 hover:bg-orange-500"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
