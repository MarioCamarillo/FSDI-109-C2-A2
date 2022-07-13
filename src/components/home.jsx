import { useState } from "react";
import { Link } from 'react-router-dom';



const Home = () => {


    return (
        <div className="Home">
            <h1>Home</h1>
            <Link className="btn btn-primary" to="/catalog">Check our catalog</Link>
        </div>
    );
};

export default Home;