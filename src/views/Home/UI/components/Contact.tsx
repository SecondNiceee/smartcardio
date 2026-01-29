import React, { FC } from 'react';
import { TypeContact } from '../../config/contacts.config';
import Image from 'next/image';

interface IContact{
    contact : TypeContact
}

const Contact:FC<IContact> = ({contact}) => {
    return (
        <a 
            href={contact.link} 
            className='relative h-[100px] md:h-[200px] w-full rounded-[20px] cursor-pointer group' 
            target='_blank' 
            rel='noopener noreferrer'
        >
            <div className="flex flex-col items-center h-full gap-[7px] md:gap-[15px] w-full justify-center">
                <Image 
                    alt='icon' 
                    className='relative z-40 w-[25px] sm:w-[30px] md:w-[50px]' 
                    src={contact.iconSvg} 
                    width={50} 
                    height={50} 
                />
                <p className='font-normal leading-none text-center text-white z-[60] relative text-[clamp(1.125rem,0.396rem+2.43vw,2.188rem)]'>
                    {contact.name}
                </p>
            </div>
            <div className='bg-black left-0 top-0 w-full h-full absolute opacity-70 z-30 transition-opacity duration-300 group-hover:opacity-0 rounded-md' />
            <Image 
                className='left-0 top-0 w-full h-full z-20 absolute object-cover rounded-md' 
                alt='#' 
                width={300} 
                height={300} 
                src={contact.imageSrc} 
            />
        </a>
    );
};

export default Contact;
