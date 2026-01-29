import React from 'react';
import { indicators } from '../../config';
import Indicator from '../components/Indicator';
import Reveal from '@/shared/UI/Reveal/Reveal';
import BlackThemeCircles from '@/shared/UI/BlackThemeCircles/BlackThemeCircles';
import IndicatorButton from '../components/IndicatorButton';
import { CHARACTER } from '@/shared/UI/Reveal/models/CharacterEnum';

const Indicators = () => {
  return (
    <section className='px-5 overflow-x-clip bg-[#011440] max-w-[100vw] relative overflow-y-hidden'>
      <BlackThemeCircles />

      <div className="absolute left-0 top-0 w-full h-full bg-black" />
      
      <div className="max-w-[1480px] flex flex-col mx-auto items-center gap-[clamp(1.875rem,1.53rem+1.72vw,3.125rem)] py-[clamp(1.563rem,0.587rem+4.88vw,4.063rem)] px-0 relative z-20">
        <Reveal character={CHARACTER.LEFT}>
          <header className='font-bold text-[clamp(1.563rem,1.338rem+1.12vw,2.375rem)] leading-[108%] text-center text-white relative z-30'>
            Какие показатели регистрирует СмартКардио®?
          </header>
        </Reveal>
        
        <Reveal
          character={CHARACTER.RIGHT}
          className="mt-5 flex justify-between w-full gap-[clamp(0.938rem,0.11rem+3.68vw,1.875rem)] max-w-[1140px] md:flex-col md:mt-0"
        >
          {indicators.map((e, i) => {
            return (
              <Indicator description={e.description} imageSrc={e.imageSrc} key={i} />
            )
          })}
        </Reveal>
        
        <Reveal
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%"
          }}
          character={CHARACTER.DOWNUP}
        >
          <IndicatorButton />
        </Reveal>
      </div>
    </section>
  );
};

export default Indicators;
