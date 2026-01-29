"use client"
import React, { useRef } from 'react';
import InteractiveLottie from './InteractiveLottie';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';

const InteractiveCardioBlock = ({ openZoom }: { openZoom: () => void }) => {
  const interactiveRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  
  const onMouseEnter = () => {
    interactiveRef.current?.classList.remove("show")
    textRef.current?.classList.add("show")
  }
  
  const onMouseLeave = () => {
    interactiveRef.current?.classList.add("show")
    textRef.current?.classList.remove("show")
  }

  return (
    <>
      <InteractiveLottie ref={interactiveRef} className="absolute bottom-[-2%] right-[26%] opacity-0 z-30 transition-opacity duration-400 [&.show]:opacity-100 xl:bottom-[1%] xl:right-[23%] lg:bottom-[-3%] lg:right-[18%]" />
      
      <div 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave} 
        className="cursor-[url('/assets/lastCursor.svg'),auto] w-[38%] rounded-[40px] h-[41%] bottom-[14%] left-1/2 -rotate-[46deg] absolute z-[200]" 
      />
      
      <div
        ref={textRef}
        className="cursor-[url('/assets/lastCursor.svg'),auto] p-[clamp(1.563rem,-0.123rem+3.51vw,3.125rem)] border-[1.46px] border-[#b200ff] bg-white rounded-[20px] flex justify-center items-center absolute opacity-0 transition-opacity duration-400 z-[220] flex-col gap-5 top-[48%] left-[49%] max-w-[430px] [&.show]:opacity-100 xl:right-[2%] xl:left-auto lg:max-w-[375px]"
      >
        <p className='max-w-[480px] font-semibold text-[clamp(1.063rem,0.658rem+0.84vw,1.438rem)] leading-[175%] text-center text-[#202020]'>
          Полностью беспроводной карманный прибор для мониторинга Вашего здоровья
        </p>
        <OrderButton className='p-5 w-full scale-hover border border-black bg-white' onClick={openZoom}>
          <p className='text-black'>Cхема устройства</p>
        </OrderButton>
      </div>
    </>
  );
};

export default InteractiveCardioBlock;
