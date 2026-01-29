import React from 'react';
import { steps } from '../../config';
import Step from '../components/Step';
import Image from 'next/image';
import Reveal from '@/shared/UI/Reveal/Reveal';
import { CHARACTER } from '@/shared/UI/Reveal/models/CharacterEnum';

const Steps = () => {
  return (
    <section className='overflow-x-clip max-w-[100vw]'>
      <div className="flex flex-col gap-[clamp(1.875rem,1.53rem+1.72vw,3.125rem)] max-w-[1140px] items-center py-[clamp(1.563rem,0.587rem+4.88vw,4.063rem)] px-5 mx-auto">
        <Reveal
          character={CHARACTER.UPDOWN}
          className="font-bold text-[clamp(1.563rem,1.338rem+1.12vw,2.375rem)] leading-[108%] text-center text-black"
        >
          Три шага для оценки <span className='text-[#6cff01] font-bold'>Вашего здоровья</span>
        </Reveal>
        <Reveal character={CHARACTER.DOWNUP} className="flex flex-col gap-7 w-full items-center">
          <Image
            className='h-auto max-w-[clamp(31.25rem,7.654rem+49.16vw,53.125rem)] md:hidden'
            width={921}
            height={152}
            alt='Steps arrows'
            src={"/images/stepsArrow.svg"}
          />
          <div className="w-full flex justify-between md:flex-col md:gap-[clamp(1.563rem,0.032rem+6.44vw,3.125rem)]">
            {steps.map((e, i) => {
              return (
                <Step imagePath={e.imagePath} index={i + 1} text={e.text} key={i} />
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Steps;
