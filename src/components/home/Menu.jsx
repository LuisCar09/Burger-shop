import React, { useEffect, useState } from "react";
import axios from 'axios';
// import burger1 from '../../assets/burger1.png'
// import burger2 from '../../assets/burger2.png'
// import burger3 from '../../assets/burger3.png'
import Card from "./Card";

const API = 'https://server-burger-shop.onrender.com/burgers'
const Menu = () => {
    // const burgers = [{photo:burger1,price:'100€',name:'Cheese Burger'},{photo:burger2,price:'150€',name:'Veg Cheese Burger'},{photo:burger3,price:'200€',name:'Cheese burger with french fries'},{photo:burger1,price:'100€',name:'Cheese Burger'},{photo:burger2,price:'150€',name:'Veg Cheese Burger'},{photo:burger3,price:'200€',name:'Cheese burger with french fries'}]
    
    const [burgers,setBurgers] = useState([])
    
    
    
    
    const getBurgers =  async () => {
        
        try {
            const response = await axios.get(API)
            setBurgers(response.data)
            
            
        } catch (error) {
            console.error('Error fetching data from server',error)
            
        }
        
    }
    //Aqui modificamos para que el contenedor padre maneje todo las peticiones.
    const sendBurger = async (data) => {
       
        const {name,picture,price,id} = data;
        
        try {
            const sendData = await axios.post('https://server-burger-shop.onrender.com/add', { picture, name, price, id, })

            
            
        } catch (error) {
            console.error('Server not found', error);
        }
    }
    useEffect(()=>{
        getBurgers()
        
    },[])
   
    return(
        <section id="menu">
            <h2>Menu</h2>
            { <div>
                {burgers.map((burger) => {return (<Card key={burger.id} id={burger.id} picture={burger.images[1].lg} price ={`${burger.price}`} name={burger.name} sendBurger = {sendBurger} />)})}

            </div> } 
        </section>
    )
}

export default Menu;