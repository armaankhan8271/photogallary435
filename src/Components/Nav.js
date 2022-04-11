import React from 'react'
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand fst-italic fontsss fs-1"  href="/">PhotsHub</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link  fs-1 text-end active" aria-current="page"  href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  fs-1 text-end"  href="/About">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link   fs-1 "  href="/Contact"  aria-current="page">Contact</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav></div>
  )
}

export default Nav