"use client"
import React, { useRef } from 'react';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import dynamic from 'next/dynamic';
import { openInstruction } from '../../utils/openInstruction';

const InteractiveLottie = dynamic(() => import("./InteractiveLottie"), {
  ssr: false
});

const InteractivePhoneBlock = () => {
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
      <InteractiveLottie ref={interactiveRef} className="absolute bottom-[6%] left-[22%] opacity-0 z-30 transition-opacity duration-400 [&.show]:opacity-100 xl:bottom-[10%] xl:left-[11%]" />

      <div 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave} 
        className="cursor-[url('/assets/lastCursor.svg'),auto] w-[59%] rounded-[40px] h-[49%] bottom-[34%] left-[12%] -rotate-[44deg] absolute z-[200]" 
      />

      <div
        ref={textRef}
        className="cursor-[url('/assets/lastCursor.svg'),auto] p-[clamp(1.563rem,-0.123rem+3.51vw,3.125rem)] border-[1.46px] border-[#b200ff] bg-white rounded-[20px] flex justify-center items-center absolute opacity-0 transition-opacity duration-400 z-[220] flex-col gap-5 top-[19%] left-[20%] max-w-[480px] [&.show]:opacity-100 xl:top-[15%] xl:left-[19%] xl:max-w-[430px] lg:left-[11%]"
      >
        <p className='max-w-[480px] font-semibold text-[clamp(1.063rem,0.658rem+0.84vw,1.438rem)] leading-[175%] text-center text-[#202020]'>
          Для того, чтобы снять показатели, достаточно приложить прибор к себе. Данные передаются по Bluetooth и отображаются на вашем смартфоне или планшете.
        </p>
        <OrderButton className='p-5 w-full scale-hover border border-black bg-white' onClick={openInstruction}>
          <p className='text-black'>Инструкция по эксплуатации</p>
        </OrderButton>
      </div>
    </>
  );
};

export default React.memo(InteractivePhoneBlock);
