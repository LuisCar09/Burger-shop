import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Fade from '@mui/material/Fade';
import CartItem from "./CartItem";



const ConfirmOrdersCart = ({ isOpenCart, isClose }) => {
    const [counter, setCounter] = useState(0)
    const [amount, setAmount] = useState(0)
    const [burgers, setBurgers] = useState([])
    const [fullPrice, setFullPrice] = useState({
        tax: 0,
        shippingCharges: 0,
        total: 0
    })
    
    const patchData = async (value, id) => {
        
        try {

            //If number equals to 1 or higher send to backend value of id and number, then at the backend will check it out if id exist on this, if exist it will change value on backend to show us the correct data on rendering data in card item
            if (value >= 1) {
                await axios.patch('http://localhost:3001/add', { id, value })
                getBurgers()//after sent data to patch, I call getBurger to update (burgers) and update with new values
            }
        } catch (error) {
            console.error('Error sending data to backend', error.message);
        }

    }

    //it will call every time component is rendering

    const getBurgers = async () => {
        try {

            const response = await axios.get('http://localhost:3001/add')
            //  !response.data.length < 1 ? setBurgers(response.data) : 
            if (!response.data.length < 1) {
                setBurgers(response.data)
            }

        } catch (error) {
            console.error('Error fetching data', error);
        }

    }

    getBurgers();


    //here we request backend data to calculate subtotal of the burgers chosen by client
    useEffect(() => {
        const getSubtotal = async () => {

            let value = 0
            //I setted it up to restar value to 0, that's I avoid to add any preview value
            setAmount(0)
            if (burgers.length > 0) {

                value = burgers.reduce((accumulator, burger) => {
                    return accumulator + Number(burger.price) * burger.quantity
                }, 0)

                setAmount((prevValue) => {
                    //I have to review this because I have to change it
                    const newValue = prevValue + value
                    setAmount(newValue)
                })

            }
        }
        getSubtotal()

    }, [burgers])

    useEffect(() => {
        //Here we calculate subtotal money and  then add tax,shipping charges 
        const totalMoney = () => {
            const number = amount
            const tax = Number((number * 0.07).toFixed(2))
            const shippingCharges = number > 18 ? 4 : 6;
            const total = number + tax + shippingCharges;

            setFullPrice((prevValue) => {
                return {
                    ...prevValue,
                    tax: tax,
                    shippingCharges: shippingCharges,
                    total: total
                }
            })

        }
        totalMoney()
    }, [amount])

    //Aqui evitamos que el listener se ejecute cuando se haga click dentro del componente, de esta forma counter solo aumentara cuando el click sea fuera de este componente
    const handlerClickInsideCart = (event) => {
        event.stopPropagation()
    }

    useEffect(() => {

        //Al realizar click fuera del componente se le sumara 1 a la variable counter.
        const handlerToOpen = () => {
            setCounter((prevValue) => { return (prevValue + 1) })

        }

        window.addEventListener('click', handlerToOpen)

        return (() => { window.removeEventListener('click', handlerToOpen) })

    }, [])


    //Utilizamos useEffect para solo cuando se carge en componente y haya cambio en las dependencias(variables) counter y isClose se ejecute este codigo, si se realiza click fuera del componente se va a cerrar ya que contador pasa a valer 2
    useEffect(() => {
        if (counter > 1) {
            isClose(false)
            setCounter(0)
        }
    }, [counter, isClose])





    //Creamos una variable con todo el codigo html para poder luego utilizar el componenete <Fade> y haga el efecto que queremos
    const item = <div className="confirm-orders-cart" onClick={handlerClickInsideCart}>
        {/* Dentro del componente se van a agregar la hamburguesas ordenadas */}
        <ul>

            {
                
                burgers && burgers.map((burger) => { return (<CartItem key={burger.id} src={burger.picture} alt={burger.name} itemName={burger.name} amount={burger.quantity} id={burger.id} patchData={patchData} />) })
            }
        </ul>


        {burgers.length > 0 && <aside>
            <div>
                <h2>
                    Sub Total
                </h2>
                <p>€<span >{amount && amount.toFixed(2)}</span></p>
            </div>

            <div>
                <h2>
                    Tax
                </h2>
                <p>€<span>{fullPrice && fullPrice.tax}</span></p>
            </div>

            <div>
                <h2>
                    Shipping Charges
                </h2>
                <p>€<span>{fullPrice && fullPrice.shippingCharges}</span></p>
            </div>

            <div>
                <h2>
                    Total
                </h2>
                <p>€<span>{fullPrice && (fullPrice.total).toFixed(2)}</span></p>
            </div>

        </aside>
        }
        {burgers.length > 0 && <Link to={'/order'}>
            <button onClick={() => { setCounter((prevValue) => { return (prevValue + 1) }) }}>Checkout</button>
        </Link>}
    </div>



    return (
        //
        <Fade in={isOpenCart} timeout={300} >{item}</Fade>
    )
}

export default ConfirmOrdersCart;

