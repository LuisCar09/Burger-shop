import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Card = ({ id, picture, name, price }) => {

  const [popup, setPopup] = useState(false);

  const handlerMessage = async () => {

    try {
      const sendData = await axios.post('http://localhost:3001/add', { picture, name, price, id, })

      console.log(sendData);
      //Show us popUp
      setPopup(true);
    } catch (error) {
      console.error('Server not found', error);
    }
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
        <p>{price}</p>
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