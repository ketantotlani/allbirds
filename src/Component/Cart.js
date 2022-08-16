import React, { useState, useEffect, useContext } from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { GlobalState } from '../GlobalState';
import { Link } from 'react-router-dom'


const Cart = () => {
    const [state, cart, setCart] = useContext(GlobalState);


    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((total, item) => total + item.data.price, 0));
    }, [cart])

    return (
        <div className=" container" style={{ paddingTop: "120px" }}>
            <div className=" text-center container-fluid">

                <div className=" list-group" >
                    <Link to="/" className="btn btn-dark">Back to Home</Link>
                    {(cart.length) ? '' : (<h1 className="text-center text-lg-center text-md-center " style={{ marginTop: "15%" }}>Cart is Empty</h1>)}


                    {
                        cart.map((item => (


                            <div className=" list-group-item ">

                                <div className=" row align-items-center">
                                    <div className="col">
                                        <img src={item.data.src} alt="" style={{ width: "80px", height: "80px", borderRadius: "10%" }} />
                                    </div>
                                    <div className="col">
                                        <b> {item.data.title} </b> <br />
                                        <span className="textcart ">{item.data.text}</span>
                                    </div>
                                    <button className="col col-1  btn btn-light " onClick={() => setCart(prevCart => prevCart.filter((prod) => prod.data.title !== item.data.title)
                                    )} style={{ width: "14%" }}>
                                        <AiFillDelete fontSize="20px" />
                                    </button>

                                    <div className="col">
                                        <b className="font-monospace">${item.data.price}</b>
                                    </div>

                                </div>


                            </div>


                        )))
                    }


                </div>
                {(!cart.length) ? "" : (
                    <div className="filters summary">
                        <span className="title">
                            Subtotal <b>({cart.length})</b> items
                        </span>
                        <span style={{ fontWeight: 700, fontSize: 20 }}>
                            Total: $ {total}
                        </span>
                        <div className=" btn btn-dark" type="button" >
                            Proceed to Checkout
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Cart
