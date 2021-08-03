import React, { Component } from 'react'
import Shoe1 from '../Assets/New1.jfif'
import Shoe2 from '../Assets/New2.jfif'
import Shoe3 from '../Assets/New3.webp'



export default class NewArrivals extends Component {
    render() {
        
        return (
            <section id="newarrivals" className="container my-4">
                <h2 className="text-center text-md-start my-5">
                NEW ARRIVALS
                </h2>
                <div className="row row-cols-1 row-cols-md-3 g-5 ">
                    <div className="col">
                        <div className="card h-100 shadow nike-shoe-card">
                            <img src={Shoe1} className="card-img-top nike-shoe-img casual-shoe-img" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">
                                Women's Tree Runners <hr />
                                </h5>
                                <p className="card-text">
                                Made With Eucalyptus Tree
                            </p>
                            
                            </div>
                            

                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow nike-shoe-card">
                            <img src={Shoe2} className="card-img-top nike-shoe-img casual-shoe-img" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">
                                Men's Wool Dasher Mizzles <hr />
                                </h5>
                                <p className="card-text">
                                Water-Repellent Sneaker
                            </p>
                            
                            </div>
                            

                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 shadow nike-shoe-card">
                            <img src={Shoe3} className="card-img-top nike-shoe-img casual-shoe-img" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">
                                Women's Tree Dashers <hr />
                                </h5>
                                <p className="card-text">
                                Supportive Dual-Density Sugarcane Midsole
                            </p>
                            
                            </div>
                            

                        </div>
                    </div>


                </div>
                <hr />
            </section>
        )
    }
}
