import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

import axios from "axios";


const getBurgers = async () =>{
    try {
        
        const response = await axios.get('http://localhost:3001/add')
        
        return response.data
    } catch (error) {
        console.error('Error fetching data from server ',error.message);
        return []
    }
}

const Cart = () => {
    const [burgers, setBurgers] = useState([])

    const patchData = async (value, id) => {
        console.log(value, id);

        try {
            if (value >= 1) {
                axios.patch('http://localhost:3001/add', { value, id })
            }
        } catch (error) {
            console.error('Error sending data to server ',error.message);
        }
    }
    useEffect(() => {

        const fetchData = async () => {
            const getData = await getBurgers()
            console.log(getData);
            setBurgers(getData)
        }
        fetchData()

    }, [])



    return(
        <section className="cart-section">
            <div>
            
                {burgers && burgers.map((burger) => {return (<CartItem key={burger.id} src={burger.picture}  alt={burger.name} itemName={burger.name} amount={burger.quantity} id={burger.id} patchData ={patchData} />)})}
                
                

                <aside>
                    <div>
                        <h2>
                            Sub Total
                        </h2>
                        <p>€<span>2000</span></p>
                    </div>

                    <div>
                        <h2>
                            Tax
                        </h2>
                        <p>€<span>360</span></p>
                    </div>

                    <div>
                        <h2>
                            Shipping Charges
                        </h2>
                        <p>€<span>200</span></p>
                    </div>

                    <div>
                        <h2>
                            Total
                        </h2>
                        <p>€<span>2560</span></p>
                    </div>
                    
                </aside>
                <div>
                <button> <Link to={'/shipping'}>Checkout</Link> </button>
                </div>
            </div>

        </section>
    )
}

export default Cart;