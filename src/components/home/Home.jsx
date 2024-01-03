import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <h1>Burger Shop</h1>
        
            <div>
                <p>Give yourself a tasty burger.</p>
                <Link to={'/menu'}>Explore Menu</Link>
            </div>
        </div>

    )
}

export default Home;