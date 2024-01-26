import React from "react";

const CartItem = ({src,alt,itemName}) => {
    return(
    <article>
        <div>
            <h3>{itemName}</h3>
            <img src={src} alt={alt}></img>
        </div>

        <div>
            <button>-</button>
            <span>0</span>
            <button>+</button>
        </div>
    </article>)
}

export default CartItem;