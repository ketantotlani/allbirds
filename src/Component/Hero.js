import React, { Component } from 'react'
import Heroimg from '../Assets/hero.webp'

export default class Hero extends Component {
    render() {
        return (

            <div className="container pt-5 textdiv">
                <div className="row d-flex align-items-center">
                    <div className="order-md-1 order-2 col-md-12">
                        <img className="w-100" src={Heroimg} alt="" />
                    </div>
                    <div className="px-5 order-md-2 order-1 col-md-6 ">
                        <h1 className="herotxt">
                        Earth-Friendly.
                        Run-Ready.
                        </h1>
                        <a className="btn btn-light pt-2 pb-2 py-4 px-4 a1" onClick={() => document.getElementById('mens').scrollIntoView({ behavior: 'smooth' }- "30px")} style={{fontWeight: "bold"}}>SHOP MEN</a>
                        <a className="btn btn-light pt-2 pb-2 py-4 px-4 a2" onClick={() => document.getElementById('womens').scrollIntoView({ behavior: 'smooth' }- "30px")} style={{fontWeight: "bold"}}>SHOP WOMEN</a>
                    </div>

                </div>
                <hr />
            </div>

        )
    }
}
