import React from 'react'
import Home from '../pages/Dashboard/Home'
import { Link } from 'react-router-dom'

const DashBoardSidebar = () => {
  return (
    <div className="w-48 top-24 bg-gray-300 h-screen fixed left-0 top-o">
        <div className='m-4'> 
        <ul>
            <Link to='/dashboard'><li>Home</li> </Link>
            <Link to='/dashboard/products'><li>Product</li> </Link>
            <Link to='/dashboard/addproducts'><li>Add Product</li> </Link>
            <Link to='/dashboard/settings'><li>Setting</li> </Link>    
        </ul>
        </div>
    </div>
  )
}

export default DashBoardSidebar