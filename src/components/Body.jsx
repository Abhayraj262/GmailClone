
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import React from 'react'

const Body = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body
