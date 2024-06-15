import React, { useEffect, useState } from 'react'
import FoodData from './FoodData'
import { useDispatch, useSelector } from 'react-redux'
import { setCategories } from '../Redux/Slices/CategorySlice'

const Menu = () => {
  const [category, setCategory] = useState([])

  const dispatch = useDispatch()
  const selectedCategory = useSelector((state) => state.category.category)

  const listUniqueCategory = () => {
    const UniqueCategory = [...new Set(FoodData.map((food) => food.category))]
    setCategory(UniqueCategory)
    console.log(UniqueCategory)
  }

  useEffect(() => {
    listUniqueCategory()
  }, [])

  return (
    <div className='ml-6'>
      <h3 className='text-xl font-semibold animate-pulse'>Discover the finest dining options 🍴</h3>
      <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>

      <button 
            onClick={()=> dispatch(setCategories("All"))}
            className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              All
              </button>

        {category.map((category, index) => {
          return (
            <button 
            onClick={()=> dispatch(setCategories(category))}
            key={index} 
            className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              {category}
              </button>
          )
        })}
      </div>
    </div>
  )
}

export default Menu;