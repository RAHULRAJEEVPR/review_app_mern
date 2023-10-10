import * as Yup from "yup";

const reviewSchema = Yup.object().shape({
  usage: Yup.string().required("Usage is required"),
  goals: Yup.array()
    .of(Yup.string().required("At least one goal is required"))
    .min(1, "At least one goal is required"),
  rating: Yup.number().required("Rating is required"),
  suggestion: Yup.string()
    .matches(/^[^$]*$/, 'Please avoid using special characters like "$","{" in your input'),
  birthday: Yup.date().required("Birthday is required"),
});

export default reviewSchema;
