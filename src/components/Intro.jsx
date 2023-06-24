import React, { useState, useEffect, useRef } from "react";
import Projects from "./Projects";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import GroceryPickUp from "./projects/GroceryPickUp";
import Issues from "./projects/Issues";
import Journal from "./projects/Journal";
import Secrets from "./projects/Secrets";
import PWC from "./projects/PWC";

const Intro = () => {
    const fill = document.documentElement.classList.contains("dark")
        ? "#ffffff"
        : "#000000";

    const SOCIALS = [
        {
            id: 1,
            link: "https://www.linkedin.com/in/",
            icon: <FaLinkedin className="block text-2xl md:hidden" />,
            text: <span className="hidden md:block">LinkedIn</span>,
        },
        {
            id: 2,
            link: "https://www.github.com/",
            icon: <FaGithub className="block text-2xl md:hidden" />,
            text: <span className="hidden md:block">GitHub</span>,
        },
        {
            id: 3,
            link: "",
            icon: <FaEnvelope className="block text-2xl md:hidden" />,
            text: <span className="hidden md:block">Gmail</span>,
        },
    ];

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const activeDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        if (isDropdownOpen === false) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
    };

    const dropdownRef = useRef(null);
    useEffect(() => {
        if (isDropdownOpen && dropdownRef.current) {
            dropdownRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [isDropdownOpen]);

    return (
        <section className="flex flex-col items-start justify-start p-5 ">
            <div className="">
                <div>
                    <h1 className="text-2xl">
                        I'm{" "}
                        <span className="text-2xl font-semibold">
                            Lorem Ipsum
                        </span>{" "}
                        <span className="text-2xl md:text-4xl"> 👨‍💻</span>{" "}
                    </h1>
                    <h2 className="pt-4">
                        A consectetur adipiscing elit{" "}
                        <button
                            class="bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-blue-400 text-white px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded animate-pulse hover:animate-none"
                            onClick={activeDropdown}
                        >
                            stuff
                        </button>{" "}
                    </h2>
                    <p className="py-6 dark:text-aggray">
                        Maecenas et lectus at nisl tristique blandit{" "}
                        <span className="font-bold dark:text-agwhite">
                            @University
                        </span>{" "}
                        and Developer{" "}
                        <span className="font-bold dark:text-agwhite">
                            @Work Place Inc
                        </span>
                        .Aliquam pellentesque maximus ultricies. Fusce feugiat,
                        urna ut blandit viverra, nunc purus luctus nisi, ut
                        dapibus felis ante quis elit. Vestibulum finibus vel mi
                        blandit maximus. Vivamus tristique euismod cursus. Nunc
                        ut erat erat. Aliquam ut porta justo, quis ultricies
                        lacus. Nulla facilisi. Etiam nec felis ac metus rutrum
                        imperdiet ut vehicula lacus. 🙂
                    </p>
                </div>
            </div>

            {/* socials */}
            <div className="flex items-center justify-center text-center">
                <p className="mr-2 ">My socials 👉</p>
                {SOCIALS.map(({ id, link, icon, text }) => (
                    <a
                        href={link}
                        key={id}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-1.5 underline cursor-pointer text-indigo-500 hover:ease-in duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:z-3"
                    >
                        {icon}
                        {text}
                    </a>
                ))}
            </div>

            {/* Dropdown */}
            <div
                ref={dropdownRef}
                className={
                    isDropdownOpen
                        ? "w-full opacity-100 visible transition-all duration-[.7s] ease-linear"
                        : "w-full opacity-0 invisible transition-all duration-[.7s] ease-linear"
                }
            >
                <div className="relative w-full mt-8 drop-shadow-md">
                    <div className="relative z-10 w-full">
                        <Projects
                            title="Project 1"
                            tags={["tag", "tag", "tag", "tag"]}
                            description=" Etiam id nulla enim. Duis ex massa, iaculis at massa sed, blandit volutpat elit. Phasellus ultricies mattis hendrerit. Proin eu sem eu justo egestas laoreet ac pellentesque sem.  "
                            githubLink="https://github.com"
                            svgComponent={<GroceryPickUp fill={fill} />}
                        />
                    </div>

                    <div className="my-4" />
                    <div
                        className={
                            isDropdownOpen
                                ? "w-full translate-x-0 translate-y-0 transition-all duration-[0.7s] delay-[0.2s] z-[9] relative"
                                : "w-full translate-x-[2%] -translate-y-full transition-all duration-[0.7s] z-[9] relative"
                        }
                    >
                        <Projects
                            title="Project 2"
                            tags={["tag", "tag", "tag"]}
                            description=" Etiam id nulla enim. Duis ex massa, iaculis at massa sed, blandit volutpat elit. Phasellus ultricies mattis hendrerit. Proin eu sem eu justo egestas laoreet ac pellentesque sem.  "
                            githubLink="https://github.com"
                            svgComponent={<PWC fill={fill} />}
                        />
                    </div>
                    <div className="my-4" />
                    <div
                        className={
                            isDropdownOpen
                                ? "w-full translate-x-0 translate-y-0 transition-all duration-[0.7s] delay-[0.4s] z-[8] relative"
                                : "w-full translate-x-[4%] -translate-y-[200%] transition-all duration-[0.7s] z-[8] relative"
                        }
                    >
                        <Projects
                            title="Project 3"
                            tags={["tag", "tag"]}
                            description=" Etiam id nulla enim. Duis ex massa, iaculis at massa sed, blandit volutpat elit. Phasellus ultricies mattis hendrerit. Proin eu sem eu justo egestas laoreet ac pellentesque sem.  "
                            githubLink="https://github.com"
                            svgComponent={<Journal fill={fill} />}
                        />
                    </div>
                    <div className="my-4" />
                    <div
                        className={
                            isDropdownOpen
                                ? "w-full translate-x-0 translate-y-0 transition-all duration-[0.7s] delay-[0.6s]"
                                : "w-full translate-x-[6%] -translate-y-[300%] transition-all duration-[0.7s]"
                        }
                    >
                        <Projects
                            title="Project 4"
                            tags={["tag", "tag", "tag", "tag"]}
                            description=" Etiam id nulla enim. Duis ex massa, iaculis at massa sed, blandit volutpat elit. Phasellus ultricies mattis hendrerit. Proin eu sem eu justo egestas laoreet ac pellentesque sem.  "
                            githubLink="https://github.com"
                            svgComponent={<Issues fill={fill} />}
                        />
                    </div>

                    <div className="my-5" />
                    <div className="flex items-end justify-end">
                        <a
                            href="https://github.com/"
                            className="inline-flex items-center pr-2 text-xs font-normal text-indigo-500 hover:underline hover:ease-in duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:z-3"
                        >
                            See more on GitHub{" "}
                            <span className="font-bold text-indigo-500">
                                {" >>"}
                            </span>
                        </a>
                    </div>
                    <div className="my-5" />
                </div>
            </div>
        </section>
    );
};

export default Intro;
