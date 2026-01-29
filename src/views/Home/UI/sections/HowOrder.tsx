import React from 'react';
import { howOrderItems } from '../../config/howOrderItems';
import HowOrderItem from '../components/HowOrderItem';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import Reveal from '@/shared/UI/Reveal/Reveal';
import BlackThemeCircles from '@/shared/UI/BlackThemeCircles/BlackThemeCircles';
import { routes } from '@/shared/config/routes';
import { CHARACTER } from '@/shared/UI/Reveal/models/CharacterEnum';

const HowOrder = () => {
  return (
    <section className='overflow-x-clip max-w-[100vw] bg-black relative overflow-y-hidden'>
      <BlackThemeCircles />
      <div className="absolute left-0 top-0 w-full h-full bg-black" />

      <div className="max-w-[1140px] mx-auto px-5 flex flex-col gap-[clamp(1.875rem,1.53rem+1.72vw,3.125rem)] py-[clamp(1.563rem,0.587rem+4.88vw,4.063rem)]">
        <Reveal character={CHARACTER.DOWNUP} className="flex items-center flex-col gap-[clamp(1.875rem,1.53rem+1.72vw,3.125rem)]">
          <header className='font-bold text-[clamp(1.563rem,1.338rem+1.12vw,2.375rem)] leading-[108%] text-center text-white relative z-30'>
            Как сделать заказ?
          </header>
          <p className='font-normal text-[clamp(1.188rem,0.902rem+1.43vw,2.188rem)] leading-[108%] text-center text-white relative z-30'>
            Для вашего удобства мы предлагаем разные способы доставки, выбирайте комфортный
          </p>
        </Reveal>
        
        <div className="flex justify-between gap-[clamp(0.625rem,-4.536rem+10.75vw,3.125rem)] relative z-30 md:grid md:grid-cols-4 sm:grid-cols-1">
          {howOrderItems.map((e, i) => {
            return <HowOrderItem index={i} h={e.h} imageSrc={e.imageSrc} p={e.p} key={i} />
          })}
        </div>
        
        <Reveal character={CHARACTER.DOWNUP} className='mx-auto w-full max-w-[70%] relative z-40 md:max-w-[500px]'>
          <OrderButton
            link={routes.store}
            className='bg-gradient-to-r from-[#6cff01] to-[#00ff88] w-full py-[11px] px-[14px] gradient-hover md:py-[18px]'
          >
            <p className='text-[clamp(1.188rem,0.902rem+1.43vw,2.188rem)] text-black'>В магазин</p>
          </OrderButton>
        </Reveal>
      </div>
    </section>
  );
};

export default HowOrder;
