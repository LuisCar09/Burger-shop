import React from "react";

const Label = ({text,id}) => {
    return(<label htmlFor={id}>{text}</label>)
}
export default Label;