import React from "react";
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'
import Card from "./Card";
const Menu = () => {
    const burgers = [{photo:burger1,price:'100€',name:'Cheese Burger'},{photo:burger2,price:'150€',name:'Veg Cheese Burger'},{photo:burger3,price:'200€',name:'Cheese burger with french fries'}]
    return(
        <section id="menu">
            <h2>Menu</h2>
            <div>
                {burgers.map((burger,i) => {return (<Card key={i} picture={burger.photo} price ={burger.price} name={burger.name} />)})}
                

            </div>
        </section>
    )
}

export default Menu;