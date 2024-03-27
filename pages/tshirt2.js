/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import ProductModel from "@/models/Product_model";
import connectDB from "./middlewares/moongoose";
import mongoose from 'mongoose';
const Tshirts = ({products}) => {
   return (
    <div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center  ">
            {Object.keys(products).map((item) => {
                  return <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5" key={products[item]._id}>
                  <Link href={`/product/${products[item].slug}`}>
                    <img alt="ecommerce" className="h-[36vh] block m-auto" src="https://m.media-amazon.com/images/I/71hhaL6CM8L._SY741_.jpg" />
                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].category}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                      <p className="mt-1">₹{products[item].price}</p>
                      <div className="mt-1 text-sm">Sizes-:
                       {products[item].size.includes('s') && <span className = "border border-gray-300 px-1 mx-1">S</span>}
                       {products[item].size.includes('m') && <span className = "border border-gray-300 px-1 mx-1">M</span>}
                       {products[item].size.includes('l') && <span className = "border border-gray-300 px-1 mx-1">L</span>}
                       {products[item].size.includes('x') && <span className = "border border-gray-300 px-1 mx-1">X</span>}
                       {products[item].size.includes('xl') && <span className = "border border-gray-300 px-1 mx-1">Xl</span>}
                       {products[item].size.includes('xxl') && <span className = "border border-gray-300 px-1 mx-1">XXl</span>}
                       </div>
                      <div className="mt-1 text-sm">
                      {products[item].color.includes('green') && <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('light green') && <button className="border-2 border-gray-300 ml-1 bg-green-200 rounded-full w-6 h-6 focus:outline-none"></button>}
                     
                      {products[item].color.includes('red') && <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('light red') && <button className="border-2 border-gray-300 ml-1 bg-red-200 rounded-full w-6 h-6 focus:outline-none"></button>}
                     
                      {products[item].color.includes('black') && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('grey') && <button className="border-2 border-gray-300 ml-1 bg-gray-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                     
                      {products[item].color.includes('blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('light blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-200 rounded-full w-6 h-6 focus:outline-none"></button>}
                     
                      {products[item].color.includes('yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('light yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-200 rounded-full w-6 h-6 focus:outline-none"></button>}
                     
                      {products[item].color.includes('purple') && <button className="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('light purple') && <button className="border-2 border-gray-300 ml-1 bg-purple-200 rounded-full w-6 h-6 focus:outline-none"></button>}
                       </div>
                    </div>
                  </Link>
                  </div>
                })}
            
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  if(!mongoose.connections[0].readyState){
      await mongoose.connect(process.env.MONGO_URI); 
  }

  let products = await ProductModel.find({category:'t-shirt'})
  let tshirts = {};
    for (let item of products){
        if (item.title in tshirts){
            if(!tshirts[item.title].color.includes(item.color) && item.qty>0){
              tshirts[item.title].color.push(item.color);
            }
            if(!tshirts[item.title].size.includes(item.size) && item.qty>0){
                tshirts[item.title].size.push(item.size);
            }
        }else{
            tshirts[item.title] = JSON.parse(JSON.stringify(item));
            if(item.qty>0){
                tshirts[item.title].color=[item.color];
                tshirts[item.title].size=[item.size];
            }
        }
    }

  return {
    props: { products:JSON.parse(JSON.stringify(tshirts))}

  }
}
export default Tshirts