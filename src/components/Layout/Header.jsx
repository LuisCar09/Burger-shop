import React from "react"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
const Header = () =>{
    return(
    
        <header className="App-header">
        <motion.div animate={{x:-100}} whileInView={{x:0}} >
        <FastfoodIcon style={{fontSize:"2rem"}} />
        </motion.div>

        <div className="nav-right">
            
            <Link to={'/'}>Menu</Link> 
            
            <MenuIcon style={{fontSize:"2rem"}}/>
        </div>    
        
        </header> 
    )
}

export default Header;