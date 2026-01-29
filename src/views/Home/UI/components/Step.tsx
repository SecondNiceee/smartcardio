import React, { FC } from 'react';
import { TypeSteps } from '../../config';
import Image from 'next/image';

interface IStep extends TypeSteps {
  index: number;
}

const Step: FC<IStep> = ({ imagePath, text, index }) => {
  return (
    <div className='flex flex-col items-center gap-[33px] md:gap-3'>
      <Image
        className='rounded-full w-full max-w-[250px] relative z-30 lg:w-[90%] md:w-1/2'
        alt='Step illustration'
        src={imagePath}
        width={200}
        height={200}
      />
      <div className="flex flex-col items-center">
        <h3 className='relative z-30 text-[clamp(1.125rem,1.038rem+0.38vw,1.313rem)] leading-[175%] text-center text-black font-semibold'>
          Шаг {index}
        </h3>
        <p
          dangerouslySetInnerHTML={{ __html: text }}
          className='max-w-[250px] text-[clamp(1.125rem,1.038rem+0.38vw,1.313rem)] leading-[175%] text-center text-black relative z-30 md:max-w-none'
        />
      </div>
    </div>
  );
};

export default Step;
