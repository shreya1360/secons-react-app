import React from "react";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container py-3">
          <a className="navbar-brand" href="#">
            <img src="https://shreya1360.github.io/Startup-landing-page-website/img/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item px-2">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#">
                  Adevrtise
                </a>
              </li>
              <li className="nav-item dropdown px-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Support
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      link1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      link2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      link3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link">Contact</a>
              </li>
            </ul>
            <button type="button" className="btn btn-outline-danger rounded-5">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
