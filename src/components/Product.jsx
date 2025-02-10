import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productThunk } from '../redux/slice'
import Card from './Card'

function Product() {
    const productData = useSelector((state)=>state.count.productData)
    const dispatch = useDispatch()
    console.log(productData)

    useEffect(()=>{
        dispatch(productThunk())
    },[])
  return (
    <>
    <div className="flex flex-wrap justify-center  items-center p-4 gap-4">

    {productData && productData.products? (productData.products.map((items,index)=>(
        <Card items={items} key={index} />
    ))) : <h1 className="text-4xl text-white">Loading....</h1>}
    </div>
    </>
  )
}

export default Product