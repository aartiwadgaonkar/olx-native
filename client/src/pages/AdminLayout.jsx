import React from 'react'
import Navbar from '../componenets/Navbar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return <>
  <Navbar/>
  <Outlet/>
  </>
}

export default AdminLayout