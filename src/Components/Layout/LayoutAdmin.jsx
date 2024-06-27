import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../sideBar/SideBar'

const LayoutAdmin = () => {
  return (
    <div className='d-flex'>
    <div style={{backgroundColor:'rgba(31, 42, 68, 1)'}}>
    <SideBar/>
    </div>
      <div className='flex-grow-1' style={{overflow: 'auto'}}>
      <Outlet />
      </div>
      
    </div>
  )
}

export default LayoutAdmin
