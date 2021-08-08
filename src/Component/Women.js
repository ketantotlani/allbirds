import React, { useState,useContext, useEffect } from 'react'
import {GlobalState} from '../GlobalState'




export default function Women() {
    const [state, cart, setCart]  = useContext(GlobalState);


    const [womens, setWomens] = useState([])
    useEffect(() => {
        function getAll() {
            state.userAPI.getAll().then(res => {
                console.log(res.data);
                setWomens(res.data.womensshoes);
            }).catch(err => console.log(err));   
        }
        getAll();
    }, [])
    
        
        return (
            <section id="womens" className="container my-4">
                <h2 className="text-center text-md-start my-5">
                WOMEN'S SHOES 
                </h2>
                <div className="row row-cols-1 row-cols-md-3 g-5 ">
                {
                        womens.map((data,key) => {
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
                                    (cart.some(p => p.data.id === data.id) ? <button className="btn btn-danger w-100" onClick={()=> setCart(prevCart => prevCart.filter((item) => item.data.id !== data.id))}>Remove This Item</button> :
                                    (
                                <button className="btn btn-dark w-100" onClick={()=> cart.some(p=>p.data.id === data.id)?  []  : setCart(prevCart => [...prevCart, {data}] )}>Add to Cart</button>

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
