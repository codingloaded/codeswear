/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const Tshirts = ({ products }) => {
  
  return (
    <div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center  ">
              
                {products.products.map((item) => {
                  return <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5" key={item._id}>
                  <Link href={`/product/${item.slug}`}>
                    <img alt="ecommerce" className="h-[36vh] block m-auto" src="https://m.media-amazon.com/images/I/71hhaL6CM8L._SY741_.jpg" />
                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                      <p className="mt-1">₹{item.price}</p>
                      <p className="mt-1 text-sm">Sizes-: S, M, L, Xl, XXl, XXl</p>
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
  let data = await fetch('http://localhost:3000/api/getproducts?category=t-shirt');
  let products = await data.json();

  return {
    props: { products: JSON.parse(JSON.stringify(products)) }

  }
}
export default Tshirts
