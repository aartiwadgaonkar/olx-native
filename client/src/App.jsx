import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLogin from './pages/AdminLogin'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.min.css"
import AdminProtected from './share/AdminProtected'
import AdminLayout from './pages/AdminLayout'
import Dashboard from './pages/Dashboard'
const App = () => {
  return (
    <div>
      <p className='bg-danger p-2'>Coonected Server : {import.meta.env.VITE_BACKEND_URL}</p>
      <BrowserRouter>
      <ToastContainer/>
      <Routes>
        <Route path='/admin-login' element={<AdminLogin/>} ></Route>
        <Route path='/admin' element={<AdminProtected compo={<AdminLayout/>}/>}>
        <Route index element={<Dashboard/>}/>
        </Route>
        <Route path='*' element={<h1> page nt founde</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App