import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg`}>
                <div className="container-fluid">
                    <a className={`navbar-brand fs-1 fw-bold text-${props.mode === 'light' ? 'dark' : 'light'}`}><span className='text-danger'>P</span>ORTFOLIO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={`navbar-toggler-icon bg-${props.mode === 'light' ? 'dark' : 'light'}`}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto fs-4">
                            <li className="nav-item mx-3">
                                <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item mx-3">
                                <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/about">About</Link>
                            </li> */}
                            <li className="nav-item mx-3">
                                <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/skills">Skills</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/qualifications">Qualifications</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/certificate">Certificates</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/contact">Contact</Link>
                            </li>

                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
                        </div>

                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar
