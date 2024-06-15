import React from 'react'
import NavBar from '../Components/NavBar'
import Menu from '../Components/Menu'
import FoodItems from '../Components/FoodItems'
import Cart from '../Components/Cart'

const Home = () => {
  return (
    <>
    <NavBar/>
    <Menu />
    <FoodItems/>
    <Cart/>
    </>
  )
}

export default Home