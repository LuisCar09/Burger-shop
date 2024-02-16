import React, { useEffect, useState } from "react";

const CartItem = ({ src, alt, itemName }) => {

    const [number, setNumber] = useState(0)

    const numberToAdd = () => {
        setNumber(prevValue => prevValue + 1)

    }
    const numberToSubtract = () => {


        setNumber((prevValue) => {
            if (prevValue <= 0) {
                return 0
            }else{
                return prevValue - 1
            }
        })
        
    }


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