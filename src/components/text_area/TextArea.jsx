import React from "react";

const textArea = ({placeholder = null,maxLength = null,rows = null,cols=null,name=null}) => {
    return(
    
    <textarea placeholder={placeholder} maxLength={maxLength} rows={rows} name={name} cols={cols}>
    </textarea>
    )
}

export default textArea;