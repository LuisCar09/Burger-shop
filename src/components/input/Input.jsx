import React from "react";

const Input = ({type = 'hidden',name = null,placeholder = null,autoComplete = 'off',required = false,id = null}) => {
    return(
        <input type={type} name={name} placeholder={placeholder}  autoComplete={autoComplete} required={required} id={id}></input>
    )
}

export default Input;