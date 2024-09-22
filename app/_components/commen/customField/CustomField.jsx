import { Field } from 'formik'
import React from 'react'

const CustomField = ({name,placeHolder}) => {
  return (
    
    <Field className="my-3 h-14 text-dark  px-2 rounded-2xl  w-full outline-none bg-transparent border-2 border-textYellow  " name={name} placeHolder={placeHolder }/>
  )
}

export default CustomField