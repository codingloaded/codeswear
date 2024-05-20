import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component, pageProps }) {
  const [cart,setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({value:null})
  const[key, setKey]= useState(0)
  const [progress, setProgress] = useState(0)
  const router = useRouter();

  const logout=()=>{
    localStorage.removeItem("ecomToken")
    setUser({value:null})
    setKey(Math.random());
  }

  
  useEffect(()=>{
    router.events.on('routeChangeComplete', ()=>{setProgress(100)})
    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error);
      localStorage.clear()
    }
    const token = localStorage.getItem("ecomToken")
    if(token){
      setUser({value:token})
    }
    setKey(Math.random());
  },[router.query])

  const saveCart=(myCart)=>{
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt=0;
    let keys = Object.keys(myCart);
    for(let i = 0; i<keys.length;i++){
      subt+= myCart[keys[i]].price*myCart[keys[i]].qty
    }
    setSubTotal(subt)
  }

  const addTocart = (itemCode, qty, price, name, size, varient)=>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty +qty;
    }else{
      newCart[itemCode] = {qty:1, price, name,size, varient}
    }
    setCart(newCart);
    // console.log(newCart)
    saveCart(newCart); 
  }
  
  const removeFromcart = (itemCode, qty, price, name, size, varient)=>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    console.log(newCart)
    if( newCart[itemCode].qty<=0){
      delete newCart[itemCode]
    }
    setCart(newCart);
    saveCart(newCart); 
  }

  const clearcart =()=>{
    setCart({});
    saveCart({})
  }

 const buynow=(itemCode, qty, price, name, size, varient)=>{
   let newCart = {itemCode:{qty:1, price, name,size, varient}};
   setCart(newCart);
   saveCart(newCart);
  // console.log(newCart)
   router.push("/checkout")
 }




  return (
  <>
  <Navbar key={key} logout={logout} user={user} cart = {cart} addTocart = {addTocart} removeFromcart = {removeFromcart} clearcart = {clearcart} subTotal = {subTotal} />
   <Component cart = {cart} addTocart = {addTocart} removeFromcart = {removeFromcart} clearcart = {clearcart} subTotal = {subTotal} buynow={buynow} {...pageProps} />
   <Footer/>
  </>
  )
}
