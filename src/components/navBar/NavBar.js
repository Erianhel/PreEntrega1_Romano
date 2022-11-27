import React from 'react'
import { CartWidget } from "../cartWidget/CartWidget"
import { RiTShirtAirLine } from "react-icons/ri"

export const Navbar = () => {

    return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
                <a className="navbar-brand" href="#"><RiTShirtAirLine size={45} color={"#fff"}/><span className="text-white">Depor Indumentaria</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item p-2">
                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item p-2">
                    <a className="nav-link text-white" href="#">Remeras</a>
                    </li>
                    <li className="nav-item p-2">
                    <a className="nav-link text-white" href="#">Pantalones</a>
                    </li>
                    <li className="nav-item p-2">
                    <a className="nav-link text-white" href="#">Zapatillas</a>
                    </li>
                </ul>
            </div>
            <CartWidget/> 
        </div>
    </nav>    
    )
}