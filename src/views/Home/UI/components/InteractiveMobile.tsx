import Image from 'next/image';
import React, { FC } from 'react';
import InteractiveButtons from './InteractiveButtons';

export interface IInteractiveMobile {
  openZoom: () => void;
}

const InteractiveMobile: FC<IInteractiveMobile> = ({ openZoom }) => {
  return (
    <div className="hidden md:block">
      <div className="max-w-[1480px] mx-auto px-5 flex flex-col gap-[clamp(1.875rem,1.205rem+3.35vw,2.813rem)]">
        <div className="flex items-center border-2 border-black rounded-[37px] p-[50px] gap-5 relative z-30 bg-white sm:flex-col-reverse">
          <InteractiveButtons openZoom={openZoom} />
          <Image
            className='w-1/2 sm:w-full'
            alt='Interactive device'
            width={400}
            height={400}
            src={"/images/interactive.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(InteractiveMobile);
