import React from 'react'
import Select from "react-select";
import { goalOptions } from '../constants/constant';

export default function GoalsCom({formik}) {
  return (
    <div className="flex flex-col mt-4">
              <label className="md:text-lg font-bold " htmlFor="goals">
                Main app goals?
              </label>
              <Select
                isMulti
                name="goals"
                options={goalOptions}
                value={formik.values.goals.map((goal) => ({
                  label: goal,
                  value: goal,
                }))}
                onChange={(selectedOptions) =>
                  formik.setFieldValue(
                    "goals",
                    selectedOptions.map((option) => option.value)
                  )
                }
              />
              {formik.errors.goals && formik.touched.goals && (
                <p className="text-xs text-red-600">{formik.errors.goals}</p>
              )}
            </div>
  )
}
