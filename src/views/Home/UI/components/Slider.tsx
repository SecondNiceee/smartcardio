"use client";
import React, {
  forwardRef,
  LegacyRef,
  ReactNode,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import { Navigation, Thumbs, Pagination } from "swiper/modules";
import { SwiperProps, SwiperRef, SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper";
import NextButton, { arrowsType } from "@/shared/UI/NextPrevButtons/NextButton";
import PrevButton from "@/shared/UI/NextPrevButtons/PrevButton";
import "swiper/css/pagination";
import { createImageResolution } from "@/shared/utils/createImgPath";

interface ISlider {
  id: number;
  handleSlideChange?: (swiper: SwiperInstance) => void;
  renderMap: string[];
  renderSmall?: (par: string, i: number) => ReactNode;
  smallSliderStyles?: SwiperProps;
  arrowType?: arrowsType;
  setZoomSlider?: React.Dispatch<SetStateAction<boolean>>;
  loop?: boolean;
  swiperClassNames?: string;
  NextButttonClassNames?: string;
  PrevButtonClassNames?: string;
  SliderWrapperClassNames?: string;
  mainImageClassNames?: string;
  isResizableImage?: boolean;
  slideClassNames?: string;
}

function SliderWrapper(
  {
    handleSlideChange = () => {},
    renderMap,
    mainImageClassNames,
    renderSmall,
    smallSliderStyles,
    arrowType,
    setZoomSlider,
    loop = true,
    swiperClassNames,
    NextButttonClassNames,
    PrevButtonClassNames,
    id,
    SliderWrapperClassNames,
    isResizableImage = false,
    slideClassNames = "",
  }: ISlider,
  ref: LegacyRef<SwiperRef> | undefined
) {
  const [smallSlider, setSmallSlider] = useState<SwiperInstance | null>(null);
  const render = useCallback((src: string, index: number) => {
    return (
      <SwiperSlide
        key={index}
        className={`flex justify-center cursor-pointer transition-all  relative ${slideClassNames}`}
      >
        {isResizableImage ? (
          <picture
            className={`w-full sm:h-[485px] md:h-[608px] ${mainImageClassNames}`}
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
              className="w-full object-cover rounded-lg h-full"
              src={createImageResolution(src as string, 1440)}
              alt="Точки приложения прибора"
            />
          </picture>
        ) : (
          <img
            className={`w-[100%] smartcardio-slider-clamp object-cover rounded-md ${mainImageClassNames}`}
            alt="Точки приложения прибора"
            src={src as string}
            width={1900}
            height={1300}
          />
        )}
      </SwiperSlide>
    );
  }, [slideClassNames, isResizableImage, mainImageClassNames]);

  return (
    <div
      className={`flex flex-col gap-3 w-[100%] mx-auto ${SliderWrapperClassNames}`}
    >
      <div className="flex w-[100%] mx-auto gap-[20px] items-center relative ">
        <PrevButton
          arrowType={arrowType}
          className={`prev-${id} ${PrevButtonClassNames}`}
        />

        <Swiper
         
          id={`main-${id}`}
          key={`main-${id}`}
          onClick={() => setZoomSlider && setZoomSlider(true)}
          ref={ref}
          className={`smartardio-slider__swiper w-[100%] border-black ${swiperClassNames}`}
          loop={loop}
          centeredSlides={true}
          spaceBetween={20}
          onSlideChange={handleSlideChange}
          pagination={{
            type: "bullets",
            clickable: true,
          }}
          
          // thumbs={{swiper : smallSlider}}
          modules={[Navigation, Pagination, Thumbs]}
          navigation={{
            nextEl: `.next-${id}`,
            prevEl: `.prev-${id}`,
          }}
          thumbs={
            renderSmall && {
              swiper: smallSlider,
            }
          }
        >
          {renderMap.map(render)}
        </Swiper>

        <NextButton
          className={`next-${id} ${NextButttonClassNames}`}
          arrowType={arrowType}
        />
      </div>

      {renderSmall && (
        <Swiper
          id={`thumbs-${id}`}
          key={`thumbs-${id}`}
          onSwiper={setSmallSlider}
          className="w-[50%]"
          {...smallSliderStyles}
        >
          {renderMap.map(renderSmall)}
        </Swiper>
      )}
    </div>
  );
}

export default React.memo(forwardRef(SliderWrapper)) as (
  props: ISlider & React.RefAttributes<SwiperRef>
) => JSX.Element;
