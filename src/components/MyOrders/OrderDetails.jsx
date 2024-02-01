import React from "react";

const OrderDetails = () => {
    return(
        <main className="order-details">
            <article>
                <h1>Order Details</h1>

                <div>
                    <h2>Shipping</h2>
                    Adress 123 Street Wall
                
                    <h2>Contact</h2>
                    Phone +34 123456789
               
                    <h2>Status</h2>
                    <p>Order Status:Processing</p>
                    <p>Placed at 23-02-2002</p>
                    <p>Delivered at: 23-02-2002 </p>
                

                
                    <h2>Payment</h2>
                    <p>Payment method:COD</p>
                    <p>Payment Reference #asfdasweq</p>
                    <p>Paid At 23-02-2002</p>
                    
                
                    <h2>Amount</h2>
                    <p>Item amount:€2200</p>
                    <p>Shipping Charges:€10</p>
                    <p>Tax:€220</p>
                    <p>Total Amount: 2430</p>
                </div>

                <article >
                <h2>ordered items</h2>
                <div>
                    <p>Chese Burger</p>
                    <b>12x232</b>
                </div>
                <div>
                    <p>Veg Cheese Burger</p>
                    <b>10x500</b>
                </div>
                <div>
                    <p>Burger Fries</p>
                    <b>10x1800</b>
                </div>
                <div>
                    <p>Sub Total</p>
                    <b>2132</b>
                </div>
            </article>
            </article>
        </main>

    )
}

export default OrderDetails;