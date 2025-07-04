import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {axiosInstance} from "../Constants/axios";

const Details = () => {
  const {value}=useParams();
  const[product,setProduct]=useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axiosInstance.get(`/products/${value}`);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, []);
  
  return product?(
    <div className='w-[70%] h-full  m-auto p-[10%] flex items-center gap-6 justify-center'>
        <img className='h-[80%] ' src={product.image} alt=''/>
        <div className='container'>
            <h1 className='text-3xl font-bold'>{product.title}</h1>
            <h3 className='font-semibold text-zinc-400'>{product.category}</h3>
            <h2 className='font-semibold text-red-400'>$ {product.price}</h2>
            <p className='font-thin mb-4'>{product.description}</p>
            <Link className='py-2 mr-2 px-5 border rounded border-blue-200 text-blue-200 hover:border-blue-500 hover:text-blue-500'>Edit</Link>
            <Link className='py-2 px-5 border rounded border-red-200 text-red-200 hover:border-red-500 hover:text-red-500'>Delete</Link>
        </div>
    </div>)
    :(<p>Loading</p>);
}

export default Details