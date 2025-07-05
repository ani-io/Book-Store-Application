import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 bg-white/80 dark:bg-transparent rounded-soft shadow-soft transition-soft">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold text-primary drop-shadow-sm transition-soft">
              Hello, welcomes here to learn something {" "}
              <span className="text-secondary">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl text-gray-700 dark:text-gray-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
            </p>
            <label className="flex items-center gap-2 bg-transparent px-2 py-1 rounded-full border border-gray-300 dark:border-slate-500 focus-within:border-pink-500 transition w-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow outline-none bg-transparent rounded-md px-1 dark:bg-transparent dark:text-white" placeholder="Email" />
            </label>
          </div>
          <button className="mt-6 bg-primary text-white px-6 py-2 rounded-full shadow-soft hover:bg-secondary hover:text-white transition-soft">Get Started</button>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2 flex items-center justify-center">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12 rounded-soft shadow-soft transition-soft"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
