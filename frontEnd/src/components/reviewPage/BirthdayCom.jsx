import React from 'react'

export default function BirthdayCom({formik}) {
  return (
    <div>
              <div className="flex mt-4 items-center">
                <label className="md:text-lg font-bold" htmlFor="birthday">
                  Enter your Birthday :
                </label>
                <input
                  className="border w-2/4 ms-2 p-2 rounded-md shadow-sm"
                  type="date"
                  max={new Date().toISOString().split("T")[0]}
                  name="birthday" 
                  value={formik.values.birthday}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.errors.birthday && formik.touched.birthday && (
                <div className="text-xs text-red-600 mt-1">
                  {formik.errors.birthday}
                </div>
              )}
            </div>
  )
}
