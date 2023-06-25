import React from "react";

export const Button = ({ buttonText }) => {
    return (
        <>
            <div class="relative overflow-visible whitespace-nowrap">
                <div class="absolute z-10 rounded-lg border-2 border-black bg-white px-2 text-center font-semibold active:top-[2.5px] dark:bg-agshadowblack dark:text-white">
                    {buttonText}
                </div>
                <div class="absolute left-0 top-[2.5px] z-0 rounded-lg border-2 border-black bg-black px-[0.7rem] text-center font-semibold">
                    {buttonText}
                </div>
            </div>
        </>
    );
};

export default Button;

// <div class="relative whitespace-nowrap">
// <div class="absolute z-10 rounded-lg border-2 border-black bg-white px-2 text-center font-semibold text-black active:top-1 dark:bg-[#1E1E1E] dark:text-white">my-resume</div>
// <div class="absolute top-1 z-0 cursor-default rounded-lg border-2 border-black bg-black px-2 text-center font-semibold">my-resume</div>
// </div>
