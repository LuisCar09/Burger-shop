import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

import axios from "axios";
const API = 'http://localhost:3001/add'
// fetching data to get burgers
const getBurgers = async () =>{
    try {
        
        const response = await axios.get(API)
        return response.data
    } catch (error) {
        console.error('Error fetching data from server ',error.message);
        return []
    }
}
//terminar la carta y finalizar como va a quedar la cart, esta muy desordenada
const Delete = ({showDeleteItem})=>{
    return(
        <article id="delete-pop-up">
            <div>
                <div>
                <p>Do you want to delete this item ?</p>
                <button onClick={()=>{showDeleteItem(false)}}>Yes</button>
                <button onClick={()=>{showDeleteItem(false)}} >No</button>
                </div>
            </div>
        </article>
    )
}

const Cart = () => {
    const [burgers, setBurgers] = useState([])
    const [showOrdersItems,setShowOrdersItems] = useState(false)
    const [burgersHasChange,setBurgersHasChange] = useState(0);
    const [deleteItem,setDeleteItem] = useState(false)
    const [amount,setAmount] = useState(0)
    const [totalAmout,setTotalAmout] = useState({
        tax:0,
        shippingCharges:0,
        total : 0,
    })

    //Pracicamente podemos hacer un commit para guardar los cambios en este arreglo
    const patchData = async (value, id) => {
        
        try {
            
            if (value >= 1) {
                axios.patch(API, { value, id })
                setBurgersHasChange(prevValue => prevValue + 1)
            }else{
                setDeleteItem(true)
                // axios.delete(API,{value,id})
            }
        } catch (error) {
            console.error('Error sending data to server ',error.message);
        }
    }
    useEffect(() => {

        const fetchData = async () => {
            const getData = await getBurgers();
            let amount = null
            setBurgers(getData)
            
            if (getData.length >= 1) {
                amount = getData.reduce((accumulator,burger)=>{
                    return accumulator += burger.price * burger.quantity
                },0)
                
            }
            setAmount(amount)
        }
        fetchData()

    }, [burgersHasChange])
   
    useEffect(()=>{
    
    const tax = (amount * 0.07).toFixed(2);
    const shippingCharges = amount > 18 ? 4 : 6;
    const total = (amount + Number(tax) + shippingCharges).toFixed(2); 
    
    setTotalAmout((prevValue)=>{
        return {
            ...prevValue,
            tax: tax,
            shippingCharges : shippingCharges,
            total : total
        }
    })
   },[amount])
   
   useEffect(()=>{
    burgers.length > 0 ? setShowOrdersItems(true) : setShowOrdersItems(false)
   },[burgers])

   const showDeleteItem = (boolean) =>{
    setDeleteItem(boolean)
   }

    return (

        <section className="cart-section" >
            {deleteItem ? <Delete showDeleteItem={showDeleteItem} /> : null}
            {showOrdersItems && <div /*style={{display: !showOrdersItems? 'none': 'block'}}/>*/>

                <article>
                    {burgers && burgers.map((burger) => { return (<CartItem key={burger.id} src={burger.picture} alt={burger.name} itemName={burger.name} amount={burger.quantity} id={burger.id} patchData={patchData} />) })}
                </article>



                <aside>
                    <div>
                        <div>
                            <h2>
                                Sub Total
                            </h2>
                            <p>€<span>{amount && (amount).toFixed(2)}</span></p>
                        </div>

                        <div>
                            <h2>
                                Tax
                            </h2>
                            <p>€<span>{totalAmout && totalAmout.tax}</span></p>
                        </div>

                        <div>
                            <h2>
                                Shipping Charges
                            </h2>
                            <p>€<span>{totalAmout && totalAmout.shippingCharges}</span></p>
                        </div>

                        <div>
                            <h2>
                                Total
                            </h2>
                            <p>€<span>{totalAmout && totalAmout.total}</span></p>
                        </div>
                    </div>

                    <div id="button-container">
                    <button> <Link to={'/shipping'}>Checkout</Link> </button>
                    </div>
                </aside>
                
            </div>}
            {showOrdersItems !== true ? <div id="not-order-yet">
                <div>
                    <div>
                        <h2>Not order yet, make you order.</h2>
                        <button><Link to={'/menu'}>Go to menu</Link></button>
                    </div>
                </div>
            </div> : null} 

        </section>
    )
}

export default Cart;

