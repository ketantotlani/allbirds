import React from 'react'
import {Link} from 'react-router-dom'

export default function Pnf() {
    return (
        <div className=" container " style={{marginTop: "300px"}}>
            <div className=" container-fluid text-center">
                <h1>Page Not Found</h1>
                <Link to="/" className="btn btn-dark">Go To Home</Link>
            </div>
                
        </div>
    )
}
