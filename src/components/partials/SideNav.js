import React from 'react'
import { Link } from 'react-router-dom'



function SideNav() {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
      <Link to="/">Home</Link>
      <Link to="/Contacts">Contacts</Link>
    </div>
  )
}

export default SideNav
