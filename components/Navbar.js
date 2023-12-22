import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-start items-center mx-5 space-x-5'>
      <div className="logo "><Image src="/logo.png" alt="" width = {60} height = {100}/></div>
      <div className="nav">
        <ul className='flex space-x-3'>
          <li><Link href = "/">T-Shirts</Link></li>
          <li><Link href = "/">Hoodies</Link></li>
          <li><Link href = "/">Mugs</Link></li>
          <li><Link href = "/">Stickers</Link></li>
        </ul>
      </div>
      <div className="cart absolute right-5 top-2 mx-5 "><FaCartShopping className='md:text-xl text-2xl'/></div>
    </div>
  )
}

export default Navbar
