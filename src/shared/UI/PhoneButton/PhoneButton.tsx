import React, { FC, ReactNode } from 'react';
import Image from 'next/image';

interface IPhoneButton{
    href : string,
    text : string,
    imageName : string,
    svgItem? : ReactNode | undefined,
    className? : string
}
const PhoneButton:FC<IPhoneButton> = ({href, text, imageName, svgItem, className = ""}) => {
    return (
        <a className={`py-5 max-[480px]:py-[14px] px-[clamp(1rem,-0.965rem+3.07vw,1.875rem)] flex gap-[13px] w-full no-underline items-center rounded-xl bg-black border-2 border-solid border-black transition-colors duration-300 hover:bg-white group ${className}`} href={href} target="_blank" rel="noopener noreferrer">
            {!svgItem ? <Image height={31} width={31} className="w-[31px] h-[31px]" alt='#' src={`images/${imageName}`} /> : svgItem}
            <p className="font-sans font-semibold text-[clamp(0.813rem,0.692rem+0.6vw,1.25rem)] text-center text-white transition-colors duration-300 group-hover:text-black">{text}</p>
        </a>
    );
};

export default React.memo(PhoneButton);
