import React from "react";
import { Link } from "react-router-dom";


const List = ({items,target}) => {
    return(
        
        <ul>
            {items.map((item,index)=>{
                return(
                    <li key={index}>
                        <Link to={item.link} target={target ? "_blank" :null} >{item.name}</Link>
                    </li>
                )
            })}
            
        </ul>
    )
}

export default List;