import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-slate-800 rounded-soft shadow-soft p-8 transition-soft">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-primary dark:text-accent hover:bg-softBlue dark:hover:bg-slate-700 transition-soft"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-2xl text-primary dark:text-accent mb-4 transition-soft">Login</h3>
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
            {/* password */}
            <div className="mt-4 space-y-2">
              <span className="text-gray-700 dark:text-gray-200 font-medium">Password</span>
              <br />
              <input
                type="password"
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
              <button className="bg-primary text-white rounded-full px-4 py-2 hover:bg-secondary transition-soft font-semibold shadow-soft">Login</button>
              <p className="text-base text-gray-700 dark:text-gray-200">
                Not registered?{' '}
                <Link
                  to="/signup"
                  className="underline text-secondary dark:text-accent cursor-pointer hover:text-primary dark:hover:text-white transition-soft"
                >
                  Signup
                </Link>{' '}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
