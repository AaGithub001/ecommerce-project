import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

  const [inputValue, SetInputValue] = useState({
    name: "",
    price: "",
    description: "",
    category: "",

  })

  const navigate = useNavigate();
  const handleAddproduct = (e) => {
    e.preventDefault()
    axios.post("https://achyut.acetechnepal.com/products/", inputValue)
      .then(() => {
        console.log("login succesful")
        navigate("/dashboard/products");
        // toast("Login succesfull");
      })
  }

  const handleChange = (e) => {
    SetInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    })
  }
  console.log(inputValue);
  return (

    <div className="w-[400px] h-[500px] mt-8 mx-auto shadow-lg">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
          Add Products
        </h1>
        <form
          onSubmit={handleAddproduct}
          className="space-y-4 md:space-y-6"
        >
          <div>
            <label
              htmlFor="product name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Name
            </label>
            <input value={inputValue.name} onChange={handleChange}
              required
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Product name"
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Price
            </label>
            <div className="relative">
              <input value={inputValue.price} onChange={handleChange}
                type='price'
                required
                name="price"
                id="price"
                placeholder="Price"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Description
            </label>
            <input value={inputValue.description} onChange={handleChange}
              required
              type="text"
              name="description"
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Description"
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Category
            </label>
            <input value={inputValue.category} onChange={handleChange}
              required
              type="text"
              name="category"
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Category"
            />
          </div>
          <button

            type='submit'
            className=" py-5  bg-primary hover:bg-opacity-90 shadow-soft-2xl mr-2 flex h-8 items-center w-full  justify-center bg-center stroke-0 text-center xl:py-5 text-white  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5  "
          >
            Add Products
          </button>
        </form>
      </div>

    </div>

  )
}

export default AddProduct