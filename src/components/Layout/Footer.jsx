import React, { useState,useEffect } from "react";
// import Stack from '@mui/material/Stack';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom";
import List from "./List";
const Footer = () => {
    const date = new Date().getFullYear()
    const [width,setWidth] = useState(window.innerWidth)
    const items = [{name:<YouTubeIcon  />,link:'https://www.youtube.com/'},{name:<InstagramIcon />,link:'https://www.instagram.com/'},{name:<GitHubIcon />,link:'https://github.com/LuisCar09'},{name:<TwitterIcon />,link:'https://twitter.com/home?lang=es'}]
    
    // const info = ['FAQs','About us', 'Contact us']
    const info = [{name:'FAQs',link:'/faqs'},{name:'About us',link:'/aboutus'},{name:'Contact us',link:'/contact'}]
    
    // Función para manejar cambios en el tamaño de la ventana
    const handlerSize = () => {
        setWidth(window.innerWidth)
    }

    // Agregar un event listener cuando el componente se monta
    useEffect(()=>{
        window.addEventListener('resize',handlerSize)
        
        // Limpiar el event listener cuando el componente se desmonta
        return () => {window.removeEventListener('resize',handlerSize)}

    },[])// El segundo argumento vacío asegura que el efecto se ejecute solo una vez al montar/desmontar el componente

    return(
        <footer className="footer">
        
        <div>
            <h2>Burger Shop</h2>
            <p >We are trying to give you the best taste possible.</p>
            <p className="second-parragraph"><i>We give attention to genuine feedback.</i></p>
            
        </div>
        
        <aside className="footer__social-media" >
            
        {width > 720 ? null : <h5>Info</h5>}
        {width > 720 ? null : <List items={info} target={false} />}
            
        
        
        <h5>Follow us</h5>
        <List items={items} target={true} />
        
        </aside>
        <p className="rights" > <strong>All right received  @burgershop © {date}</strong></p>
        </footer>
    )
}

export default Footer;