import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addToCart } from '../redux/slice'

function Card(props) {

  const cartItems = useSelector((state)=>state.count.cartItems)
  const dispatch = useDispatch()
  console.log(cartItems)
  return (
    <div>
        <div className="card border-amber-50 mt-14 bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      src={props.items.thumbnail}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {props.items.title}
      <div className="badge badge-secondary">{props.items.category}</div>
    </h2>
    <p>{props.items.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline"> {`$ ${props.items.price}`} </div>
      
    </div>
    <button onClick={()=>dispatch(addToCart(props.items))} className= "bg-blue-500 btn hover:bg-blue-600  font-semibold text-white py-2 px-4 border border-blue-500  rounded">
  Add to Cart
</button>


  </div>
</div>
    </div>
  )
}

export default Card