import React from "react";

const Input = ({type = 'hidden',name = null,placeholder = null,autoComplete = 'off',required = false,id = null},maxLength = null, pattern = null) => {
    return(
        <input type={type} name={name} placeholder={placeholder}  autoComplete={autoComplete} required={required} id={id} maxLength={maxLength} pattern={pattern} ></input>
    )
}

export default Input;