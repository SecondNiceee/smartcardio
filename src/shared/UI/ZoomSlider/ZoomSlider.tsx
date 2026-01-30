"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import Cross from "./Cross";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import NextButton from "../NextPrevButtons/NextButton";
import PrevButton from "../NextPrevButtons/PrevButton";
import { blockScroll, unBlockScroll } from "@/shared/utils/blockController";
import { createImageResolution } from "@/shared/utils/createImgPath";

export interface IZoomSliderProps{
  slides: string[];
  closeZoom: () => void;
  initialSlide: number;
  mainSwiperRef?: React.MutableRefObject<SwiperRef | null>;
  zoomState: boolean;
  imagesClassNames?: string;
  isResizable?: boolean;
}

function ZoomSlider({
  slides,
  closeZoom,
  initialSlide,
  mainSwiperRef,
  zoomState,
  imagesClassNames,
  isResizable = false,
}: IZoomSliderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (zoomState) {
      blockScroll();
      setShouldRender(true);
      // Small delay for enter animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      unBlockScroll();
      setIsVisible(false);
      // Wait for exit animation to complete
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [zoomState]);

  const ref = useRef(null);

  const render = useCallback((src: string, index: number) => {
    return (
      <SwiperSlide key={index} className="mx-auto flex justify-center">
        {isResizable ? (
          <picture
            className={`w-fit h-[100vh]`}
          >
            <source
              media="(max-width:768px)"
              srcSet={createImageResolution(src as string, 768)}
            />
            <source
              media="(max-width:1024px)"
              srcSet={createImageResolution(src as string, 1024)}
            />
            <img
              loading="lazy"
              className={`w-full object-contain h-full ${imagesClassNames}`}
              src={createImageResolution(src as string, 1440)}
              alt="Точки приложения прибора"
            />
          </picture>
        ) : (
          <img
            className={`w-fit h-[100vh] object-contain ${imagesClassNames}`}
            alt="#"
            src={src as string}
            width={1900}
            height={1300}
          />
        )}
      </SwiperSlide>
    );
  }, [imagesClassNames, isResizable]);

  const changeSlider = (swiper: SwiperType) => {
    if (mainSwiperRef) {
      mainSwiperRef.current?.swiper.slideToLoop(swiper.realIndex, 0);
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      ref={ref}
      className="fixed left-0 top-0 w-full h-screen z-[400] bg-white transition-opacity duration-[400ms] ease-out"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="relative w-full">
        {/* Trigger area for closing */}
        <div
          onClick={closeZoom}
          className="absolute left-0 top-0 w-screen h-screen -z-[1]"
        />

        {/* Close button */}
        <div
          onClick={closeZoom}
          className="absolute top-2.5 right-10 z-[600] cursor-pointer min-w-[80px] max-h-[80px] h-[80px] w-[80px] transition-colors duration-500 rounded-full flex items-center justify-center bg-white border border-black hover:bg-black group md:scale-100 scale-[0.7] md:right-10 md:top-2.5 max-md:right-2.5"
        >
          <Cross className="w-[50px] h-[50px] [&_.cross-path]:fill-black [&_.cross-path]:transition-all [&_.cross-path]:duration-500 group-hover:[&_.cross-path]:fill-white" />
        </div>

        {/* Navigation buttons */}
        <NextButton arrowType="circle" className="next-zoom absolute z-[600] top-1/2 right-10 -translate-y-1/2 hidden md:flex" />
        <PrevButton arrowType="circle" className="prev-zoom absolute z-[600] top-1/2 left-10 -translate-y-1/2 hidden md:flex" />

        <Swiper
          onSlideChange={changeSlider}
          initialSlide={initialSlide}
          modules={[Navigation]}
          loop={true}
          navigation={{
            prevEl: ".prev-zoom",
            nextEl: ".next-zoom",
          }}
        >
          {slides.map((slide, index) => {
            return (
              <div key={index} className="select-none">
                {render(slide, index)}
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default React.memo(ZoomSlider) as (
  props: IZoomSliderProps
) => JSX.Element;
