import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-softGray dark:bg-slate-900 transition-soft">
        <div className="w-[600px]">
          <div className="modal-box bg-white dark:bg-slate-800 rounded-soft shadow-soft p-8 transition-soft">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-primary dark:text-accent hover:bg-softBlue dark:hover:bg-slate-700 transition-soft"
              >
                ✕
              </Link>

              <h3 className="font-bold text-2xl text-primary dark:text-accent mb-4 transition-soft">Signup</h3>
              <div className="mt-4 space-y-2">
                <span className="text-gray-700 dark:text-gray-200 font-medium">Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-2 border border-gray-300 dark:border-slate-500 rounded-md outline-none bg-transparent dark:bg-slate-700 dark:text-white transition-soft"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span className="text-gray-700 dark:text-gray-200 font-medium">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-2 border border-gray-300 dark:border-slate-500 rounded-md outline-none bg-transparent dark:bg-slate-700 dark:text-white transition-soft"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span className="text-gray-700 dark:text-gray-200 font-medium">Password</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-2 border border-gray-300 dark:border-slate-500 rounded-md outline-none bg-transparent dark:bg-slate-700 dark:text-white transition-soft"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>
              {/* Button */}
              <div className="flex flex-col gap-4 mt-6">
                <button className="bg-primary text-white rounded-full px-4 py-2 hover:bg-secondary transition-soft font-semibold shadow-soft">Signup</button>
                <p className="text-base text-gray-700 dark:text-gray-200">
                  Have account?{' '}
                  <button
                    className="underline text-secondary dark:text-accent cursor-pointer hover:text-primary dark:hover:text-white transition-soft"
                    onClick={() => document.getElementById('my_modal_3').showModal()}
                  >
                    Login
                  </button>{' '}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
