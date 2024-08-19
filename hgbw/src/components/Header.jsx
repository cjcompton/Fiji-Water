import React, { useState } from "react";
import Logo from '../assets/Mockup_01.png';
import Dropdown from '../assets/menu.png';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function dropDown() {
        setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar state
    }

    return (
        <>
            {/** Header for desktop view */}
            <div className="w-screen h-screen flex justify-center bg-gray-400">
                <div className="hidden md:block w-full h-20 p-6 bg-slate-800 columns-4">
                    <div className="bg-green-400 w-full h-full"></div>
                    <div className="bg-green-400 w-full h-full"></div>
                    <div className="bg-green-400 w-full h-full"></div>
                    <div className="bg-green-400 w-full h-full"></div>
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
                        className="fixed inset-0 bg-black bg-opacity-50 z-10"
                        onClick={dropDown} // Close sidebar when clicking the overlay
                    ></div>
                )}

                {/** Sidebar */}
                <div className={`fixed top-0 right-0 h-full w-64 bg-gray-800 z-20 transform transition-transform duration-300 
                    ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                </div>
            </div>
        </>
    );
};

export default Header;
