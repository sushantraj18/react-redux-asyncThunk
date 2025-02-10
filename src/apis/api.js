import axios from "axios";


const url = "https://dummyjson.com/products"
// const url = "https://fakestoreapi.com/products"

export const productCall = async()=>{
    try{
        const product = await axios.get(url);
        return product.data

    }catch(e){
        console.log(e)
    }
}