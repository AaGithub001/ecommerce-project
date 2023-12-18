import axios from 'axios'
import React, { useState } from 'react'

const Product = () => { 
const [products, setProducts] = useState([]);
  axios.get("https://achyut.acetechnepal.com/products/")
  .then((res)=>{
    console.log(res.data);
    setProducts(res.data);
  })
  return (
    <div className='container mx-auto mt-8 ml-48'>
    <table  className='w-full mt-8 ml-4 mb-4 text-sm font-semibold'>
      <thead>
        <th> Product Name</th>
        <th>Price</th>
        <th>Description</th>
        <th>Category</th>
      </thead>
      <tbody>
        {products.map(items=>(
        <tr>
          <td>{items.name}</td>
          <td>{items.price}</td>
          <td>{items.description}</td>
          <td>{items.category}</td>
        </tr>
        ))}
        
      </tbody>
    </table>
    </div>
  )
}

export default Product