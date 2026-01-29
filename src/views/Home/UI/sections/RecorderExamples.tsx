'use client'
import React, { useCallback } from "react";
import Slider from "../components/Slider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { recordersSliders } from "../../config/smarcardioSliderImages";
import ZoomSlider from "@/shared/UI/ZoomSlider/ZoomSlider";
import { recorders } from "../../config/recorders";
import Reveal from "@/shared/UI/Reveal/Reveal";
import useZoomSwiper from "../../../../shared/hooks/useZoomSwiper";
import useDefaultSwiper from "../../../../shared/hooks/useDefaultSwiper";
import { RecorderItem } from "../components/RecorderItem";
import { CHARACTER } from "@/shared/UI/Reveal/models/CharacterEnum";

const RecorderExamples = () => {
  const { activeSlide, handleSlideChange, swiperRef, changeSlide } = useDefaultSwiper();
  const { closeZoom, zoomSlider, setZoomSlider } = useZoomSwiper();

  const renderSmall = useCallback((src: string, index: number) => {
    return (
      <SwiperSlide key={index} className="mx-auto small-slide rounded-sm cursor-pointer">
        <Image className='w-full h-full rounded-sm' alt='Slide thumbnail' src={src} width={600} height={600} />
      </SwiperSlide>
    )
  }, []);

  return (
    <section className="overflow-x-clip max-w-[100vw]">
      <div className="max-w-[1310px] mx-auto px-5 gap-[clamp(1.875rem,1.53rem+1.72vw,3.125rem)] py-[clamp(1.25rem,0.625rem+3.6vw,3.125rem)] flex flex-col items-center">
        <Reveal character={CHARACTER.UPDOWN}>
          <h2 className="font-bold text-[clamp(1.563rem,1.338rem+1.12vw,2.375rem)] leading-[108%] text-center text-black">
            Примеры записей c прибора
          </h2>
        </Reveal>
        <div className="flex flex-col-reverse gap-[clamp(1.875rem,1.53rem+1.72vw,3.125rem)] w-full items-center md:flex-row md:gap-2 md:justify-between">
          <Reveal
            character={CHARACTER.LEFT}
            className="flex flex-col w-full h-auto items-center max-w-[600px] gap-5 py-10 px-6 justify-between rounded-[10px] relative shadow-[0px_0px_8px_0px_rgba(34,60,80,0.2)] md:max-w-full md:gap-12"
          >
            {recorders.map((e, index) =>
              <RecorderItem changeSlide={changeSlide} text={e} index={index} key={index} activeSlide={activeSlide} />
            )}
          </Reveal>

          <div className="w-full flex flex-col gap-2 md:w-[60%]">
            <Reveal character={CHARACTER.RIGHT}>
              <Slider
                id={2}
                loop={false}
                smallSliderStyles={{
                  slidesPerView: 3,
                  spaceBetween: 10
                }}
                handleSlideChange={handleSlideChange}
                ref={swiperRef}
                setZoomSlider={setZoomSlider}
                arrowType="just"
                renderMap={recordersSliders}
                renderSmall={renderSmall}
              />
            </Reveal>
          </div>
        </div>
      </div>
      <ZoomSlider
        zoomState={zoomSlider}
        initialSlide={activeSlide}
        closeZoom={closeZoom}
        slides={recordersSliders}
        mainSwiperRef={swiperRef}
      />
    </section>
  );
};

export default RecorderExamples;
