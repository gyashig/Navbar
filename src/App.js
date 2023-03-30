import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacts from './Component/Contacts/Contacts'
import AboutUs from './Component/AboutUs/AboutUs'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import Profile from './Component/Profile/Profile'



function Head() {


  
  return (
    <BrowserRouter>
      {
         (
          <div className='app'>
            <Header />
            <div className='app_body'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/contacts' element={<Contacts/>} />
              </Routes>
            </div>
            {/* 
      
        <div className='app_body'>
          <AboutUs />
        </div>

        <Login /> */}

          </div>
        ) 
      }
   
      
     
    </BrowserRouter>

  
  )
}

export default Head;