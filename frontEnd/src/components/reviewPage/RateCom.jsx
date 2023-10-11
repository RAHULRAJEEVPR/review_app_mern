import React from 'react'
import { rating } from '../../constants/constant';

export default function RateCom({formik}) {
     // Click handler for rating selection
  const handleRatingClick = (selectedRating) => {
    formik.setFieldValue("rating", selectedRating);
  };
  return (
    <div className="mt-4">
              <h1 className=" md:text-lg font-bold  ">
                Rate User Experience{" "}
                <span className="text-slate-900 font-medium"> (1-10)</span>{" "}
              </h1>
              <div className="grid grid-cols-10 gap-1 mt-2">
                {rating.map((rate) => (
                  <div key={rate.label}>
                    <div
                      onClick={() => handleRatingClick(rate.value)}
                      className={`rounded-full lg:ms-2 flex justify-center items-center cursor-pointer font-medium  shadow-inner  md:h-11 md:w-11 h-9 w-9 transition duration-300 ease-in-out ${
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
              {formik.errors.rating && formik.touched.rating && (
                <p className="text-xs text-red-600">{formik.errors.rating}</p>
              )}
            </div>
  )
}
