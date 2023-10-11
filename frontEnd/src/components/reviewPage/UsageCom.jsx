import React from 'react'
import { usageOptions } from '../../constants/constant'
import Select from "react-select";


export default function UsageCom({formik}) {
  return (
    <div className="flex flex-col mt-7 ">
    <label className="md:text-lg  font-bold  " htmlFor="usage">
      How often do you use this app?
    </label>
    <Select
      value={{
        label: formik.values.usage,
        value: formik.values.usage,
      }}
      options={usageOptions}
      onChange={
        (selectedOption) =>
          formik.setFieldValue("usage", selectedOption.value) 
      }
    />
    {formik.errors.usage && formik.touched.usage && (
      <p className="text-xs text-red-600">{formik.errors.usage}</p>
    )}
  </div>
  )
}
