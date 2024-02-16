import {React,useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Fade from '@mui/material/Fade';
import CartItem from "./CartItem";
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'



const ConfirmOrdersCart = ({ isOpenCart, isClose }) => {
    const [counter,setCounter] = useState(0)
    
    const [amount,setAmount] = useState(0)
    
    
    //Aqui evitamos que el listener se ejecute cuando se haga click dentro del componente, de esta forma counter solo aumentara cuando el click sea fuera de este componente
    const handlerClickInsideCart = (event) => {
        event.stopPropagation()
    }

    //Al realizar click fuera del componente se le sumara 1 a la variable counter.
    const handlerToOpen = () =>{
        setCounter((prevValue) => {return(prevValue + 1)})
        
        
    }
    useEffect(()=>{
        window.addEventListener('click',handlerToOpen)
        return (() => {window.removeEventListener('click',handlerToOpen)})
    },[])
    
    
    //Utilizamos useEffect para solo cuando se carge en componente y haya cambio en las dependencias(variables) counter y isClose se ejecute este codigo, si se realiza click fuera del componente se va a cerrar ya que contador pasa a valer 2
    useEffect(()=>{
        if (counter > 1) {
            isClose(false)
            
        }  
    },[counter,isClose])


    const amountToAdd = (number) => {
        setAmount(number)
    }


    //Creamos una variable con todo el codigo html para poder luego utilizar el componenete <Fade> y haga el efecto que queremos
    const item = <div className="confirm-orders-cart" onClick={handlerClickInsideCart}>
        {/* Dentro del componente se van a agregar la hamburguesas ordenadas */}
        <ul>
        <CartItem src={burger1} alt={'Cheese Burger'} itemName={'Cheese Burger'} />
        <CartItem src={burger2} alt={'Veg Cheese Burger'} itemName={'Veg Cheese Burger'} />

        <CartItem src={burger3} alt={'Cheese Burger with French Fries'} itemName={'Cheese Burger with French Fries'} />
        <CartItem src={burger3} alt={'Cheese Burger with French Fries'} itemName={'Cheese Burger with French Fries'} />
        </ul>


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
        <Link to={'/order'}>
            <button onClick={handlerToOpen}>Checkout</button>
        </Link>
    </div>

    

    return (
        //
        <Fade in={isOpenCart} timeout={300} >{item}</Fade>
    )
}

export default ConfirmOrdersCart;
