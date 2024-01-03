import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCartShopping } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
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
      <div className="cart absolute right-5 top-2 mx-5 "><FaCartShopping className='md:text-xl text-2xl' /></div>
      <div className="sidebar absolute top-0 right-0 bg-pink-300 p-10">
        <h2 className="font-bold text-xl text-center">My cart</h2>
        <span className="absolute top-2 right-4 font-bold text-3xl cursor-pointer text-pink-700"><IoMdCloseCircleOutline /></span>
        <ol>
          <li>
            <span>T-Shirt Lets werar the code</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Navbar
