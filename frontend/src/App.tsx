import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './screens/Signup'
import {  Blogs } from './screens/Blogs'
import { Signin } from './screens/Signin'
import { Blog } from './screens/Blog'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
