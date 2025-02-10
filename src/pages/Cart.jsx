import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Card from '../components/Card'
import CartItems from '../components/CartItems'
import { NavLink } from 'react-router-dom'

function Cart() {
    const cartItems = useSelector((state)=>state.count.cartItems)
    console.log(cartItems)
  return (
    <div className ="flex flex-wrap justify-center  items-center p-4 gap-4">
        {
            cartItems && cartItems.length > 0 ? cartItems.map((data,i)=>(<CartItems key={i}  data={data} />)) : 
            (<div className=" text-center text-2xl mt-14 flex flex-col gap-3 "> <h1>Empty Cart </h1> <NavLink to={"/"} className="btn btn-info" >Shop Now</NavLink> </div>)
        }
    </div>
  )
}

export default Cart