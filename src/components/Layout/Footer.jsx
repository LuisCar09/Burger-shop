import React from "react";
import Stack from '@mui/material/Stack';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom";

const Footer = () => {
    const date = new Date().getFullYear()

    const info = ['FAQs','About us', 'Contact us']
    return(
        <footer className="footer">
        
        <div>
            <h2>Burger Shop</h2>
            <p >We are trying to give you the best taste possible.</p>
            <p className="second-parragraph"><i>We give attention to genuine feedback.</i></p>
            
        </div>
        
        <aside className="footer__social-media" >
            
        <h5>Info</h5>
        <ul>
            {info.map((inf)=> { return <li><Link>{inf}</Link></li>})}
        </ul>
            
        
        
        <h5>Follow us</h5>

        <ul>
            <li>
                <YouTubeIcon />
            </li>
            <li>
                <InstagramIcon />
            </li>
            <li>
                <GitHubIcon />
            </li>
            <li>
                <TwitterIcon />
            </li>
        </ul>
        </aside>
        <p className="rights" > <strong>All right received  @burgershop © {date}</strong></p>
        </footer>
    )
}

export default Footer;