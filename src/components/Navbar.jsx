import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <a className="navbar-brand" href="#"> Mi<span className='colored-text'>Casa</span> </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Listings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>

                    <div>
                        <button className="btn btn-outline-primary mx-2">Login</button>
                        <button className="btn btn-success">Register</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar