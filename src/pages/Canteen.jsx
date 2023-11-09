import React, { useEffect } from "react";
import "../App.css";
import img from "../assets/react.svg";
import vada1 from "../assets/vada1.jpg";
import vada2 from "../assets/vada2.jpg";
import vada3 from "../assets/vada3.jpg";
import vada4 from "../assets/vada4.jpg";
import { useNavigate } from "react-router-dom";

function Canteen() {
  useEffect(() => {
    fetch("https://api.denzo.io/api/cus/v1/products", {
      headers: {
        Accept: "application/json",
        Authorization: "{Bearer Token From Login API}",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  },[]);

  const navigate = useNavigate();

  return (
    <div className="container flex flex-col justify-between h-screen mx-auto border-2  border-green-600">
      <div>
      <h1 className="fonty mt-5 font-bold text-center">09 Thur 2023</h1>
      <div className="text mx-auto mt-5" style={{ width: "350px" }}>
        <h2 className="text-2xl font-bold  text-green-600">Canteen</h2>
      </div>
      <div
        className="body mx-auto shadow-lg p-2 mt-5"
        style={{ width: "350px" }}
      >
        <div className="item flex  mb-4 items-center">
          <img
            className="cursor-pointer"
            style={{ height: "80px", width: "80px" }}
            src={vada1}
            alt=""
          />
          <div className="item-details ml-5">
            <p className="font-semibold select-none">Parippu vada</p>
            <p className="text-green-500">$15</p>
          </div>
          <div className="flex ml-10">
            <p className="cursor-pointer">-</p>
            <p className="py-1 px-3 rounded cursor-pointer mr-1 ml-2  border border-green-500">
              2
            </p>
            <p className="cursor-pointer">+</p>
          </div>
        </div>
        <div className="item flex mb-4 items-center">
          <img
            className="cursor-pointer"
            style={{ height: "80px", width: "80px" }}
            src={vada2}
            alt=""
          />
          <div className="item-details ml-5">
            <p className="font-semibold  select-none">Parippu vada</p>
            <p className="text-green-500">$15</p>
          </div>
          <div className="flex ml-10">
            <p className="cursor-pointer">-</p>
            <p className="py-1 px-3 rounded cursor-pointer mr-1 ml-2  border border-green-500">
              2
            </p>
            <p className="cursor-pointer">+</p>
          </div>
        </div>
        <div className="item flex mb-4 items-center">
          <img
            className="cursor-pointer"
            style={{ height: "80px", width: "80px" }}
            src={vada3}
            alt=""
          />
          <div className="item-details ml-5">
            <p className="font-semibold  select-none">Parippu vada</p>
            <p className="text-green-500">$15</p>
          </div>
          <div className="flex ml-10">
            <p className="cursor-pointer">-</p>
            <p className="py-1 px-3 rounded cursor-pointer mr-1 ml-2  border border-green-500">
              2
            </p>
            <p className="cursor-pointer">+</p>
          </div>
        </div>
        <div className="item flex mb-4 items-center">
          <img
            className="cursor-pointer"
            style={{ height: "80px", width: "80px" }}
            src={vada4}
            alt=""
          />
          <div className="item-details ml-5">
            <p className="font-semibold  select-none">Parippu vada</p>
            <p className="text-green-500">$15</p>
          </div>
          <div className="flex ml-10">
            <p className="cursor-pointer">-</p>
            <p className="py-1 px-3 rounded cursor-pointer mr-1 ml-2  border border-green-500">
              2
            </p>
            <p className="cursor-pointer">+</p>
          </div>
        </div>
       
      </div>
      </div>
      <div className="footer rounded bg-green-600 items-center p-5 mt-5 border border-blue-500 w-full flex justify-between">
        <p className="text font-bold text-lg fonty">Total <span className="font-bold text-lg fonty text-red-800">$45</span></p>
        <button
          onClick={() => navigate("/cart")}
          type="submit"
          className="bg-white px-6 py-2 rounded text-black font-bold"
        >
          Cart
        </button>
      </div>
    </div>
  );
}

export default Canteen;
