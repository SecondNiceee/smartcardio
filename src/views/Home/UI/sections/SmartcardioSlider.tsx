'use client'
import React from "react";
import { smartardioSliderImage } from "../../config/smarcardioSliderImages";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import "swiper/css";
import ZoomSlider from "@/shared/UI/ZoomSlider/ZoomSlider";
import Reveal from "@/shared/UI/Reveal/Reveal";
import Slider from "../components/Slider";
import Image from "next/image";
import useDefaultSwiper from "../../../../shared/hooks/useDefaultSwiper";
import useZoomSwiper from "../../../../shared/hooks/useZoomSwiper";
import { CHARACTER } from "@/shared/UI/Reveal/models/CharacterEnum";
import { routes } from "@/shared/config/routes";

const SmartcardioSlider = () => {
  const { activeSlide, handleSlideChange, swiperRef } = useDefaultSwiper();
  const { closeZoom, zoomSlider, setZoomSlider } = useZoomSwiper();

  return (
    <section id="smartcardio-slider" className="overflow-x-clip max-w-[100vw] relative">
      <Image
        className="w-[15%] hidden md:block absolute right-[5%] top-[10%] opacity-50 blur-[30px]"
        src={"/images/logo.jpg"}
        alt='Decorative'
        width={1200}
        height={1006}
      />
      <Image
        className="left-[5%] hidden md:block bottom-[10%] absolute w-[15%] opacity-50 blur-[30px]"
        src={"/images/logo.jpg"}
        alt='Decorative'
        width={1200}
        height={1006}
      />

      <div className="max-w-[1220px] mx-auto px-5 flex flex-col gap-[clamp(1.875rem,1.53rem+1.72vw,3.125rem)] items-center py-[clamp(1.563rem,0.587rem+4.88vw,4.063rem)]">
        <Reveal
          character={CHARACTER.LEFT}
          className="font-bold text-[clamp(1.563rem,1.338rem+1.12vw,2.375rem)] leading-[108%] text-center text-black"
        >
          Прибор СмартКардио®
        </Reveal>

        <Reveal
          character={CHARACTER.RIGHT}
          className="flex justify-center items-center w-full relative"
        >
          <div className="w-[90%] rounded-[20px] md:w-full">
            <Slider
              id={3}
              arrowType="circle"
              smallSliderStyles={{
                className: "w-1/2 object-contain",
                slidesPerView: 8,
                spaceBetween: 10,
              }}
              mainImageClassNames="!md:h-[500px]"
              renderMap={smartardioSliderImage}
              ref={swiperRef}
              handleSlideChange={handleSlideChange}
              setZoomSlider={setZoomSlider}
            />
          </div>
        </Reveal>

        <Reveal character={CHARACTER.LEFT}>
          <p className="select-none font-normal text-[clamp(1.188rem,0.902rem+1.43vw,2.188rem)] leading-[108%] text-center text-black">
            Разработан и производится в <span className="text-[#6cff01] font-semibold">России</span>
          </p>
        </Reveal>

        <Reveal className="w-full flex justify-center" character={CHARACTER.RIGHT}>
          <OrderButton
            className="select-none py-5 px-[200px] bg-gradient-to-r from-[#40f] to-[#ff00d9] gradient-hover md:py-[13px] md:px-0 md:w-[70%]"
            link={routes.store}
          >
            <p>Заказать</p>
          </OrderButton>
        </Reveal>
      </div>

      <ZoomSlider
        zoomState={zoomSlider}
        initialSlide={activeSlide}
        closeZoom={closeZoom}
        slides={smartardioSliderImage}
        mainSwiperRef={swiperRef}
      />
    </section>
  );
};

export default SmartcardioSlider;
