/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

import axios from "axios";
const API = 'https://server-burger-shop.onrender.com/add'
// fetching data to get burgers
const getBurgers = async () => {
    try {

        const response = await axios.get(API)
        return response.data
    } catch (error) {
        console.error('Error fetching data from server ', error.message);
        return []
    }
}

const Delete = ({ showDeleteItem, deleteItem }) => {

    return (
        <article id="delete-pop-up">
            <div>
                <div>
                    <p>Do you want to delete this item ?</p>
                    <button onClick={() => {
                        // deleteItem(true)
                        showDeleteItem(false)
                    }}>Yes</button>
                    <button onClick={() => {
                        // deleteItem(false)
                        showDeleteItem(false)
                    }} >No</button>
                </div>
            </div>
        </article>
    )
}

const Cart = () => {
    const [burgers, setBurgers] = useState([])
    const [showOrdersItems, setShowOrdersItems] = useState(false)
    const [isShowWantToDeleteItem, setIsShowWantToDeleteItem] = useState(false)
    // const [deleteItem, setDeleteItem] = useState(false)
    const [burgersHasChange, setBurgersHasChange] = useState(0);
    const [amount, setAmount] = useState(0)
    const [totalAmout, setTotalAmout] = useState({
        tax: 0,
        shippingCharges: 0,
        total: 0,
    })


    const patchData = async (value, id) => {
        
        try {

            if (value >= 1) {

                await axios.patch(API, { value, id })
                setBurgersHasChange(prevValue => prevValue + 1)
            }
        } catch (error) {
            console.error('Error sending data to server ', error.message);
        }
    }
    
    const deleteData = async (id) => {

        try {
           
            const detele = await axios.delete(`${API}/${id}`)
            
            setBurgers(burgers.filter(burgers => burgers.id !== id))
        }
        catch (error) {
            console.log(`Error sending data to serve ${error.message}`)
        }
    }




    useEffect(() => {

        const fetchData = async () => {
            const getData = await getBurgers();
            let amount = null
            setBurgers(getData)

            if (getData.length >= 1) {
                amount = getData.reduce((accumulator, burger) => {
                    return accumulator += burger.price * burger.quantity
                }, 0)

            }
            setAmount(amount)
        }
        fetchData()

    }, [burgersHasChange])

    useEffect(() => {

        const tax = (amount * 0.07).toFixed(2);
        const shippingCharges = amount > 18 ? 4 : 6;
        const total = (amount + Number(tax) + shippingCharges).toFixed(2);

        setTotalAmout((prevValue) => {
            return {
                ...prevValue,
                tax: tax,
                shippingCharges: shippingCharges,
                total: total
            }
        })
    }, [amount])

    //Show us not-order-yet section
    useEffect(() => {
        burgers.length > 0 ? setShowOrdersItems(true) : setShowOrdersItems(false)
    }, [burgers])



    return (

        <section className="cart-section" >
            {isShowWantToDeleteItem ? <Delete showDeleteItem={setIsShowWantToDeleteItem} /> : null}
            {showOrdersItems && <div /*style={{display: !showOrdersItems? 'none': 'block'}}/>*/>

                <article>
                    {burgers && burgers.map((burger) => { return (<CartItem key={burger.id} src={burger.picture} alt={burger.name} itemName={burger.name} amount={burger.quantity} id={burger.id} patchData={patchData}  deleteItem={deleteData} />) })}

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
                         <Link to={'/shipping'}>
                         <button>Checkout</button>
                         </Link> 
                    </div>
                </aside>

            </div>}
            {showOrdersItems !== true ? <div id="not-order-yet">
                <div>
                    <div>
                        <h2>Not order yet, make you order.</h2>
                        <Link to={'/menu'}><button>Go to menu</button></Link>
                    </div>
                </div>
            </div> : null}

        </section>
    )
}

export default Cart;

