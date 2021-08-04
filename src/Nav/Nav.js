import React, { Component } from 'react'
import Logo from '../Assets/allbirds-logo.svg'


export default class Nav extends Component {
    render() {
        return (
            <nav className="container navbar navbar-expand-lg  navbar-light pt-4 fixed-top navclass">
                <div className=" container-fluid ">
                    <a className="navbar-brand me-auto"  href="#">
                    <img src={Logo} width="100em" alt="" />
                    </a>
                    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className=" collapse navbar-collapse  justify-content-end " id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <a className="nav-link mx-1 linkscss"  onClick={() => document.getElementById('mens').scrollIntoView({ behavior: 'smooth' }- "30px")}>MEN</a>
                            <a className="nav-link mx-1 linkscss" onClick={() => document.getElementById('womens').scrollIntoView({ behavior: 'smooth' }- "30px")}>WOMEN</a>
                            <a className="nav-link mx-1 linkscss" onClick={() => document.getElementById('newarrivals').scrollIntoView({ behavior: 'smooth' }- "40px")} >NEW ARRIVALS</a>
                            <a className="nav-link mx-1 linkscss" onClick={() => document.getElementById('sustainability').scrollIntoView({ behavior: 'smooth' }- "200px")}>SUSTAINABILITY</a>
                            <a className="nav-link mx-1 linkscss" onClick={() => document.getElementById('suscribe').scrollIntoView({ behavior: 'smooth' })}>SUBSCRIBE</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
