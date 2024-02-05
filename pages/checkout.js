import React from 'react'
import Link from 'next/link'
import { FaCartShopping } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";

const Checkout = ({ cart, addTocart, removeFromcart, clearcart, subTotal }) => {
  return (
    <div className='container m-auto'>
      <h1 className='text-center font-bold text-2xl my-8'>Checkout</h1>
      <div className='flex flex-col md:flex-row'>
        {/* delivery address details  */}
        <div className=" flex flex-wrap w-full md:f-1/2">
          <h2 className='font-bold text-xl my-2 w-full text-center'>Delivery Details</h2>
          <div className="px-2 w-1/2">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 font-bold text-sm text-gray-600">Name:-</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 font-bold text-sm text-gray-600">Email:-</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-full">
            <div className="relative mb-4">
              <label htmlFor="address" className="leading-7 text-sm font-bold text-gray-600">Address</label>
              <textarea id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div className="px-2 w-1/3">
            <div className="relative mb-4">
              <label htmlFor="phone" className="leading-7 font-bold text-sm text-gray-600">Phone:-</label>
              <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-1/3">
            <div className="relative mb-4">
              <label htmlFor="city" className="leading-7 font-bold text-sm text-gray-600">City:-</label>
              <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-1/3">
            <div className="relative mb-4">
              <label htmlFor="pincode" className="leading-7 font-bold text-sm text-gray-600">Pincode:-</label>
              <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
        {/* cart item  */}
        <div className=" flex flex-wrap w-full md:f-1/2 ">
          <h2 className='font-bold text-xl my-2 w-full text-center'>Your cart</h2>
          {/* car  */}
          <div className="w-full sidecart  bg-pink-300 py-10 px-8 mx-2 border-solid border-gray-900 border-2 rounded-lg ">
            <h2 className="font-bold text-xl text-center">My cart</h2>

            <ol className='list-decimal font-semibold'>
              {Object.keys(cart).length == 0 && <div className='my-4 font-normal'>No item in the cart</div>}
              {Object.keys(cart).map((k) => {
                return <li key={k}>
                  <div className="item flex space-x-2 my-5 justify-between">
                    <div className=' font-semibold'>{cart[k].name}</div>
                    <div className='font-semibold flex justify-center items-center'><FaMinus onClick={() => removeFromcart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].varient)} className='mx-3 text-sm cursor-pointer  text-pink-700' /> {cart[k].qty} <FaPlus onClick={() => addTocart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].varient)} className='mx-3 text-sm cursor-pointer  text-pink-700' /></div>
                  </div>
                </li>
              })}
              <div className='text-left flex justify-end'>Total amount: <span className='ml-8'>₹{subTotal}</span></div>

            </ol>
            <div className="flex justify-center space-x-1">

              
              <Link href='/index'><button className="flex mx-auto mt-4 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-lg"><IoBagCheckOutline className='m-1' /> Pay ₹{subTotal}</button></Link>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Checkout
