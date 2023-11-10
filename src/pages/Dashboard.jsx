import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {

const navigate = useNavigate();
const handleLogOut =()=>{
navigate("/login");
toast("LogOut succesfull");
  };
  return (
    <div>Dashboard
      <ToastContainer />
      <button  onClick={handleLogOut}  type="button"className=" py-5  bg-primary hover:bg-opacity-90 shadow-soft-2xl mr-2 flex h-8 items-center w-full  justify-center bg-center stroke-0 text-center xl:py-5 text-white  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5  ">
       LogOut
      </button>
                                    
    </div>
  )
}

export default Dashboard