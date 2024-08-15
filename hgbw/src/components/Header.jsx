import React from "react";
import Logo from '../assets/Mockup_01.png';

const Header = () => {
    return(
        <>
            <div className="w-screen h-screen flex justify-center bg-gray-400">
                <div className="hidden md:block w-full h-20 p-6 bg-slate-800 columns-4">
                    <div className="bg-green-400 w-full h-full"></div>
                    <div className="bg-green-400 w-full h-full"></div>
                    <div className="bg-green-400 w-full h-full"></div>
                    <div className="bg-green-400 w-full h-full"></div>
                </div>
                <div className="block md:hidden w-full h-20 bg-slate-800 flex justify-center items-center">
                    <img src={Logo} alt="Logo Image" className="w-20 h-auto mx-auto"/>
                    <button className="absolute right-4 w-8 h-8 bg-green-500"/>
                </div>
            </div>
        </>
    )
}

export default Header;