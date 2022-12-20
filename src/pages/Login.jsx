import React from "react";
import { FaGooglePlusG, FaTwitter } from "react-icons/fa";
import { useFormik } from "formik";
import * as yup from "yup";
import App from "./../App";
function Login() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().email().required(),
            password: yup.string().min(6).required(),
        }),
        onSubmit: (values) => {
            console.log("values", values);
        },
    });
    return (
        <div className="w-full h-screen flex flex-row relative">
            <p className="absolute top-10 right-10">
                Not a member?
                <a href="#" className="text-[#4f3cc9]">
                    {" "}
                    Sign up now
                </a>
            </p>
            <div className=" bg-[#f1cdd7] h-screen hidden lg:w-4/12 lg:block">
                <div className="m-auto flex flex-col items-center pt-52">
                    <p className="text-5xl font-bold text-[#cb4a4a]">VNPT</p>
                    <p className="mt-4 text-4xl font-thin text-[#cb4a4a]">Discover the world’s</p>
                    <img
                        src="https://cdn.dribbble.com/assets/auth/sign-in-a63d9cf6c1f626ccbde669c582b10457b07523adb58c2a4b46833b7b4925d9a3.jpg"
                        alt="demo"
                        className="w-auto h-[30%] bg-cover mt-24"
                    />
                </div>
            </div>
            <div className="w-full h-screen bg-white flex items-center justify-center">
                <div className="w-full lg:w-4/12">
                    <p className="font-bold text-2xl">Sign in to VNPT</p>
                    <div className="mt-4 flex">
                        <button className="bg-[#1a73e8] px-4 py-1 flex items-center justify-around rounded-md hover:bg-blue-300">
                            <FaGooglePlusG className="text-white" />
                        </button>
                        <button className="bg-stone-200 hover:bg-stone-300 px-4 py-4 ml-4 rounded-md">
                            <FaTwitter className="text-gray-500" />
                        </button>
                    </div>

                    <div className="flex items-center my-8 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                        <p className="text-center font-semibold mx-4 mb-0">Or</p>
                    </div>

                    <form className="" onSubmit={formik.handleSubmit}>
                        <div>
                            <p className="text-[16px] font-bold">Username or Email Address</p>
                            <input
                                className="bg-gray-200 px-4 py-2 w-full hover:ring-pink-200 hover:ring-2 rounded-xl mt-2 focus:ring-pink-200 active:ring-pink-200 focus:ring-2 lg:w-5/6"
                                placeholder="Enter Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                id="email"
                                name="email"
                            />
                            {formik.errors.email && (
                                <p className="text-red-500 text-sm">{formik.errors.email}</p>
                            )}
                        </div>
                        <div className="mt-4">
                            <p className="text-[16px] font-bold">Password</p>
                            <input
                                className="bg-gray-200 px-4 py-2 w-5/6 hover:ring-pink-200 hover:ring-2 rounded-xl mt-2 focus:ring-pink-200 active:ring-pink-200 focus:ring-2"
                                placeholder="Enter Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                id="password"
                                name="password"
                            />
                            {formik.errors.password && (
                                <p className="text-red-500 text-sm">{formik.errors.password}</p>
                            )}
                        </div>
                        <input
                            type="submit"
                            className="w-[200px] h-[40px] bg-[#ea4c89] text-white text-center rounded-md mt-6 font-bold"
                            value="Sign in"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
