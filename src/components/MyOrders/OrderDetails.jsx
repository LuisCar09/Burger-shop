import React from "react";

const OrderDetails = () => {
    return(
        <section className="order-details">
            <main className="order-container">
                <h1>Order Details</h1>

                <div>
                    <h2>Shipping</h2>
                    <p>Adress 123 Street Wall</p>

                    <h2>Contact</h2>
                    <p>Phone +34 123456789</p>

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
                    <p>Total Amount: €2430</p>
                </div>

                <article >
                    <h2>ordered items</h2>
                    <div>
                        <p>Chese Burger</p>
                        <p>12x232</p>
                    </div>
                    <div>
                        <p>Veg Cheese Burger</p>
                        <p>10x500</p>
                    </div>
                    <div>
                        <p>Burger Fries</p>
                        <p>10x1800</p>
                    </div>
                    <div>
                        <p><strong>Total</strong></p>
                        <p><strong>€2430</strong></p>
                    </div>
                </article>
            </main>
        </section>

    )
}

export default OrderDetails;