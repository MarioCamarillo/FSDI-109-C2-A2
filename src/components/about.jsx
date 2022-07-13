import "./about.css";
import { useState } from "react";



const About = () => {

    let [visible,setVisible] = useState(0);

    const changeVisibility = () => {
        if (visible) {
            setVisible(false);
        }

        else{
            setVisible(true);

        }
  
    };


    return (
        <div className="about">
            <h1>About</h1>
            <h3>Mario Camarillo</h3>

            {visible ? <h4>mario.camarillo</h4> : "Click on the button below to see"}

            <button onClick={changeVisibility}> Show info </button>
        </div>
    );
};

export default About;