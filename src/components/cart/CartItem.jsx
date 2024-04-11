
import React, { useEffect, useRef, useState } from "react";

const Delete = ({setShowWantToDelete, setWantToDelete,setNumber})=>{
    
    return(
        <div id="delete-pop-up">
            <div>
                <div>
                <p>Do you want to delete this item ?</p>
                <button onClick={()=>{
                    setShowWantToDelete(false)
                    setWantToDelete(true)
                }}>Yes</button>
                <button onClick={
                    ()=>{
                        setShowWantToDelete(false)
                        setNumber(1)
                    }}>No</button>
                </div>
            </div>
        </div>
    )
}

const CartItem = ({ src, alt, itemName, amount, id,patchData,deleteItem }) => {

    const [number, setNumber] = useState(0)
    const [showWantToDelete,setShowWantToDelete] = useState(false)
    const [wantToDelete,setWantToDelete] =useState(false)
    const prevNumberRef = useRef(number)
    
    
    //here we  add +1 every time (+) is clicked 
    const numberToAdd = async () => {

        const newValue = number + 1 
        setNumber(newValue)
        //using useRef, we ref number and then we send data to backend and avoiding multiple rendenring issues

        prevNumberRef.current = newValue

        //here we send data to patchData function which lives in confirmOrdersCart. this function send data to backend to changes quantity of burger chosen
        patchData(prevNumberRef.current,id,)

    }

    const numberToSubtract = () => {
        const newValue = number - 1;

        newValue <= 0 ? setNumber(0) : setNumber(newValue)

        //using useRef, we ref number and then we send data to backend and avoiding multiple rendenring issues
        newValue <= 0 ? prevNumberRef.current = 0 : prevNumberRef.current = newValue;


        
        //here we send data to patchData function which lives in confirmOrdersCart. this function send data to backend to changes quantity of burger chosen or if newValue === 0 send data to delete
        
    
        if (newValue > 0) {
            patchData(prevNumberRef.current, id)
        }else{
            
            setShowWantToDelete(true)
            
        }
        
        //  sendDataToPatch(prevNumberRef.current)   
    }
    //Change number value, this value comes from confirOrdersCart, we receive this value from backend with burger's amount, then put into number variable to set it up, then this value will render on each burger to says us how many burger were chosen.
    useEffect(() => {

        setNumber(amount)
        
        //Le pedimos al eslint que ignore la solicitud de agregar una dependencia cuando queremos que solo se cargue ejecute este useEffect() cuando se monte el componente
        //eslint-disable-next-line  
    }, [])
    
    
    // cleaning useRef to avoid any future issues in next rendering
    useEffect(() =>{
        return () => {prevNumberRef.current = null};
    },[] )

    useEffect(()=>{
        
        if (wantToDelete) {
            
            deleteItem(id)
        }
    },[wantToDelete,deleteItem,id])
    return (
        <div>
            <div>
                <h3>{itemName}</h3>
                <img src={src} alt={alt}></img>
            </div>

            <div>
                <button onClick={numberToSubtract}>-</button>
                { <span>{number}</span> }
                <button onClick={numberToAdd}>+</button>
            </div>
            {showWantToDelete ? <Delete setShowWantToDelete={setShowWantToDelete} setWantToDelete={setWantToDelete} setNumber={setNumber} /> : <div style={{display:'none'}}></div>}
        </div>)
}

export default CartItem;

