import React from 'react'
import {Routes, Route, } from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Services from '../Pages/Services'
import WaterConsumptionApp from './WaterConsumptionApp'


export default function Router() {
  return (
    <div>


    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/WaterConsumptionApp' element={<WaterConsumptionApp/>}/>

    </Routes>

    </div>
  )
}
