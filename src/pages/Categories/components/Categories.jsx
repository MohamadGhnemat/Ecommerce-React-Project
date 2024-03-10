import axios from "axios";
import { useEffect, useState } from "react"

import {  Pagination } from 'swiper/modules';

import {  NavLink, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './categories.css';


import { EffectCube } from 'swiper/modules';

function Products() {
  const [products,setProducts] = useState([]);
  const getProducts = async () => {
    const {data} = await axios.get(`${import.meta.env.VITE_API}/categories/active?page=1&limit=10`)
    console.log(data.categories);
    setProducts(data.categories);
  }
 useEffect( () => {
    getProducts()   
} , [])


  return (
    
    <div className="categories">
    <Swiper
    effect={'cube'}
    grabCursor={true}
    cubeEffect={{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }}
    pagination={true}
    modules={[EffectCube, Pagination]}
    className="mySwiper"
  >
        

       {products.map( product => (
        //  onClick={() => getProductsFromCategories(product._id)}
        <SwiperSlide key={product._id}>
        <NavLink to={'/products/category/'+product._id}><img src={product.image.secure_url}   alt="product-picture"      
 /></NavLink>
        </SwiperSlide>
      )
        )}
  </Swiper>
  </div>

   
       
        
    
  )
}

export default Products
