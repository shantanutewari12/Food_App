import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Success from './Pages/Success'
import Dikkt from './Pages/Dikkt'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/thankyou' element ={<Success/>}/>
        <Route path='/*' element ={<Dikkt/>}/> // 💪yha humne star *  issliye use kiya jis se jab bhi koi success ke alawaa koi bhi Route type krega toh isspage pe aa jaaye
      </Routes>
    </BrowserRouter>
  )
}

export default App