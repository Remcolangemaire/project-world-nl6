import React from "react";
import Front from "../components/frontPage/Front";
import Homepage from "../pages/SidePages/Homepage"

const Home = () => {
    return (
        <div className="hero-container">
            <Front/>
            <Homepage/>
        </div>
    );
};

export default Home;

