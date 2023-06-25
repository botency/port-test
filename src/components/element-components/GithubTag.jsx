import React from "react";

export const GithubTag = ({ tagText }) => {
    return (
        <>
            <div class="relative overflow-visible whitespace-nowrap">
                <div class=" text-white font-semibold absolute z-10 rounded-md border-2 border-black bg-agblue px-2 text-center active:top-[1.5px] text-xs dark:border-black ">
                    {tagText}
                </div>
                <div class="absolute left-0 top-[1.5px] z-0 rounded-md border-2 border-black bg-black px-[0.6rem] text-center text-xs ">
                    {tagText}
                </div>
            </div>
        </>
    );
};

export default GithubTag;
