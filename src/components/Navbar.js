import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  
  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.youtube.com/watch?v=xvm3X1oyTL8&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=6">{props.about}</a>
          </li>

        </ul>
        
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder={props.search} aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
         <div className="form-check form-switch">
        <input classnAME="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
        </div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={
    title:PropTypes.string,
    aboutText:PropTypes.string
}