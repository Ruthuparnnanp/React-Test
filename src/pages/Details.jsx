import React from "react";
import img from "../assets/react.svg"
import "../App.css";
import vada1 from "../assets/vada1.jpg"
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";



function Details() {
    const navigate =useNavigate();
  return (
    <div className="container h-screen flex-col flex justify-between mx-auto border-2  border-green-600">
      <div className="flex justify-center">
          <div>
          <h1 className="fonty mt-5 font-bold text-center">09 Thur 2023</h1>
      <div className="text mx-auto mt-5" style={{ width: "200px" }}>
        <h2 className="text-2xl font-bold text-green-600">Details</h2>
      </div>
       <div className="text mx-auto mt-5" style={{ width: "250px" }}>
           <div className="image  bg-slate-100 rounded flex items-center justify-center" style={{width:'250px',height:'250px',border:'2px solid grey'}}>
              <img src={vada1} className="w-full" style={{objectFit:'contain'}} alt="" />    
           </div>
           <div style={{ width: "250px" }} className="flex mt-3 items-center justify-between">
           <div className="item-details " >
                <p className='font-semibold  select-none'>Parippu vada</p>
                <p className='text-green-500'>$15</p>
                </div>
                <div className='flex ' >
                    <p className='cursor-pointer'>-</p>
                      <p className='py-1 px-3 rounded cursor-pointer mr-1 ml-2  border border-green-500'>2</p>
                     <p className='cursor-pointer'>+</p>
                   </div>
           </div>
           <p className="mt-2" style={{width:'250px',textAlign:"left"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
       </div>
          </div>
      </div>
      <div className="footer rounded bg-green-600 items-center p-5 mt-5 border border-blue-500 w-full flex justify-between">
      <p className="text font-bold text-lg fonty">Total <span className="font-bold text-lg fonty text-red-800">$30</span></p>
            <button onClick={()=>navigate("/cart")} type="submit" className="bg-white px-6 py-2 rounded text-black font-bold">Cart</button>
         </div>
    </div>
  );
}

export default Details;
