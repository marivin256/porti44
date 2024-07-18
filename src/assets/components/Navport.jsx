import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '/src/assets/components/logo.jpg';

function Port() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar border-b border-yellow-500 shadow-lg">
        <div className="nav-container">
          <NavLink  to="/" className="nav-logo">
          <img
                className="h-10 w-auto z-10 ml-2"
                src={logo}
                alt="Marvitech logo"
              />
            
            <h1 className=" text-white text-4xl font-bold ml-2"
                >Marvi<span className="text-yellow-500">Tech</span></h1>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/skills"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              Skills
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            

            {click ? (
              <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"/></svg> {" "}
              </span>
            ) : (
              <span className="icon">
                 <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M20.75 7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75" clip-rule="evenodd"/></svg>
             
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Port;