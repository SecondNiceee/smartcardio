import { Accordion } from '@/shared/UI/Accordion/Accordion';
import React from 'react';
import { frequentQuestions } from '../../config/frequentQuestions';
import BlackThemeCircles from '@/shared/UI/BlackThemeCircles/BlackThemeCircles';
import MakeCallButton from '../components/MakeCallButton';

const TelegramBotSection = () => {
    return (
         <section className='section bg-black relative overflow-y-hidden'>
            <BlackThemeCircles />
            <div className="container w-full p-container items-center gap-containerGap sm:gap-[10px] flex flex-col">
                <h2 className='h2 text-white'>Частые вопросы</h2>
                <div className="flex sm:w-[90%] sm:p-10 w-full p-0 justify-between relative rounded-tr-3xl rounded-bl-3xl before:content-[''] before:absolute before:w-10 before:h-10 before:rounded-[inherit] before:pointer-events-none before:top-0 before:right-0 before:border-t-2 before:border-r-2 before:border-white after:content-[''] after:absolute after:w-10 after:h-10 after:rounded-[inherit] after:pointer-events-none after:bottom-0 after:left-0 after:border-b-2 after:border-l-2 after:border-white sm:before:block sm:after:block before:hidden after:hidden"> 
                    <Accordion content={frequentQuestions} />
                </div>
                <div className='flex relative z-20 bg-black flex-col mt-0 sm:mt-[30px] gap-5 black-shadow p-10 rounded-xl w-full sm:w-[80%]'>
                    <h2 className='mid-title text-white'>Не нашли ответ на Ваш вопрос?</h2>
                    <MakeCallButton />
                </div>
            </div>
        </section>
    );
};

export default TelegramBotSection;
