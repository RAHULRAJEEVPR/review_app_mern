import React from "react";
import { useFormik } from "formik";
import Select from "react-select";
import logo from "../assets/logo.svg";
import axios from "axios";
import {toast} from "react-toastify"

export default function ReviewPage() {
  const rating = [
    { value: 1, label: "Very Bad" },
    { value: 2, label: "Bad" },
    { value: 3, label: "Not Good" },
    { value: 4, label: "Okay" },
    { value: 5, label: "Good" },
    { value: 6, label: "Very Good" },
    { value: 7, label: "Excellent" },
    { value: 8, label: "Outstanding" },
    { value: 9, label: "Exceptional" },
    { value: 10, label: "Perfect" },
  ];

  const usageOptions = [
    { value: "Daily", label: "Daily" },
    { value: "Weekly", label: "Weekly" },
    { value: "Monthly", label: "Monthly" },
    { value: "Rarely", label: "Rarely" },
  ];
  const goalOptions = [
    { value: "Information", label: "Information" },
    { value: "Chat", label: "Chat" },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Buy", label: "Buy" },
    { value: "Socialize", label: "Socialize" },
    { value: "Other", label: "Other" },
  ];
  const formik = useFormik({
    initialValues: {
      usage: usageOptions[0],
      goals: [],
      rating: null,
      birthday: new Date().toISOString().split("T")[0],
    },
  });
  const handleRatingClick = (selectedRating) => {
    formik.setFieldValue("rating", selectedRating);
  };
  console.log(formik.values);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/addReview", {
        ...formik.values,
      });
      console.log('Response:', response);
    } catch (error) {
      toast.error("Server down please try after some time ")
      console.error('Error:', error);
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="flex justify-center  ">
        <div className="flex flex-col  py-10 px-4 md:px-10 xl:w-2/6 lg:w-3/6  shadow-xl mt-16 ">
          <div className="flex justify-center my-4">
            <img className="w-48" src={logo} alt="" />
          </div>
          <div className="mt-6">
            <h1 style={{ color: "#F59F00" }} className="md:text-2xl text-xl font-serif font-semibold">
              Share Your Thoughts: Rate & Review Our App!
            </h1>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col mt-7 ">
              <label className="md:text-lg  font-bold  " htmlFor="usage">
                How often do you use this app?
              </label>
              <Select
                value={formik.values.usage}
                options={usageOptions}
                onChange={(selectedOption) =>
                  formik.setFieldValue("usage", selectedOption)
                }
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="md:text-lg font-bold " htmlFor="goals">
                Main app goals?
              </label>
              <Select
                isMulti
                name="goals"
                options={goalOptions}
                value={formik.values.goals}
                onChange={(selectedOptions) =>
                  formik.setFieldValue("goals", selectedOptions)
                }
              />
            </div>
            <div className="mt-4">
              <h1 className=" md:text-lg font-bold  ">Rate User Experience </h1>
              <div className="grid grid-cols-10 gap-1 mt-2">
                {rating.map((rate) => (
                  <div key={rate.label}>
                    <div
                      onClick={() => handleRatingClick(rate.value)}
                      className={`rounded-full lg:ms-2 flex justify-center items-center cursor-pointer font-medium  shadow-inner lg:h-11 lg:w-11 h-10 w-10 transition duration-300 ease-in-out ${
                        formik.values.rating === rate.value
                          ? "text-white bg-blue-950  "
                          : "hover:bg-teal-200 hover:text-stone-700 bg-slate-100"
                      }`}
                    >
                      {rate.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs font-serif font-semibold mt-2">
                <p>{rating[0].label}</p>
                <p>{rating[rating.length - 1].label}</p>
              </div>
            </div>
            <div className="mt-4">
              <label className="md:text-lg font-bold  " htmlFor="suggestion ">
                Suggest any improvements
              </label>
              <textarea
                placeholder="help us improve.."
                name="suggestion"
                rows="4"
                className="border w-full mt-2 p-2"
                value={formik.values.suggestion}
                onChange={formik.handleChange}
              />
            </div>
            <div>
              <div className="flex mt-4  items-center">
                <label className="md:text-lg font-bold" htmlFor="birthday">
                  Enter your Birthday :
                </label>
                <input
                  className="border w-2/4 ms-2 p-2 rounded-md shadow-sm"
                  type="date"
                  max={new Date().toISOString().split("T")[0]}
                  name="birthday" // Add name attribute for Formik
                  value={formik.values.birthday}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div>
              <div className="flex  mt-10 justify-center">
                <button
                  type="submit"
                  className="  rounded-lg text-xl font-bold px-8 r py-2 mb-5"
                  style={{ background: "#F59F00" }}
                >
                  {" "}
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
