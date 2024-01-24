import React, { useState} from "react"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import DropDownMenu from "./DropdownMenu";

const Header = () =>{
    const [isOpenMenu,setIsOpenMenu] = useState(false)
    
    const handlerOpenMenu = () => {
        
        setIsOpenMenu((prevValue) =>{
            return(!prevValue)
        })
    }
    // const isCloseMenu = (state) => {
    //     console.log('activada');
    //     setIsOpenMenu(state)
    // }
    
    
    return(
    
               
        <header className="App-header">
        <motion.div animate={{x:'-100%'}} whileInView={{x:0}} >
        <FastfoodIcon style={{fontSize:"3.6rem"}} />
        </motion.div>

        <div className="nav-right">
            <ShoppingCartIcon style={{fontSize:"3.4rem", margin:'0px 1rem'}} />
            <Link to={'/'}>Home</Link>
            
            
            <MenuIcon onClick={handlerOpenMenu} style={{fontSize:"3.6rem"}}/>
            {isOpenMenu && <DropDownMenu close = {setIsOpenMenu} isOpen={isOpenMenu} />}
            
        </div>    
        
        </header> 
    )
}

export default Header;