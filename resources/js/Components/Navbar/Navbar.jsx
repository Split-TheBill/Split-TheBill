import React from "react";
import { NavbarMenu } from "@/mockData/data";

const Navbar = () => {
    return (
        <>
            <nav className="container mx-auto flex justify-between items-center relative top-[-30px]">
                {/* Logo Section */}
                <div>
                    <img
                        src="images/Logo_new.svg"
                        className="w-[200px] h-[200px]"
                        alt="Logo"
                    />
                </div>
                {/* Menu Section */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-[70px] text-white">
                        {NavbarMenu.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a
                                        href={item.link}
                                        className="inline-block py-1 px-3 hover:text-custom-dark font-semibold"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/* Menu Section */}
                <div className="flex items-center gap-6">
                    <button className="hover:bg-custom-dark text-white font-semibold hover:text-white rounded-[15px] border-2 border-custom-dark px-6 py-2 duration-200 hidden md:block">
                        Login
                    </button>
                    <button className="hover:bg-custom-dark text-white hover:text-white rounded-[15px] bg-gradient-to-br from-custom-start to-custom-end px-6 py-2 duration-200 hidden md:block">
                        Register
                    </button>
                </div>
                {/* Hamburger Menu */}
                <div className="md:hidden">
                    <button aria-label="Open Menu">
                        <svg
                            className="w-6 h-6 text-gray-700"
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
            {/* Mobile Sidebar Section */}
            <div className="hidden">{/* Tambahkan Sidebar di sini */}</div>
        </>
    );
};

export default Navbar;
