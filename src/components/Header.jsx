import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import HamburgerDark from "./HamburgerDark";

const Header = ({ darkMode, setDarkMode }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="duration-200 ease-in text-agblack dark:text-agwhite">
            <nav className="flex items-center justify-between p-6">
                {/* Navigation links */}
                <div className="">
                    <div className="hidden md:block">
                        <Link
                            to={"/"}
                            className="mr-5 md:inline-block hover:ease-in duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:z-3"
                        >
                            about-me
                        </Link>
                        <a
                            href="./Resume.pdf"
                            download={true}
                            className="mr-5  md:inline-block hover:ease-in duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:z-3"
                        >
                            my-resume
                        </a>
                        <Link
                            to={"/contact"}
                            className=" md:inline-block mr-5 hover:ease-in duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:z-3"
                        >
                            contact-me
                        </Link>
                    </div>

                    {/* Hamburger menu */}
                    <div
                        onClick={toggleNav}
                        className="cursor-pointer md:hidden"
                    >
                        <span className="text-lg font-bold text-indigo-500">
                            {darkMode ? <HamburgerDark /> : <Hamburger />}
                        </span>
                    </div>
                </div>

                <label
                    className="z-50 switch"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    <input className="toggle" type="checkbox" />
                    <span className="slider"></span>
                    <span className="card-side"></span>
                </label>
            </nav>

            {/* Mobile Menu */}
            <div className="relative z-50">
                <div
                    className={
                        isNavOpen
                            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 "
                            : ""
                    }
                >
                    {/* Side Drawer Menu */}
                    <div
                        className={
                            isNavOpen
                                ? " fixed left-0 top-0 w-[100%] h-screen bg-white dark:bg-agblack p-10 ease-in duration-500 "
                                : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen"
                        }
                    >
                        <div>
                            <div className="flex justify-end w-full">
                                <div
                                    onClick={toggleNav}
                                    className=" w-[35px] h-[35px] pt-[5px] text-center cursor-pointer"
                                >
                                    <span className="text-lg font-bold text-indigo-500">
                                        {darkMode ? (
                                            <HamburgerDark />
                                        ) : (
                                            <Hamburger />
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-5 text-center py-14">
                            <Link
                                to={"/"}
                                onClick={toggleNav}
                                className="block mt-4 md:inline-block md:mt-0 mr-6 font-bold hover:ease-in duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:z-3 text-lg"
                            >
                                about-me
                            </Link>

                            <Link
                                href="/Resume.pdf"
                                download={true}
                                onClick={toggleNav}
                                className="block mt-4 md:inline-block md:mt-0 mr-6 font-bold  hover:ease-in duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:z-3 text-lg"
                            >
                                my-resume
                            </Link>
                            <Link
                                to={"/contact"}
                                onClick={toggleNav}
                                className="block mt-4 md:inline-block md:mt-0 mr-6 font-bold hover:ease-in duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:z-3 text-lg"
                            >
                                contact-me
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
