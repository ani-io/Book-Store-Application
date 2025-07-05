import React from "react";

function Testimonials() {
  return (
    <section className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What Our Readers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center text-2xl font-bold mb-4">A</div>
          <p className="text-gray-700 dark:text-gray-200 mb-2">“A fantastic selection of books and a beautiful, easy-to-use site. I found my new favorite author here!”</p>
          <span className="font-semibold text-pink-500">— Alice M.</span>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center text-2xl font-bold mb-4">J</div>
          <p className="text-gray-700 dark:text-gray-200 mb-2">“The free courses are a great way to learn and the featured books are always top-notch. Highly recommended!”</p>
          <span className="font-semibold text-pink-500">— John D.</span>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center text-2xl font-bold mb-4">S</div>
          <p className="text-gray-700 dark:text-gray-200 mb-2">“Easy to navigate and a wonderful variety of genres. The best online bookstore experience I've had.”</p>
          <span className="font-semibold text-pink-500">— Sarah K.</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 