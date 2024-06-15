import React from 'react'

const NavBar = () => {
    return (
        <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-10">
            <div>
                <h1 className='text-5xl font-bold animate-bounce text-red-800 '>HungryHub</h1>
                <h3 className='text-xl font-bold text-gray-700'>{new Date().toUTCString().slice(0, 16)}</h3>
            </div>
            <div>
                <input
                    type="search"
                    name="Search"
                    placeholder="Search Here"
                    autoComplete='off'
                    className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]' />
            </div>
        </nav>
    )
}

export default NavBar