// import { useEffect, useState } from 'react';
import '../../scss/header-footer.scss'
// import artsbyjpLogo from '../assets/minimal.png'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/moreminimal.png';


export default function Navigation() {
    return (
        <>

            <nav className='nav-container'>
                <img id="logo" className='circle' src={logo}></img>

                {/* <ul id="nav-links">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" href="#">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-link" href="#">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Work" className="nav-link" href="#">Work</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Quote" className="nav-link" href="#">Get A Quote</Link>
                    </li>
                </ul> */}

            </nav >
            <Outlet />
        </>
    )
}