/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Hoodies = () => {
  return (
    <div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center  ">
              <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5">
                <a className="block relative  rounded overflow-hidden">
                 <Link href="/product/lets_wear"> <img alt="ecommerce" className=" block m-auto" src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71x15gESB2L._SY741_.jpg" /></Link>
                </a>
                <div className="mt-1 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Lets Wear</h2>
                  <p className="mt-1">₹500</p>
                  <p className="mt-1 text-sm">Sizes-: S, M, L, Xl, XXl, XXl</p>
                </div>
              </div>
              
             
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hoodies
