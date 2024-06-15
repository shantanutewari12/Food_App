import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { decrementQty, incrementQty, removeCart } from '../Redux/Slices/CartSlice'
import toast from 'react-hot-toast'

const CartItems = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch()

  return (

    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3 '>
      <MdDelete onClick={() => {
        dispatch(removeCart({ id, name, img, price, qty }))
        toast.error(`${name} Removed!`)
      }}
        className='absolute right-7 text-gray-600 cursor-pointer'
      />

      <img
        src={img}
        alt=""
        className='w-[50px] h-[50px]'
      />

      <div className='leading-5'>
        <h2 className='font-bold text-gray-800'>
          {name}
        </h2>

        <div className='flex justify-between'>
          <span className='text-green-500 font-bold'>₹{price}</span>
          <div className='flex justify-center items-center gap-2 absolute right-7'>

            <AiOutlineMinus
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" onClick={()=> qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
            } />

            <span>{qty}</span>

            <AiOutlinePlus
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" onClick={()=> dispatch(incrementQty({ id }))}/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems