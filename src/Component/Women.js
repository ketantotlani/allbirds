import React, { Component } from 'react'
import Shoe1 from '../Assets/Women1.jpg'
import Shoe2 from '../Assets/Womens2.jpg'
import Shoe3 from '../Assets/Womens3.jpg'




export default class Women extends Component {
    render() {
        
        return (
            <section id="womens" className="container my-4">
                <h2 className="text-center text-md-start my-5">
                WOMEN'S SHOES 
                </h2>
                <div className="row row-cols-1 row-cols-md-3 g-5 ">
                    <div className="col">
                        <div className="card h-100 shadow nike-shoe-card">
                            <img src={Shoe1} className="card-img-top nike-shoe-img casual-shoe-img" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">
                                Women's Tree Pipers <hr />
                                </h5>
                                <p className="card-text">
                                Classic Low Top Sneaker
                            </p>
                            
                            </div>
                            

                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow nike-shoe-card">
                            <img src={Shoe2} className="card-img-top nike-shoe-img casual-shoe-img" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">
                                   Women's Tree Breezers <hr />
                                </h5>
                                <p className="card-text">
                                Breezy Feel, Light Material
                            </p>
                            
                            </div>
                            

                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 shadow nike-shoe-card">
                            <img src={Shoe3} className="card-img-top nike-shoe-img casual-shoe-img" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">
                                Women's Tree Loungers <hr />
                                </h5>
                                <p className="card-text">
                                Soft Feel, Cozy Material
                            </p>
                            
                            </div>
                            

                        </div>
                    </div>


                </div>
                {/* <hr /> */}
            </section>
        )
    }
}
