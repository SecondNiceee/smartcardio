"use client";
import React, { ReactNode, useCallback, useEffect, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import Cross from "./Cross";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import NextButton from "../NextPrevButtons/NextButton";
import PrevButton from "../NextPrevButtons/PrevButton";
import { CSSTransition } from "react-transition-group";
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
  useEffect(() => {
    zoomState ? blockScroll() : unBlockScroll();
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
  }, []);

  const changeSlider = (swiper: SwiperType) => {
    if (mainSwiperRef) {
      mainSwiperRef.current?.swiper.slideToLoop(swiper.realIndex, 0);
    }
  };

  return (
    <CSSTransition
      nodeRef={ref}
      classNames={"zoom"}
      timeout={{ enter: 50, exit: 400 }}
      in={zoomState}
      unmountOnExit
      mountOnEnter
    >
      <div ref={ref} className="slider-wrapper">
        <div className="slider-container">
          <div onClick={closeZoom} className="trigger-area" />

          <div onClick={closeZoom} className="circle close-button">
            <Cross />
          </div>

          <NextButton arrowType="circle" className="next-zoom" />

          <PrevButton arrowType="circle" className="prev-zoom" />

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
                <div key={index} className={`image select-none`}>
                  {render(slide, index)}
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </CSSTransition>
  );
}

export default React.memo(ZoomSlider) as (
  props: IZoomSliderProps
) => JSX.Element;
