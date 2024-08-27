import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Mockup_01.png';
import Dropdown from '../assets/menu.png';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function dropDown() {
        setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar state
    }

    function handleLinkClick() {
        setIsSidebarOpen(false);
    }

    return (
        <>
            {/** Header for desktop view
             * needs better font, more styling, and then a logo in the left hand corner
             */}
            <div className="hidden md:block w-full h-20 p-6 bg-slate-800 columns-4">
                <div className="p-2 w-full h-full flex justify-center items-center">
                    <Link to="/" className="text-white text-xl">Home</Link>
                </div>
                <div className="p-2 w-full h-full flex justify-center items-center">
                    <Link to="about" className="text-white text-xl">About</Link>
                </div>
                <div className="p-2 w-full h-full flex justify-center items-center">
                    <Link to="contact" className="text-white text-xl">Contact</Link>
                </div>
                <div className="p-2 w-full h-full flex justify-center items-center">
                    <Link to="/" className="text-white text-xl">Our Mission</Link>
                </div>
            </div>

            {/** Header for mobile view */}
            <div className="block md:hidden w-full h-20 bg-slate-800 flex justify-center items-center">
                <img src={Logo} alt="Logo Image" className="w-20 h-auto mx-auto" />
                <button 
                    className="absolute right-4 w-8 h-8 p-1 rounded-md bg-slate-400" 
                    onClick={dropDown}>
                    <img src={Dropdown} alt="Dropdown Icon" />
                </button>
            </div>

            {/** Dark overlay when sidebar is open */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={dropDown}
                ></div>
            )}

            {/** Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-gray-800 z-40 transform transition-transform duration-300 
                ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="w-full h-full flex flex-col">
                        <div className="p-4 flex justify-center items-center">
                            <Link to="/" className="text-white text-3xl" onClick={handleLinkClick}>Home</Link>
                        </div>
                        <div className="p-4 flex justify-center items-center">
                            <Link to="about" className="text-white text-3xl" onClick={handleLinkClick}>About</Link>
                        </div>
                        <div className="p-4 flex justify-center items-center">
                            <Link to="contact" className="text-white text-3xl" onClick={handleLinkClick}>Contact</Link>
                        </div>
                        <div className="p-4 flex justify-center items-center">
                            <Link to="/" className="text-white text-3xl" onClick={handleLinkClick}>Our Mission</Link>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default Header;