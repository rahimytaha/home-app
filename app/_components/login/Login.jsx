"use client";
import { Form, Formik } from "formik";
import CustomField from "../commen/customField/CustomField";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
export default function Login() {
  return (
    <div className="border-t-2 border-blue  relative pt-7 z-10 mt-7  ">
      <Formik initialValues={{ username: "" }} onSubmit={(e) => console.log(e)}>
        <Form>
          <CustomField
            name={"username"}
            placeHolder={"نام کاربری خود را وارد کنید"}
          />
          <CustomField name={"password"} placeHolder={"رمز خود را وارد کنید"} />
          <button
          type="submit"
            className=" bg-blue  text-white block w-full my-7   rounded-2xl  p-3 px-5 hover:shadow-xl  duration-200     -yellowShadow  "
          >
           وارد شوید
          </button>
          <button
            className=" bg-red flex items-center justify-center     text-white w-full    rounded-2xl  p-3 px-5 hover:shadow-xl  duration-200     -yellowShadow  "
          >
         <FcGoogle size={30 } />  با گوگل  وارد شوید 
          </button>
          <Link
          href="/register"
            className=" bg-dark  text-white block w-full my-2 text-center   rounded-2xl  p-3 px-5 hover:shadow-xl  duration-200     -yellowShadow  "
          >
           حساب ندارید؟ثبت نام کنید
          </Link> 
        </Form>
      </Formik>
    </div>
  );
}
