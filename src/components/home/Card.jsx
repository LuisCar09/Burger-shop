import React, { useEffect, useState } from "react";


const Card = ({picture,name,price}) => {
    // const [popup,setPopUp] = useState(false)
    // const handlerMessage = () =>{
        
        
    //     setPopUp()
    //     setTimeout(() => {
    //         setPopUp(false)
    //     }, 1000);
    // }
    const [popup, setPopup] = useState(true);

    const handlerMessage = () => {
      setPopup(true);
    };
  
    useEffect(() => {
      let timeoutId;
      if (popup) {
        timeoutId = setTimeout(() => {
          setPopup(false);
        }, 1000);
      }
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, [popup]);
    
    return(
    <div className="menuCard">
    <div></div>
    <main>
        
        <img  src={picture} alt={name}></img>
        <p>{price}</p>
        <p className="item-title" >{name}</p>
    
        <button onClick={handlerMessage}>Buy Now</button>
        {popup && 
        
            <aside className="popUp-container">
                <div className="overlay">
                    <div className="popUp-message">Added to cart!</div>
                </div>
            </aside>
        
        }
        
        
    </main>
</div>)
}

export default Card;