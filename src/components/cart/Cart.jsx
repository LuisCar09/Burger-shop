import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'
const Cart = () =>{
    return(
        <section className="cart-section">
            <div>

                <CartItem src={burger1} alt={'Cheese Burger'} itemName={'Cheese Burger'} />
                <CartItem src={burger2} alt={'Veg Cheese Burger'} itemName={'Veg Cheese Burger'} />

                <CartItem src={burger3} alt={'Cheese Burger with French Fries'} itemName={'Cheese Burger with French Fries'} />
                

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