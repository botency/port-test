import React from "react";

const Contact = () => {
    return (
        <section className="flex flex-col items-start justify-start p-5 pt-0 text-left">
            <div className="w-full px-4 mx-auto max-w-screen">
                <p className="mb-8 text-center text-black dark:text-white sm:text-xl">
                    Would love to hear from you!
                </p>
                <form action="" method="POST" className="space-y-8">
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className=" bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-agshadowblack border-black border-solid border-1  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light shadow-md shadow-black"
                            placeholder="name@email.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                        >
                            Your name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="block w-full p-3 text-sm text-gray-900 border border-black border-solid rounded-lg shadow-md bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-agshadowblack border-1 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light shadow-black"
                            placeholder="name"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  border  focus:ring-primary-500 focus:border-primary-500 dark:bg-agshadowblack border-black border-solid border-1  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-none shadow-md shadow-black"
                            placeholder="your message..."
                        />
                    </div>
                    <div className="flex flex-col items-center justify-between w-full sm:flex-row">
                        <button
                            type="submit"
                            className="px-5 py-3 text-sm font-medium text-center text-white bg-indigo-500 border-b-4 border-blue-700 rounded-lg bg-primary-700 sm:w-fit hover:bg-blue-400"
                        >
                            Send message
                        </button>
                        <div className="mt-4 text-sm font-normal text-center text-gray-500 dark:text-gray-400 sm:mt-0 sm:ml-4 ">
                            Feel free to contact me on
                            <a
                                href="https://www.linkedin.com/in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-1.5 underline cursor-pointer text-indigo-500 hover:ease-in duration-200 transform hover:-translate-y-0.5 hover:scale-105 hover:z-3"
                            >
                                LinkedIn
                            </a>
                            as well 😀
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
