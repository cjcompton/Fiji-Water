import React from "react";
import Waterfall from '../assets/waterfall.jpg';
import HGBW from '../assets/hgbw_bottle.png'

const Home = () => {
    return (
        <div className="relative w-screen h-screen flex items-center justify-center">
            <img className="absolute inset-0 w-full h-full object-cover z-10" src={Waterfall} alt="Waterfall" />
            <img className="absolute max-w-full max-h-full object-cover z-20" src={HGBW} alt="Product" />
            <div className="absolute inset-0 bg-black bg-opacity-50 z-15" />
        </div>
    );
};

export default Home;
