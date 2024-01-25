import Fade from '@mui/material/Fade';
import {React,useEffect, useState} from "react";
import { Link } from "react-router-dom";


const DropDownMenu = ({close,isOpen}) =>{
    const items = ['Login','Order','Logout']
    const [count,setCount] = useState(0)
    
    const handler = () =>{
        console.log(count);
        setCount((prevValue) => {return(prevValue + 1)})
        
    }
    
    
    useEffect(() => {
        window.addEventListener('click',handler)
        
        return( () => { window.removeEventListener('click',handler)})
    },[])

    //useEffect lo utilizamos cuando un elemento es renderizado, en este caso este codigo se va a ejecutar solo si count o close, cambias desde el renderizado anterior
    useEffect(()=>{
        if (count > 1) {
            close(false)
        }
    },[count,close])

    
    const handleMenuItemClick = (event) =>{
        event.stopPropagation(); //evitamos la propagacion y asi cuando se haga click en los items no se cierre
    }
    const item = (<div className="dropDownMenu" onClick={handleMenuItemClick} > <ul>{items.map((item,index) => {return(<li key={index}><Link to={`/${item}`}>{item}</Link></li>)}  )}</ul></div>)
    return(
        //me hara la transition fade cuando isOPen sea true y me devuelve el valor de item con lo asignado para renderizar
        <Fade in={isOpen} timeout={200} >{item}</Fade>
    )
}

export default DropDownMenu;