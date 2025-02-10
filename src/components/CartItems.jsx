import React from 'react'
import { useDispatch } from 'react-redux'
import { removeToCart } from '../redux/slice'

function CartItems({data}) {
  const dispatch = useDispatch()
  return (
    <>
    <div>
         <div className="">
                <div className="card mt-14 bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              src={data.thumbnail}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {data.title}
              <div className="badge badge-secondary">{data.category}</div>
            </h2>
            <p>{data.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline"> {`$ ${data.price}`}</div>
            </div>
            <button onClick={()=>dispatch(removeToCart(data))}  className=" btn bg-red-500 hover:bg-red-700 font-semibold text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
          Remove Item
        </button>
        
        
          </div>
        </div>
            </div>
    </div>
    </>
  )
}

export default CartItems