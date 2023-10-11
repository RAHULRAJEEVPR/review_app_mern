import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.svg";
import { rating } from "../constants/constant";

const Spinner = () => (
  <div className="flex items-center justify-center mt-5">
    <div
      className="animate-spin rounded-full h-10 w-10 border-t-2
     border-blue-500 border-r-2 border-b-2 border-l-2"
    ></div>
  </div>
);

export default function ResultPage() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the server
        const response = await axios.get(
          `http://localhost:3000/getReview/${id}`
        );
        setData(response.data.reviewData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const { usage, goals, userExp, suggestion, birthday } = data;
  const formattedBirthday =
    birthday && new Date(birthday).toLocaleDateString("en-GB");

  return (
    <div className="w-full h-screen">
      <div className="flex justify-center">
        <div className="flex flex-col py-10 px-4 md:px-10 xl:w-5/12 lg:w-3/6  shadow-xl mt-2 ">
          <div className="flex justify-center my-4">
            <img className="w-48" src={logo} alt="" />
          </div>
          <div className="mt-3 ">
            <h1 className="text-2xl font-serif font-extrabold text-blue-950 ">
              Your Feedback Matters! Thanks for sharing your thoughts with us
            </h1>
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-center text-blue-950">
              Your Feedback at a Glance!
            </h3>
          </div>
          {loading ? (
            <div className="my-20">
              <Spinner />
            </div>
          ) : (
            <>
              <div className="mt-3 shadow-lg py-2 border rounded-lg ps-2">
                <h4 className="md:text-xl  font-semibold ">
                  1. How often do you use this app?
                </h4>
                <ul className="list-disc ms-9 mt-1 mdtext-lg font-medium">
                  <li>{usage}</li>
                </ul>
              </div>
              <div className="mt-3 shadow-lg py-2 border rounded-lg ps-2">
                <h4 className="md:text-xl  font-semibold">
                  2. Main app goals??
                </h4>
                <ul className="list-disc ms-9 mt-1 mdtext-lg font-medium">
                  {Array.isArray(goals) && goals.length > 0 && (
                    <>
                      {goals.map((goal, index) => (
                        <li key={index}>{goal}</li>
                      ))}
                    </>
                  )}
                </ul>
              </div>
              <div className="mt-3 shadow-lg py-2 border rounded-lg ps-2">
                <h4 className="md:text-xl  font-semibold">
                  3. User Experience
                </h4>
                {userExp && (
                  <h5 className="ms-5 mt-1 text-lg font-medium">
                    <span className="text-2xl"> &bull;</span>{" "}
                    {rating[userExp - 1].label} ({userExp}-10)
                  </h5>
                )}
              </div>
              <div className="mt-3 shadow-lg py-2 border rounded-lg ps-2 relative">
                <h4 className="md:text-xl  font-semibold">
                  4. Suggest any improvements
                </h4>
                <textarea
                  placeholder="Empty"
                  name="suggestion"
                  rows="3"
                  value={(suggestion && suggestion) || ""}
                  className="border ms-5 w-11/12  mt-2 p-2  focus:outline-none"
                  readOnly
                ></textarea>
              </div>
              <div className="mt-3 shadow-lg py-3 border rounded-lg ps-2 relative">
                <h4 className="md:text-xl  font-semibold">
                  5. Your Birthday 🎂 : {formattedBirthday}
                </h4>
                <h5></h5>
              </div>
              <div className="flex mt-8 justify-center">
                <button
                  onClick={() => navigate("/")}
                  type="submit"
                  className="rounded-lg text-lg shadow-sm  font-bold px-8 r py-2 mb-3 transition
                   duration-300 ease-in-out bg-amber-500 hover:bg-orange-500"
                >
                  HOME
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
