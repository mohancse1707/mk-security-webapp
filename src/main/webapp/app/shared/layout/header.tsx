/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink as Link } from 'react-router-hash-link';

export interface IHeaderProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const Header = (props: IHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <div className="fixed-top menu-banner">
        <div className="container mt-header-menu-61">
          <nav className="navbar navbar-expand-md navbar-dark bg-purple">

            <Link to="/home">
              <FontAwesomeIcon color="white" size="2x" icon="home" />
            </Link>

            <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
              <span className="navbar-toggler-icon"/>
            </button>

            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Dashboard <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <Link to="/user">
                   <span className="nav-link active">User</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dynamic">
                    <span className="nav-link active">Dynamic Table</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Switch account</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
                  <div className="dropdown-menu" aria-labelledby="dropdown01">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
          <nav className="mt-1" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Library</a></li>
              <li className="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
