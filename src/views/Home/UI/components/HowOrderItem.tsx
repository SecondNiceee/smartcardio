import React, { FC, useMemo } from 'react';
import { TypeOrder } from '../../config/howOrderItems';
import Image from 'next/image';
import Reveal from '@/shared/UI/Reveal/Reveal';
import { CHARACTER } from '@/shared/UI/Reveal/models/CharacterEnum';

type indexType = {
  index: number;
};

const HowOrderItem: FC<TypeOrder & indexType> = ({ h, imageSrc, p, index }) => {
  const revealCase = useMemo(() => {
    switch (index) {
      case 0:
        return CHARACTER.LEFT;
      case 1:
        return CHARACTER.DOWNUP;
      case 2:
        return CHARACTER.RIGHT;
      default:
        return CHARACTER.DOWNUP;
    }
  }, [index]);

  const gridColClass = useMemo(() => {
    if (index === 0) return "md:col-span-2 md:col-start-1 sm:col-span-1";
    if (index === 1) return "md:col-span-2 md:col-start-3 sm:col-span-1";
    if (index === 2) return "md:col-span-2 md:col-start-2 sm:col-span-1";
    return "";
  }, [index]);

  return (
    <Reveal
      character={revealCase}
      className={`w-full flex flex-col gap-[35px] items-center p-5 rounded-[20px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] ${gridColClass}`}
    >
      <Image
        className='w-[100px] aspect-square h-auto'
        src={imageSrc}
        alt='Order step icon'
        width={100}
        height={100}
      />
      <div className="flex flex-col">
        <h4 className='text-[clamp(1.125rem,1.038rem+0.38vw,1.313rem)] leading-[175%] text-center text-black font-semibold'>
          {h}
        </h4>
        <p
          dangerouslySetInnerHTML={{ __html: p }}
          className='text-[clamp(1.125rem,1.038rem+0.38vw,1.313rem)] leading-[175%] text-center text-black'
        />
      </div>
    </Reveal>
  );
};

export default HowOrderItem;
