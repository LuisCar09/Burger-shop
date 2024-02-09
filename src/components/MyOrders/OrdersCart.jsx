import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const ItemOrder = ({id,status = 'Processing',itemQty,amount,paymentMethod}) =>{
    return(
        <tr id={id}>
            <td>#{id}</td>


            <td>{status}</td>

            <td>{itemQty}</td>



            <td>€{amount}</td>


            <td>{paymentMethod}</td>

            <td><Link to={'/details'}><AiOutlineEye /> </Link></td>
        </tr>
    )
}
const Orders = () => {
    const arr = [{id:1,status:'Processing',amount:2121,itemQty:3,method:'COD'},
    {id:2,status:'Processing',amount:1920,itemQty:6,method:'CASH'},
    {id:3,status:'Processing',amount:333,itemQty:4,method:'COD'},
    {id:4,status:'Processing',amount:1111,itemQty:8,method:'CASH'},]
    return(
        <section className="orders-section">
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Order Id
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Item Qty
                            </th>
                            <th>
                                Amount
                            </th>
                            <th>
                                Payment Method
                            </th>
                            <th>
                                Action
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        {arr && arr.map((item) => { return (<ItemOrder id={item.id} status={item.status} itemQty={item.itemQty} amount={item.amount} paymentMethod={item.method} />) })}
                    </tbody>
                </table>
            </main>
        </section>

    )
}

export default Orders;