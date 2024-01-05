import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCartShopping } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";

const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef()
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-start items-center px-5 space-x-5 mb-1 shadow-md'>
      <div className="logo "><Link href="/"><Image src="/logo.png" alt="" width={60} height={100} /></Link></div>
      <div className="nav">
        <ul className='flex space-x-3'>
          <li><Link href="/tshirts">T-Shirts</Link></li>
          <li><Link href="/hoodies">Hoodies</Link></li>
          <li><Link href="/mugs">Mugs</Link></li>
          <li><Link href="/stickers">Stickers</Link></li>
        </ul>
      </div>
      <div className="cart absolute right-5 top-2 mx-5 cursor-pointer" onClick={toggleCart}><FaCartShopping className='md:text-xl text-2xl' /></div>
      {/* cart starts here  */}
      <div ref={ref} className="w-72 h-full sidecart absolute top-0 right-0 bg-pink-300 py-10 px-8 transform transition-transform translate-x-full">
        <h2 className="font-bold text-xl text-center">My cart</h2>
        <span className="absolute top-2 right-4 font-bold text-3xl cursor-pointer text-pink-700" onClick={toggleCart}><IoMdCloseCircleOutline /></span>
        <ol className='list-decimal font-semibold'>
          <li>
            <div className="item flex space-x-2 my-5">
              <div className='w2/3 font-semibold'>T-Shirt Lets werar the code</div>
              <div className='font-semibold flex justify-center items-center'><FaMinus className='mx-3 text-sm cursor-pointer  text-pink-700'/> 1 <FaPlus className='mx-3 text-sm cursor-pointer  text-pink-700' /></div>
            </div>
          </li>
          
        </ol>
        <button class="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"><IoBagCheckOutline className='m-1'/> Checkout</button>
      </div>
    </div>
  )
}

export default Navbar
