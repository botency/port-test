import React from "react";

const Projects = ({ title, tags, description, githubLink, svgComponent }) => {
    return (
        <div className="w-full p-4 bg-white border border-black border-solid rounded-lg shadow border-1 sm:p-6 dark:bg-agshadowblack">
            <h6 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white ">
                {title}{" "}
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className=" inline-flex items-center  justify-center px-2 py-0.5 ml-3 text-xs my-0.5 text-agblack bg-gray-200 rounded dark:bg-agshadowgrey dark:text-white border-agblack border-solid border-2"
                    >
                        {tag}
                    </span>
                ))}
            </h6>

            <ul className="my-4 space-y-3">
                <li>
                    <span
                        className="flex items-center pr-4 text-base text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-transparent dark:text-agwhite"
                        style={{ display: "flex" }}
                    >
                        {svgComponent}
                        <span className="flex-1 ml-3 ">
                            <p className="text-sm font-normal text-gray-500 dark:text-agwhite ">
                                {description}
                            </p>
                        </span>
                    </span>
                </li>
            </ul>
            <div className="flex items-end justify-end">
                <a
                    href={githubLink}
                    className="inline-flex items-center pr-2 text-xs font-normal text-indigo-500 underline hover:underline hover:ease-in duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:z-3"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};

export default Projects;
