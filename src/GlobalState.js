import React, {createContext, useState} from 'react'
import {UserAPI} from './API/UserAPI'


//Create Context is uses to create create context provider
export const GlobalState = createContext();


export default function Provider(props) {

    let cartItems = []
    // state
    const [cart, setCart] = useState(cartItems);

    const state = {
        userAPI: UserAPI
    };
    
    return (
        <GlobalState.Provider  value={[state,cart,setCart]}>
            {props.children}  
        </GlobalState.Provider>
    )
}