import React, { Component } from 'react'


export default class Suscribe extends Component {
    render() {
        
        return (
            <section id="suscribe" className="container my-4">
                                <h2 className="text-center  my-5">
                SUBSCRIBE
                </h2>
                <div className="flex row-cols-1 row-cols-md-1 g-5 ">
                    <div className="container-fluid p-5 text-center">
                        <h2>Want First Access?</h2>
                        <p className=" pt-md-5">Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates.</p>

                        <input type="text" placeholder="Email Address" className="subscribeinp" />
                        <a className="btn btn-dark pt-2 pb-2 py-3 px-3 a3" style={{fontWeight: "bold"}}>SIGN UP</a>

                    </div>
                </div>
                <hr />
            </section>
        )
    }
}
