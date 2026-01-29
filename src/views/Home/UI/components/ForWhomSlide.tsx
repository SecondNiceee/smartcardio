import React, { FC, SetStateAction } from 'react';
import { TWhoWhomSliderItem } from '../../config/forWhomSlider.config';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import { routes } from '@/shared/config/routes';
import { createImageResolution } from '@/shared/utils/createImgPath';

interface IForWhomSlide{
    slide : TWhoWhomSliderItem;
    setResponsePopup : React.Dispatch<SetStateAction<boolean>>;
    setSliderActive : React.Dispatch<SetStateAction<boolean>>;
}

const ForWhomSlide:FC<IForWhomSlide> = ({slide, setResponsePopup, setSliderActive}) => {
    return (
        <div className='w-full md:flex-row flex-col-reverse flex gap-5 md:gap-10'>
            <div className='lg:w-[44.93%] md:w-[40%] w-full flex flex-col justify-center items-center gap-5 md:gap-10'>
                <p className='md:text-left text-center sub-title font-normal text-black'>{slide.text}</p>
                {slide.imgSrc !== "for-hospitals.webp" ? (
                    <OrderButton 
                        link={routes.store} 
                        className='mt-auto md:mt-0 w-[80%] md:ml-0 ml-auto mr-auto max-w-[70%] md:max-w-[500px] bg-black py-[11px] md:py-[18px] px-[14px] border-solid border-2 transition-colors duration-300 ease-in-out hover:bg-white [&>span]:text-white [&>span]:transition-colors [&>span]:duration-300 hover:[&>span]:text-black'
                    >
                        <span className='button-p'>Заказать</span>
                    </OrderButton>
                ) : (
                    <OrderButton 
                        onClick={() => {setResponsePopup(true)}} 
                        className='mt-auto md:mt-0 w-[80%] md:ml-0 ml-auto mr-auto max-w-[70%] md:max-w-[500px] bg-black py-[11px] md:py-[18px] px-[14px] border-solid border-2 transition-colors duration-300 ease-in-out hover:bg-white [&>span]:text-white [&>span]:transition-colors [&>span]:duration-300 hover:[&>span]:text-black'
                    >
                        <span className='button-p'>Связаться с нами</span>
                    </OrderButton>
                )}
            </div>
            <picture className='lg:w-[55.07%] h-[500px] sm:w-[60%] w-full sm:h-[485px] md:h-[608px] mx-auto'>
                <source media='(max-width:768px)' srcSet={createImageResolution(slide.imgSrc, 768)} />
                <source media='(max-width:1024px)' srcSet={createImageResolution(slide.imgSrc, 1024)} />
                <img loading='lazy' onClick={() => {setSliderActive(true)}} className='w-full object-cover rounded-lg h-full' src={createImageResolution(slide.imgSrc, 1440)} alt="Прибор для измерения ЭКГ" />
            </picture>
        </div>
    );
};

export default ForWhomSlide;
