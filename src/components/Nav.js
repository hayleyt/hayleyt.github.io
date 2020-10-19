import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav () {
   return (
      <nav className="nav" id="navbar">
         <NavLink exact={true} activeClassName='is-active' to="/">Portfolio</NavLink>
         <NavLink activeClassName='is-active' to="/blog">Blog</NavLink>
         <NavLink activeClassName='is-active' to="/about">About</NavLink>
      </nav>
   )
}

export default Nav