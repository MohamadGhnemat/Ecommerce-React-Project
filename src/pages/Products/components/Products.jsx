import "./Products.css"

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Products() {
 
  const {id} = useParams();
 
  const [products,setProducts] = useState([]);


const getProducts = async(id) => {

  const {data} = await axios.get(`${import.meta.env.VITE_API}/products/category/${id}`)
console.log(data.products)
setProducts(data.products)
}
useEffect( () => {
    getProducts(id)   
} , [])
  return (
    <>
 <div className="allProducts row row-cols-1 row-cols-md-3 g-4">
      {products.map( product => 
        
<div className="col "  key={product.id}>
  <div className="card h-100 product">
    <img src={product.mainImage.secure_url} className="card-img-top" alt="product-picture" />
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <div className="price"><span>Price: ${product.price}</span><span>Discount: {product.discount}</span></div>
       <hr />
      <p className="card-text">{product.slug}</p>
    </div>
  </div>
</div>



     
        
      
        
        )}

</div>
        
    </>
  )
}

export default Products
