import React from "react";
import Tag from "./element-components/Tag";
import GithubTag from "./element-components/GithubTag";
import Button from "./element-components/Button";

const Projects = ({ title, tags, description, githubLink, svgComponent }) => {
    return (
        <div className="w-full p-4 bg-white border border-black border-solid rounded-lg shadow-md shadow-black border-1 sm:p-6 dark:bg-agshadowblack">
            <h6 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white ">
                {title}{" "}
                {tags.map((tag, index) => (
                    <span className="inline-flex justify-center px-12">
                        <Tag key={index} tagText={tag} />
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
                <a href={githubLink} className="inline-flex items-center pr-2 ">
                    <GithubTag tagText="GitHub" />
                </a>
            </div>
        </div>
    );
};

export default Projects;
