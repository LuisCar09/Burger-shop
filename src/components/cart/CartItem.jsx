import axios from "axios";
import React, { useEffect, useState } from "react";

const CartItem = ({ src, alt, itemName, amount, id }) => {

    const [number, setNumber] = useState(0)

    const sendDataToPatch = async () => {
        //If number equals to 1 or higher send to backend value of id and number, then at the backend we will check it out if id exist on this, if exist we will change value on backend to show us the correct data on rendering data in card item
        if (number >= 1) {
            await axios.patch('http://localhost:3001/add', { id, number })
        }

        
    }


    const numberToAdd = async () => {
        setNumber(prevValue => prevValue + 1)

    }

    const numberToSubtract = () => {

        setNumber((prevValue) => {
            if (prevValue <= 0) {
                return 0
            } else {
                return prevValue - 1
            }
        })

    }
    //Change number value, this value comes from confirOrdersCart, we receive this value from backend with burger's amount, then put into number variable to set it up, then this value will render on each burger to says us how many burger were chosen.
    useEffect(() => {

        setNumber(amount)
    }, [])

    //Here until number changes its value, we will call sendDataToPatch() function to send from here to backend to storage how many of each burger are.
    useEffect(() => {
        
        sendDataToPatch()
    }, [number])

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