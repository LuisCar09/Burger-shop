import React from "react";
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import { Link } from "react-router-dom";
import founder from '../../assets/1696431556553.jpg'
const About = () =>{
    return(
        <section className="about-us">
            <main>
                
                    
                    <h2>
                        About Us
                    </h2>
                    
                    <article>
                    <h2>Burger Shop</h2>
                    <p>
                        This is Burger Shop. The place for most tasty burgers on the entire earth.
                    </p>

                    <p>
                        Explore the various type of food and burgers. Click below to see the menu.
                    </p>
                    {/* <FindReplaceOutlinedIcon style={{'font-size':'1rem',borderRadius:'50%',width:'3rem',height:'3rem',fill:"black"}} /> */}
                    <Link to={'/menu'}>
                    <FindReplaceIcon className="about-icon"   />
                    </Link>
                    </article>
                    

                    <div>
                        <h2>Founder</h2>
                        <article>
                            <div>
                                <img src={founder} alt="founder"></img>
                                <h2>Luis Carlos</h2>
                            </div>
                            <p>I am Luis Carlos, the founder of Burger Shop. Affiliated to God Taste...</p>
                            
                        </article>  
                    </div>                
                
            </main>
        </section>
    )
}
export default About;