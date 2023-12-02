import React from 'react'
import logo from "../images/raffleIcon.png"
import Wallet from './wallet'
import "../style/navbar.css"
import ConnectButton from './walletConnect'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <div className='logoArea'>
              <img src={logo} className='logo w-16 m-2' />
            </div>
            <div className="titleArea w-68">
              <h1 className='title text-white text-5xl'>Lotto</h1>
            </div>
            <div className="navbar-nav">
                <Link to={""} className='text-white mx-2 text-xl mt-1'><i class="fa-brands fa-facebook"></i></Link>
                <Link to={""}  className='text-white mx-2 text-xl mt-1'><i class="fa-brands fa-twitter"></i></Link>
                <Link to={""}  className='text-white mx-2 text-xl mt-1'><i class="fa-brands fa-instagram"></i></Link> 
                <Link to={""}  className='text-white ml-2 text-xl mt-1 mr-10'><i class="fa-brands fa-youtube"></i></Link>             
                <ConnectButton/>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
