import React from 'react'

const order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <p className="leading-relaxed mb-4">Your order has been successfully placed</p>
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Lets Wear</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order id:- #8977</h1>
        <div className="flex mb-4">
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Item</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-right">Quantity</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-right">Amount</a>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Lets E-com(xl/blue)</span>
          <span className="ml-auto">1</span>
          <span className="ml-auto text-gray-900">₹499</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Lets E-com(xl/black)</span>
          <span className="ml-auto">1</span>
          <span className="ml-auto text-gray-900">₹499</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Lets E-com(xl/white)</span>
          <span className="ml-auto">1</span>
          <span className="ml-auto text-gray-900">₹499</span>
        </div>
        
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">Total:-₹499</span>
          <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
          {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button> */}
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default order
