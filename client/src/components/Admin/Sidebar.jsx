import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
   
    <div className="h-screen w-80 bg-white shadow border-r fixed top-[70px] left-0 z-50 px-5 py-6">
      
      {/* Logo at the top */}
      <div className="mb-10">
     
      </div>

      {/* Sidebar Links */}
      <NavLink
        end={true}
        to="/admin"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer rounded-full ${
            isActive && "bg-primary/12 border-r-4 border-primary"
          }`}>
        <img src={assets.home_icon} alt="" className="min-w-4 w-5" />
        <p className="hidden md:inline-block">Dashboard</p>
      </NavLink>

      <NavLink
        to="/admin/addBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer rounded-full ${
            isActive && "bg-primary/12 border-r-4 border-primary"
          }`}>
        <img src={assets.add_icon} alt="" className="min-w-4 w-5" />
        <p className="hidden md:inline-block">Add Blogs</p>
      </NavLink>

      <NavLink
        to="/admin/listBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer rounded-full ${
            isActive && "bg-primary/12 border-r-4 border-primary"
          }`}>
        <img src={assets.list_icon} alt="" className="min-w-4 w-5" />
        <p className="hidden md:inline-block">Blog lists</p>
      </NavLink>

      <NavLink
        to="/admin/comments"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer rounded-full ${
            isActive && "bg-primary/12 border-r-4 border-primary"
          }`}>
        <img src={assets.comment_icon} alt="" className="min-w-4 w-5" />
        <p className="hidden md:inline-block">Comments</p>
      </NavLink>
    </div>
  )
}

export default Sidebar
