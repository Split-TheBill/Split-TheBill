import React, { useState } from "react";
import { NavbarMenu } from "@/mockData/data";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 border-b border-gray-600 transition-all duration-300 ${
                    isMenuOpen
                        ? "bg-gray-900"
                        : "bg-gray-900/70 backdrop-blur-md"
                }`}
            >
                <div className="container mx-auto flex justify-between items-center px-4 py-2 md:py-3">
                    {/* Logo Section */}
                    <div className="-ml-4 sm:-ml-6">
                        <a href="/">
                            <img
                                src="images/Logo_Split.png"
                                alt="Logo"
                                className="w-[8rem] sm:w-[11rem] h-auto"
                            />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex">
                        <ul className="flex items-center gap-12 text-white">
                            {NavbarMenu.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={item.link}
                                        className="text-base sm:text-lg font-medium  hover:text-blue-400 transition duration-300"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Login Button */}
                        <a
                            href="/login"
                            className="px-4 py-2 border border-blue-500 rounded-[10px] text-white text-base font-medium hover:bg-blue-500 hover:text-white transition duration-300"
                        >
                            Login
                        </a>
                        {/* Register Button */}
                        <a
                            href="/register"
                            className="px-4 py-2 bg-blue-500 text-white rounded-[10px] text-base font-medium hover:bg-blue-600 transition duration-300"
                        >
                            Register
                        </a>
                    </div>

                    {/* Hamburger Menu */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-40">
                    <div className="flex flex-col items-center justify-center h-full space-y-4 text-white">
                        {NavbarMenu.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                className="text-lg font-medium hover:text-blue-400 transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.title}
                            </a>
                        ))}
                        {/* Buttons in Mobile */}
                        <div className="flex flex-col gap-3 mt-4">
                            <a
                                href="/login"
                                className="px-6 py-2 border border-blue-500 text-white font-medium rounded-[10px] hover:bg-blue-500 hover:text-white transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </a>
                            <a
                                href="/register"
                                className="px-6 py-2 bg-blue-500 text-white font-medium rounded-[10px] hover:bg-blue-600 transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Register
                            </a>
                        </div>
                        <button
                            className="mt-4 text-base font-medium text-gray-400 hover:text-gray-200 transition duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
