/* eslint-disable @next/next/no-img-element */
import ProductModel from "@/models/Product_model";
import { useRouter } from 'next/router'
import { useState } from 'react';
import mongoose from 'mongoose';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Slug({ addTocart, clearcart, buynow, product, variant }) {
  const router = useRouter()
  const { slug } = router.query
  const [pin, setPin] = useState("");
  const [servicability, setServicability] = useState();
  const [color, setColor] = useState(product.color)
  const [size, setSize] = useState(product.size)

  const checkPincode = async () => {
    
    let pins = await fetch("http://localhost:3000/api/pincode");
    let pinsJson = await pins.json();

    if (pinsJson.includes(parseInt(pin))) {
      setServicability(true)
      // toast.success('your pincode is servicable', {
      //   position: "bottom-center",
      //   autoClose: 1000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   transition: Bounce,
      // });
    }
    else {
      setServicability(false)
      // toast.error('your pincode is not servicable', {
      //   position: "bottom-center",
      //   autoClose: 1000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   transition: Bounce,
      // });
    }

  }

  const changePin = (e) => {
    setPin(e.target.value)
  }

  const refreshVarient = (newsize, newcolor) => {
    let url = `http://localhost:3000/product/${variant[newcolor][newsize]['slug']}`;
    window.location = url;
  }

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        {/* <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition: Bounce
        /> */}
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto px-20 py-5 object-cover object-top rounded md:shadow-lg" src={product.img} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">Wear the code</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title} - {product.size}/{product.color}</h1>
              {/* 
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div> */}

              <p className="leading-relaxed">{product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {Object.keys(variant).includes('white') && Object.keys(variant['white']).includes(size) && <button onClick={(e) => { refreshVarient(size, 'white') }} className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {Object.keys(variant).includes('black') && Object.keys(variant['black']).includes(size) && <button onClick={(e) => { refreshVarient(size, 'black') }} className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                  {Object.keys(variant).includes('yellow') && Object.keys(variant['yellow']).includes(size) && <button onClick={(e) => { refreshVarient(size, 'yellow') }} className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {Object.keys(variant).includes('green') && Object.keys(variant['green']).includes(size) && <button onClick={(e) => { refreshVarient(size, 'green') }} className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {Object.keys(variant).includes('light green') && Object.keys(variant['light green']).includes(size) && <button onClick={(e) => { refreshVarient(size, 'light green') }} className="border-2 border-gray-300 ml-1 bg-green-200 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {Object.keys(variant).includes('blue') && Object.keys(variant['blue']).includes(size) && <button onClick={(e) => { refreshVarient(size, 'blue') }} className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {Object.keys(variant).includes('red') && Object.keys(variant['red']).includes(size) && <button onClick={(e) => { refreshVarient(size, 'red') }} className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select value={size} onChange={(e) => { refreshVarient(e.target.value, color) }} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                      {Object.keys(variant[color]).includes('s') && <option value={'s'}>S</option>}
                      {Object.keys(variant[color]).includes('m') && <option value={'m'}>M</option>}
                      {Object.keys(variant[color]).includes('l') && <option value={'l'}>L</option>}
                      {Object.keys(variant[color]).includes('xl') && <option value={'xl'}>XL</option>}
                      {Object.keys(variant[color]).includes('xxl') && <option value={'xxl'}>XXL</option>}

                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>
                <button onClick={() => { addTocart(slug, 1, product.price, product.title, product.size, product.color) }} className="flex ml-4 text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded">Add to cart</button>
                <button onClick={() => { buynow(slug, 1, product.price, product.title, product.size, product.color) }} className="flex ml-4 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Buy Now</button>
                {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button> */}
              </div>
              <div className="pincode mt-6 flex space-x-2">
                <input type="text" onChange={changePin} placeholder='Check your pincode here' className='p-2 border-2 focus:outline-none' value={pin} />
                <button className="flex ml-10 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded" onClick={checkPincode}>Check</button>
              </div>
              {!servicability && servicability != null && <div className="status mt-2 text-sm text-red-600">
                Sorry! we do not deliver to this location yet
              </div>}
              {servicability && servicability != null && <div className="status mt-2 text-sm text-green-600">
                Yeh! you are in our reaching zone
              </div>}
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let product = await ProductModel.findOne({ slug: context.query.slug });
  let variant = await ProductModel.find({ title: product.title })
  let colorSizeslug = {};
  for (let item of variant) {
    if (Object.keys(colorSizeslug).includes(item.color)) {
      colorSizeslug[item.color][item.size] = { slug: item.slug };
    } else {
      colorSizeslug[item.color] = {};
      colorSizeslug[item.color][item.size] = { slug: item.slug };
    }
  }

  return {
    props: { product: JSON.parse(JSON.stringify(product)), variant: JSON.parse(JSON.stringify(colorSizeslug)) }

  }
}