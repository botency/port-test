import React from "react";

export const Tag = ({ tagText, tagBgColor }) => {
    return (
        <>
            <div class="relative overflow-visible whitespace-nowrap">
                <div class="dark:bg-agshadowblack absolute z-10 rounded-md border-2 border-agshadowblack bg-agtagfilllight px-2 text-center text-xs dark:border-black dark:text-white">
                    {tagText}
                </div>
                <div class="absolute left-0 top-[1.5px] z-0 rounded-md border-2 border-agshadowblack bg-agshadowblack px-[0.6rem] text-center text-xs dark:border-black dark:bg-black">
                    {tagText}
                </div>
            </div>
        </>
    );
};

export default Tag;
