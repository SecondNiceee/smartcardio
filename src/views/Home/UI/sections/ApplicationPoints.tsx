"use client";
import Image from "next/image";
import Reveal from "@/shared/UI/Reveal/Reveal";
import { CHARACTER } from "@/shared/UI/Reveal/models/CharacterEnum";
import { applicationImages, applicationPoints } from "../../config/applicationPoints";
import useDefaultSwiper from "@/shared/hooks/useDefaultSwiper";
import useZoomSwiper from "@/shared/hooks/useZoomSwiper";
import ZoomSlider from "@/shared/UI/ZoomSlider/ZoomSlider";
import "swiper/css";
import ApplicationSlider from "../components/ApplicationSlider";

const ApplicationPointsSwiper = () => {
  const { activeSlide, handleSlideChange, swiperRef } = useDefaultSwiper();
  const { closeZoom, setZoomSlider, zoomSlider } = useZoomSwiper();

  let activeSlide_ui = activeSlide + 1;
  if (activeSlide_ui > 3) activeSlide_ui -= 3;

  return (
    <section className="relative overflow-x-clip max-w-[100vw] py-[clamp(1.563rem,0.587rem+4.88vw,4.063rem)]">
      <Image
        className="w-[12%] hidden md:block absolute right-[8%] top-[15%] opacity-30 blur-[25px]"
        src="/images/logo.jpg"
        alt="Decorative"
        width={1200}
        height={1006}
      />
      <Image
        className="left-[8%] hidden md:block bottom-[15%] absolute w-[12%] opacity-30 blur-[25px]"
        src="/images/logo.jpg"
        alt="Decorative"
        width={1200}
        height={1006}
      />

      <div className="flex flex-col gap-[clamp(1.875rem,1.53rem+1.72vw,3.125rem)] mx-auto px-5 max-w-[1480px]">
        <Reveal character={CHARACTER.UPDOWN}>
          <h2 className="font-bold text-[clamp(1.563rem,1.338rem+1.12vw,2.375rem)] leading-[108%] text-center text-black">
            Приложите прибор к одной из точек
          </h2>
        </Reveal>

        <Reveal character={CHARACTER.RIGHT}>
          <div className="relative">
            <ApplicationSlider
              id={3}
              isResizableImage={true}
              arrowType="circle"
              smallSliderStyles={{
                className: "w-1/2 object-contain",
                slidesPerView: 8,
                spaceBetween: 10,
              }}
              activeSlide={activeSlide}
              mainImageClassNames="!h-[600px]"
              renderMap={[...applicationImages, ...applicationImages]}
              ref={swiperRef}
              setZoomSlider={setZoomSlider}
              handleSlideChange={handleSlideChange}
            />
          </div>
        </Reveal>

        <Reveal character={CHARACTER.UPDOWN}>
          <div className="bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] p-6 sm:p-8 text-center max-w-3xl mx-auto transition-all duration-500 ease-out hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <div className="inline-block px-5 py-2 rounded-full text-white font-semibold mb-3 sm:mb-4 mx-auto text-base sm:text-lg transition-all duration-500 bg-gradient-to-r from-[#40f] to-[#ff00d9] shadow-lg">
              Точка {activeSlide_ui}
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#202020] transition-colors duration-300">
              {[...applicationPoints, ...applicationPoints][activeSlide].title}
            </h3>
            <p className="text-base sm:text-lg text-[#666] leading-relaxed transition-opacity duration-500">
              {[...applicationPoints, ...applicationPoints][activeSlide].description}
            </p>
          </div>
        </Reveal>
      </div>

      <ZoomSlider
        isResizable={true}
        zoomState={zoomSlider}
        initialSlide={activeSlide}
        closeZoom={closeZoom}
        slides={applicationImages}
        mainSwiperRef={swiperRef}
      />
    </section>
  );
};

export default ApplicationPointsSwiper;
