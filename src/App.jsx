import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Blogs from './Pages/Blogs'
import Blog from './Pages/Blog'
import Error from './Pages/Error'
import Navbar from './Route/Navbar'


const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/blogs' element={<Blogs/>}/>
              <Route path='/blogs/:title' element={<Blog/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='*' element={<Error/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App