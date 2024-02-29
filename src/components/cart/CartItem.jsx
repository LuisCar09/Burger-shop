import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const CartItem = ({ src, alt, itemName, amount, id,patchData }) => {

    const [number, setNumber] = useState(0)
    const prevNumberRef = useRef(number)
    
    const sendDataToPatch = async (value) => {

        patchData(value,id,number)
        
        

    }
    

    const numberToAdd = async () => {
        
        const newValue = number +1
        setNumber(newValue)
        //using useRef, we ref number and then we send data to backend and avoiding multiple rendenring issues
        prevNumberRef.current = newValue
        sendDataToPatch(prevNumberRef.current)
        
    }

    const numberToSubtract = () => {
        const newValue = number - 1;
        
        newValue <= 1 ? setNumber(1):setNumber(newValue)
        
         //using useRef, we ref number and then we send data to backend and avoiding multiple rendenring issues
        newValue <=1 ? prevNumberRef.current = 1 :prevNumberRef.current = newValue;
        
        sendDataToPatch(prevNumberRef.current)
        
        

    }
    //Change number value, this value comes from confirOrdersCart, we receive this value from backend with burger's amount, then put into number variable to set it up, then this value will render on each burger to says us how many burger were chosen.
    useEffect(() => {

        setNumber(amount)
    }, [])
    
    
    // cleaning useRef to avoid any future issues in next rendering
    useEffect(() =>{
        return () => {prevNumberRef.current = null};
    },[] )
    return (
        <article>
            <div>
                <h3>{itemName}</h3>
                <img src={src} alt={alt}></img>
            </div>

            <div>
                <button onClick={numberToSubtract}>-</button>
                <span>{number}</span>
                <button onClick={numberToAdd}>+</button>
            </div>
        </article>)
}

export default CartItem;