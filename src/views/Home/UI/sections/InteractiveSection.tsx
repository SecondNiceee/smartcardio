'use client'
import Image from 'next/image';
import React from 'react';
import Reveal from '@/shared/UI/Reveal/Reveal';
import useZoomSwiper from '../../../../shared/hooks/useZoomSwiper';
import { CHARACTER } from '@/shared/UI/Reveal/models/CharacterEnum';
import dynamic from 'next/dynamic';
import { CSSTransition } from 'react-transition-group';
import { schemeConfig } from '../../config/schemeConfig';

const InteractiveCardioBlock = dynamic(() => import("../components/InteractiveCardioBlock"), { ssr: false })
const InteractivePhoneBlock = dynamic(() => import("../components/InteractivePhoneBlock"), { ssr: false })
const InteractiveMobile = dynamic(() => import("../components/InteractiveMobile"), { ssr: false })
const ZoomSlider = dynamic(() => import("@/shared/UI/ZoomSlider/ZoomSlider"), { ssr: false })

const InteractiveSection = () => {
  const { closeZoom, zoomRef, zoomSlider, openZoom } = useZoomSwiper()

  return (
    <section className='relative overflow-x-clip max-w-[100vw]'>
      <Reveal character={CHARACTER.RIGHT} className="block md:hidden">
        <div className="max-w-[1480px] flex mx-auto px-5 items-center justify-center overflow-x-clip py-[clamp(1.563rem,0.587rem+4.88vw,4.063rem)]">
          <div className="relative w-full flex justify-center">
            <Image
              className='relative z-20 w-[75%] xl:w-[80%] lg:w-[90%] md:w-full'
              width={800}
              height={800}
              alt='Interactive device'
              src={"/images/interactive.png"}
            />

            <InteractivePhoneBlock />

            <InteractiveCardioBlock openZoom={openZoom} />

            <Image
              className='absolute right-[10%] top-[4%] opacity-70 blur-[100.375px] lg:top-[3%] lg:w-1/2 md:hidden'
              width={910}
              height={927}
              alt='Decorative liner'
              src={"/images/interactiveLinerBlock.svg"}
            />
          </div>
        </div>
        <Image
          className='blur-[21.6px] absolute top-[-15%] left-0 w-[clamp(16.25rem,-2.626rem+39.33vw,33.75rem)] -translate-x-1/2 md:hidden'
          width={540}
          height={517}
          alt='Decorative circle'
          src={"images/interactiveCircle.svg"}
        />
      </Reveal>

      <InteractiveMobile openZoom={openZoom} />

      <CSSTransition
        nodeRef={zoomRef}
        classNames={"zoom"}
        timeout={{ enter: 50, exit: 400 }}
        in={zoomSlider}
        unmountOnExit
        mountOnEnter
      >
        <ZoomSlider
          imagesClassNames='md:!w-[70%] rounded-md'
          zoomState={zoomSlider}
          closeZoom={closeZoom}
          initialSlide={0}
          slides={schemeConfig}
        />
      </CSSTransition>
    </section>
  );
};

export default InteractiveSection;
