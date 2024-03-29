import { React, useState, useEffect } from "react"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import DropDownMenu from "./DropdownMenu";
import ConfirmOrdersCart from '../cart/ConfirmOrdersCart'
import List from "./List";


const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [showCart, setShowCart] = useState(window.innerWidth)
    const [isOpenCart, setIsOpenCart] = useState(false);

    const info = [{name:'About us',link:'/aboutus'},{name:'Contact us',link:'/contact'},{name:'FAQs',link:'/faqs'}]


    const handlerOpenMenu = () => {

        setIsOpenMenu((prevValue) => !prevValue)

    }

    const handlerOpenCart = () => {
        setIsOpenCart((prevValue) => !prevValue)
    }

    const handlerShowCart = () => {
        setShowCart(window.innerWidth)

    }

    useEffect(() => {
        window.addEventListener('resize', handlerShowCart)

        return () => { window.removeEventListener('resize', handlerShowCart) }
    }, [])



    return (


        <header className="App-header">
            <motion.div animate={{ x: '-100%' }} whileInView={{ x: 0 }} >
                <FastfoodIcon style={{ fontSize: "3.6rem" }} />
            </motion.div>

            <div className="nav-right">


                <Link to={'/'}>Home</Link>
                {showCart > 1024 ? info && <List target={false} items={info} /> : null}
                

                {showCart > 1024 ? <ShoppingCartIcon style={{ fontSize: "3.4rem", margin: '0px 1rem' }} onClick={handlerOpenCart} /> : null}
                {showCart > 1024 ? isOpenCart && <ConfirmOrdersCart isOpenCart={isOpenCart} isClose={setIsOpenCart} /> : null}



                <MenuIcon onClick={handlerOpenMenu} style={{ fontSize: "3.6rem" }} />
                {isOpenMenu && <DropDownMenu close={setIsOpenMenu} isOpen={isOpenMenu} />}

            </div>

        </header>
    )
}

export default Header;