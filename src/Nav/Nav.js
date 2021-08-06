import React, { useContext } from 'react'
import Logo from '../Assets/allbirds-logo.svg'
import {GlobalState} from '../GlobalState'
import {Link} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

export default function Nav() {
    const [state, cart, setCart]  = useContext(GlobalState);

        return (
            <nav className="container navbar navbar-expand-lg  navbar-light pt-4 fixed-top navclass">
                <div className=" container-fluid ">
                    <Link to="/" className="navbar-brand me-auto">
                    <img src={Logo} width="100em" alt="" />
                    </Link>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" collapse navbar-collapse  justify-content-end " id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <a className="nav-link mx-1 linkscss" href="#mens" >MEN</a>
                            <a className="nav-link mx-1 linkscss" href="#womens">WOMEN</a>
                            <a className="nav-link mx-1 linkscss" href="#newarrivals" >NEW ARRIVALS</a>
                            <a className="nav-link mx-1 linkscss" href="#sustainability">SUSTAINABILITY</a>
                            <a className="nav-link mx-1 linkscss" href="#suscribe">SUBSCRIBE</a>
                            <div className="dropdown show">
                                <Link className="btn btn-light "   role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <FaShoppingCart color="black" fontSize="15px"/>
                                    <div style={{color: "black"}} className=" badge">{cart.length}</div>
                                </Link>

                                <div className="dropdown-menu " aria-labelledby="dropdownMenuLink">
                                {cart.length>0 ? (
                                <>
                                    {
                                        cart.map((prod) => {
                                            return(
                                            <span className="cartitem" key={prod.data.id}>
                                                <img src={prod.data.src} className="cartItemImg" alt={prod.data.name} />
                                                <div className="cartItemDetail">
                                                    <span>{prod.data.name}</span>
                                                    <span className=" font-monospace" style={{marginRight: "30px"}}>${prod.data.price}</span>
                                                </div>
                                                <AiFillDelete
                                                fontSize="20px"
                                                style={{cursor: "pointer"}}
                                                onClick={()=> setCart(prevCart => prevCart.filter((item) => item.data.id !== prod.data.id)
                                                )}/>
                                            </span>
                                        )})}
                                        <Link to="/cart">
                                            <div className="btn" style={{width:"95%", margin: "0 10px"}}>
                                                Go To Cart
                                            </div>
                                        </Link>
                                    </> ) : (
                                <span style={{padding: 10}}>Cart is Empty!</span>
                                )}
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    
}
