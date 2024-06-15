import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import CartItems from './CartItems'
import { useSelector } from 'react-redux' // it is used to access the state from the store
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const [showCart, setShowCart] = useState(false)
  const CartItem = useSelector((state) => state.cart.cart) //  Here, the very 1st "cart" is of store's reducer and 2nd one is of cartslice's initial state.

  const totalItem = CartItem.reduce((totalQty, item) => totalQty + item.qty, 0)

  const totalPrice = CartItem.reduce((total, item) => total + item.qty * item.price, 0)

  const navigate = useNavigate()
  
  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 ${showCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>

        <div className='flex justify-between items-center my-3'>
          <span className='text-xl font-bold text-gray-800'>My Orders</span>
          <IoMdClose onClick={() => setShowCart(!showCart)} className='border-2 border-grey-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer' />
        </div>

        {CartItem.length > 0 ?
          CartItem.map((food) => {
            return (
              <CartItems
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            )
          })
          :
          <h2 className="text-center text-xl font-bold text-red-600 animate-pulse fixed top-80 right-16">Cart is Empty 🥲</h2>}

        <div className='absolute bottom-0'>
          <h3 className='font-semibold text-gray '>Items :{totalItem}</h3>
          <h3 className='font-semibold text-gray '>Total Amount :{totalPrice}</h3>

          <hr className='w-[90vw] lg:w-[18vw] my-2' />

          <button onClick={()=> navigate("/thankyou")} className='bg-green-500 font-bold px-3 text-white-py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Checkout</button>
        </div>
      </div>
      <FaShoppingCart onClick={() => setShowCart(!showCart)} className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${totalItem > 0 && "animate-bounce delay-500 transition-all"} `} />
    </>
  )
}

export default Cart