import React, { Component } from 'react'
import Shoe1 from '../Assets/shoe1.jfif'
import Shoe2 from '../Assets/shoe2.webp'
import Shoe3 from '../Assets/shoe3.png'



export default class Men extends Component {
    render() {
        
        return (
            <section id="mens" className="container my-4">
                <h2 className="text-center text-md-start my-5">
                MEN'S SHOES 
                </h2>
                <div className="row row-cols-1 row-cols-md-3 g-5 ">
                    <div className="col">
                        <div className="card h-100 shadow nike-shoe-card">
                            <img src={Shoe1} className="card-img-top nike-shoe-img casual-shoe-img" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Tree Runner <hr />
                                </h5>
                                <p className="card-text">
                                Light and Breezy Sneaker
                            </p>
                            
                            </div>
                            

                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow nike-shoe-card">
                            <img src={Shoe2} className="card-img-top nike-shoe-img casual-shoe-img" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Tree Dasher <hr />
                                </h5>
                                <p className="card-text">
                                Daily Running Shoe
                            </p>
                            
                            </div>
                            

                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 shadow nike-shoe-card">
                            <img src={Shoe3} className="card-img-top nike-shoe-img casual-shoe-img" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Wool Pipers <hr />
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
