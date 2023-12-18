import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardHeader from '../components/DashboardHeader';
import AddProduct from './Dashboard/AddProduct';
import Setting from './Dashboard/Setting';
import DashBoardSidebar from '../components/DashBoardSidebar';
import DashBoardFooter from '../components/DashBoardFooter';
import Product from './Dashboard/Product';
import Home from './Dashboard/Home';

function Dashboard() {

  return (
    <div> 
      {/* <ToastContainer />
      <button  onClick={handleLogOut}  type="button"className=" py-5  bg-primary hover:bg-opacity-90 shadow-soft-2xl mr-2 flex h-8 items-center w-full  justify-center bg-center stroke-0 text-center xl:py-5 text-white  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5  ">
       LogOut
      </button> */}
      <div>
      <DashboardHeader/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/products' element={<Product/>}> </Route>
        <Route path='/addproducts' element={<AddProduct/>}> </Route>
        <Route path='/settings' element={<Setting/>}> </Route>
      </Routes>
      <DashBoardSidebar/>
      <DashBoardFooter/>
    </div>
  )
}

export default Dashboard