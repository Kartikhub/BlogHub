import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './screens/Signup'
import { Blog } from './screens/Blog'
import { Signin } from './screens/Signin'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
