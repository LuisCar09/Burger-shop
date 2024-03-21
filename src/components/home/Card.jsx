import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Card = ({ id, picture, name, price,sendBurger }) => {

  const [popup, setPopup] = useState(false);

  const handlerMessage = () => {
    
    return(sendBurger({ picture, name, price, id, }))
    
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

  return (
    <div className="menuCard">
      <div></div>
      <main>

        <img src={picture} alt={name}></img>
        <p>{price}€</p>
        <p className="item-title" >{name}</p>

        <button type="button" onClick={handlerMessage}><Link>Buy Now</Link> </button>
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