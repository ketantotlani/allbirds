import React, { Component } from 'react'
import Sustainimg from '../Assets/sustain.webp'


export default class Sustainability extends Component {
    render() {
        
        return (
            <section id="sustainability" className="container my-4">
                                <h2 className="text-center text-md-start my-5">
                SUSTAINABILITY
                </h2>
                <div className="flex row-cols-1 row-cols-md-1 g-5 ">
                    <img src={Sustainimg} height="80%" alt="Sustainability" />
                    <div className="container-fluid p-5 text-center">
                        <h1>Made From Nature, For Nature</h1>
                        <p className=" pt-md-5">We craft with planet-friendly natural materials, like merino wool and eucalyptus trees, because they're our best chance for a sustainable future.Reducing our environmental impact has been a top priority since day one. But now, we’re taking things further. Explore our overall sustainability approach, our progress thus far, and our bold list of commitments for 2025.</p>
                        
                    </div>
                </div>
                <hr />
            </section>
        )
    }
}
