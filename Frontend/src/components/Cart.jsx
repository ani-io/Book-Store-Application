import React, { useState } from "react";
import { useCart } from "../context/CartContext";
// For QR code, use a static image or a placeholder div (can be replaced with a QR library)

function Cart({ onClose }) {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  const [showPayment, setShowPayment] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [upiId, setUpiId] = useState("");

  const handleCardPayment = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      clearCart();
    }, 1800);
  };

  const handleUpiPayment = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      clearCart();
    }, 1800);
  };

  const handleQrPayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      clearCart();
    }, 1800);
  };

  // Example UPI string for QR code
  const upiString = `upi://pay?pa=merchant@upi&pn=BookStore&am=${total.toFixed(2)}&cu=INR`;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white dark:bg-slate-800 rounded-soft p-8 min-w-[320px] max-w-[90vw] shadow-soft" onClick={e => e.stopPropagation()}>
        <h2 className="text-xl font-bold mb-4 text-primary dark:text-accent">Cart</h2>
        {success ? (
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl mb-2">🎉</span>
            <p className="mb-4 text-green-600 dark:text-green-400 font-semibold">Payment Successful!</p>
            <button className="mt-2 w-full bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-soft" onClick={onClose}>Close</button>
          </div>
        ) : showPayment ? (
          <>
            <div className="flex justify-center mb-4 gap-2">
              <button className={`px-3 py-1 rounded-full font-medium transition-soft ${paymentMethod === "card" ? "bg-primary text-white" : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white"}`} onClick={() => setPaymentMethod("card")}>Card</button>
              <button className={`px-3 py-1 rounded-full font-medium transition-soft ${paymentMethod === "upi" ? "bg-primary text-white" : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white"}`} onClick={() => setPaymentMethod("upi")}>UPI</button>
              <button className={`px-3 py-1 rounded-full font-medium transition-soft ${paymentMethod === "qr" ? "bg-primary text-white" : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white"}`} onClick={() => setPaymentMethod("qr")}>QR Code</button>
            </div>
            {paymentMethod === "card" && (
              <form onSubmit={handleCardPayment} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name on Card</label>
                  <input required className="w-full px-3 py-2 border border-gray-300 dark:border-slate-500 rounded-md outline-none bg-transparent dark:bg-slate-700 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Card Number</label>
                  <input required pattern="[0-9]{16}" maxLength={16} className="w-full px-3 py-2 border border-gray-300 dark:border-slate-500 rounded-md outline-none bg-transparent dark:bg-slate-700 dark:text-white" />
                </div>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Expiry</label>
                    <input required placeholder="MM/YY" pattern="\d{2}/\d{2}" maxLength={5} className="w-full px-3 py-2 border border-gray-300 dark:border-slate-500 rounded-md outline-none bg-transparent dark:bg-slate-700 dark:text-white" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">CVV</label>
                    <input required pattern="[0-9]{3,4}" maxLength={4} className="w-full px-3 py-2 border border-gray-300 dark:border-slate-500 rounded-md outline-none bg-transparent dark:bg-slate-700 dark:text-white" />
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-lg text-primary dark:text-accent">Total:</span>
                  <span className="font-bold text-lg text-primary dark:text-accent">${total.toFixed(2)}</span>
                </div>
                <button type="submit" className="w-full bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-soft" disabled={loading}>
                  {loading ? "Processing..." : "Pay"}
                </button>
                <button type="button" className="w-full mt-2 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-4 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-slate-600 transition-soft" onClick={() => setShowPayment(false)} disabled={loading}>Back to Cart</button>
              </form>
            )}
            {paymentMethod === "upi" && (
              <form onSubmit={handleUpiPayment} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">UPI ID</label>
                  <input required value={upiId} onChange={e => setUpiId(e.target.value)} placeholder="yourname@upi" className="w-full px-3 py-2 border border-gray-300 dark:border-slate-500 rounded-md outline-none bg-transparent dark:bg-slate-700 dark:text-white" />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-lg text-primary dark:text-accent">Total:</span>
                  <span className="font-bold text-lg text-primary dark:text-accent">${total.toFixed(2)}</span>
                </div>
                <button type="submit" className="w-full bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-soft" disabled={loading}>
                  {loading ? "Processing..." : "Pay with UPI"}
                </button>
                <button type="button" className="w-full mt-2 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-4 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-slate-600 transition-soft" onClick={() => setShowPayment(false)} disabled={loading}>Back to Cart</button>
              </form>
            )}
            {paymentMethod === "qr" && (
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200 dark:bg-slate-700 dark:border-slate-500">
                  {/* Replace with a real QR code generator if desired */}
                  <img src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(upiString)}`} alt="QR Code" className="w-36 h-36" />
                </div>
                <div className="flex justify-between items-center mb-2 w-full">
                  <span className="font-bold text-lg text-primary dark:text-accent">Total:</span>
                  <span className="font-bold text-lg text-primary dark:text-accent">${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-soft" onClick={handleQrPayment} disabled={loading}>
                  {loading ? "Processing..." : "I've Paid"}
                </button>
                <button type="button" className="w-full mt-2 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-4 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-slate-600 transition-soft" onClick={() => setShowPayment(false)} disabled={loading}>Back to Cart</button>
              </div>
            )}
          </>
        ) : (
          <>
            {cart.length === 0 ? (
              <p className="mb-4 text-gray-500 dark:text-gray-300">Your cart is empty.</p>
            ) : (
              <>
                <ul className="mb-4 max-h-60 overflow-y-auto">
                  {cart.map((item) => (
                    <li key={item._id || item.id} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-slate-700">
                      <div>
                        <span className="font-semibold text-primary dark:text-accent">{item.name}</span>
                        <span className="ml-2 text-gray-500 dark:text-gray-300 text-sm">${item.price}</span>
                      </div>
                      <button className="text-red-500 hover:underline ml-4" onClick={() => removeFromCart(item._id || item.id)}>Remove</button>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg text-primary dark:text-accent">Total:</span>
                  <span className="font-bold text-lg text-primary dark:text-accent">${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-secondary text-white px-4 py-2 rounded-full hover:bg-primary transition-soft mb-2" onClick={clearCart}>Clear Cart</button>
                <button className="w-full bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-soft" onClick={() => setShowPayment(true)}>Proceed to Payment</button>
              </>
            )}
          </>
        )}
        {!success && !showPayment && (
          <button className="mt-2 w-full bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-4 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-slate-600 transition-soft" onClick={onClose}>Close</button>
        )}
      </div>
    </div>
  );
}

export default Cart; 