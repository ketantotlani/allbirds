import React, { useState, useContext, useEffect } from 'react'
import { GlobalState } from '../GlobalState'




export default function NewArrivals() {
    const [state, cart, setCart] = useContext(GlobalState);


    const [newarrivals, setNewarrivals] = useState([])
    useEffect(() => {
        function getNew() {
            state.userAPI.getAll().then(res => {
                console.log(res.data);
                setNewarrivals(res.data.record.newarrivals);
            }).catch(err => console.log(err));
        }
        getNew();
    }, [])


    return (
        <section id="newarrivals" className="container my-4">
            <h2 className="text-center text-md-start my-5">
                NEW ARRIVALS
            </h2>
            <div className="row row-cols-1 row-cols-md-3 g-5 ">
                {
                    newarrivals.map((data, key) => {
                        return (
                            <div className="col" key={key}>
                                <div className="card h-100 shadow nike-shoe-card">
                                    <img src={data.src} className="card-img-top nike-shoe-img casual-shoe-img" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {data.title} <hr />
                                        </h5>
                                        <p className="card-text">
                                            {data.text}
                                        </p>

                                        <div className="card-footer flex justify-content-center">
                                            <p className=" price font-monospace">${data.price}</p>
                                            {
                                                (cart.some(p => p.data.title === data.title) ? <button className="btn btn-danger w-100" onClick={() => setCart(prevCart => prevCart.filter((item) => item.data.title !== data.title))}>Remove This Item</button> :
                                                    (
                                                        <button className="btn btn-dark w-100" onClick={() => cart.some(p => p.data.title === data.title) ? [] : setCart(prevCart => [...prevCart, { data }])}>Add to Cart</button>

                                                    )
                                                )
                                            }
                                            {/* <button className="btn btn-dark w-100" onClick={()=> cart.some(p=>p.data.id === data.id)?  []  : setCart(prevCart => [...prevCart, {data}] )}>Add to Cart</button> */}

                                        </div>
                                    </div>


                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* <hr /> */}
        </section>
    )

}
