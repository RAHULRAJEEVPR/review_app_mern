import React from 'react'

export default function SuggestionCom({formik}) {
  return (
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
    {formik.errors.suggestion && formik.touched.suggestion && (
      <p className="text-xs text-red-600">
        {formik.errors.suggestion}
      </p>
    )}
  </div>
  )
}
