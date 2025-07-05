import React from "react";
import { useCart } from "../context/CartContext";

function Cards({ item }) {
  const { cart, addToCart } = useCart();
  const inCart = cart.some((b) => b._id === item._id || b.id === item.id);
  const isFree = item.category && item.category.toLowerCase() === "free";
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-softGray dark:bg-slate-800 shadow-soft hover:scale-105 duration-200 dark:text-white border border-gray-200 dark:border-slate-500 rounded-soft transition-soft">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-semibold text-lg md:text-xl text-primary dark:text-accent transition-soft">
              {item.name}
              <div className="badge badge-secondary text-xs font-medium px-2 py-1 rounded-full bg-softPink dark:bg-secondary/30 text-secondary dark:text-white ml-2 transition-soft">{item.category}</div>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mt-2 mb-4 transition-soft">{item.title}</p>
            <div className="card-actions justify-between items-center mt-2">
              <div className="badge badge-outline text-primary dark:text-accent border border-primary dark:border-accent bg-white/70 dark:bg-slate-700/60 px-3 py-1 rounded-full font-semibold transition-soft">${item.price}</div>
              {isFree ? (
                <span className="px-4 py-2 rounded-full bg-gray-200 dark:bg-slate-700 text-gray-500 dark:text-gray-300 font-medium cursor-not-allowed">Free Book</span>
              ) : (
                <button
                  className={`cursor-pointer px-4 py-2 rounded-full border-[2px] border-gray-300 dark:border-slate-500 bg-softBlue dark:bg-slate-700 text-primary dark:text-white font-medium shadow-soft hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-slate-900 transition-soft ${inCart ? 'opacity-60 cursor-not-allowed' : ''}`}
                  onClick={() => addToCart(item)}
                  disabled={inCart}
                >
                  {inCart ? 'In Cart ✓' : 'Add to Cart'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
