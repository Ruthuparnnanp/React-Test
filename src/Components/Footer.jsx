import React from "react";

function Footer() {
  return (
    <div className="footer rounded bg-green-600 items-center p-5 mt-5 border border-blue-500 w-full flex justify-between">
      <p className="text font-bold text-lg fonty">Total $45</p>
      <button
        type="submit"
        className="bg-white px-6 py-2 rounded text-black font-bold"
      >
        Cart
      </button>
    </div>
  );
}

export default Footer;
