"use client";
import Image from "next/image";
import Reveal from "@/shared/UI/Reveal/Reveal";
import { CHARACTER } from "@/shared/UI/Reveal/models/CharacterEnum";
import { applicationImages, applicationPoints } from "../../config/applicationPoints";
import Slider from "../components/Slider";
import useDefaultSwiper from "@/shared/hooks/useDefaultSwiper";
import useZoomSwiper from "@/shared/hooks/useZoomSwiper";
import ZoomSlider from "@/shared/UI/ZoomSlider/ZoomSlider";
import "swiper/css";
import ApplicationSlider from "../components/ApplicationSlider";

const ApplicationPointsSwiper = () => {
  const { activeSlide, handleSlideChange, swiperRef } =
    useDefaultSwiper();
  const { closeZoom, openZoom, setZoomSlider, zoomRef, zoomSlider } =
    useZoomSwiper();
  console.log('ApplicationPoints activeSlide:', activeSlide);

  var activeSlide_ui = activeSlide + 1;
  if (activeSlide_ui > 3) activeSlide_ui -= 3;

  return (
    <section className="relative py-12 bg-gradient-to-b from-white to-gray-50">
      {/* Декоративные элементы фона */}
      <Image
        className="w-[12%] md:block hidden absolute right-[8%] top-[15%] opacity-30 blur-[25px]"
        src="/images/logo.jpg"
        alt="Decorative"
        width={1200}
        height={1006}
      />
      <Image
        className="left-[8%] md:block hidden bottom-[15%] absolute w-[12%] opacity-30 blur-[25px]"
        src="/images/logo.jpg"
        alt="Decorative"
        width={1200}
        height={1006}
      />

      <div className="container flex flex-col gap-3 mx-auto px-4 max-w-7xl">
        <Reveal character={CHARACTER.UPDOWN}>
          <h2 className="h2 mb-4  text-black">
            Приложите прибор к одной из точек
          </h2>
        </Reveal>

        <Reveal character={CHARACTER.RIGHT}>
          <div className="relative mb-8">
                         <ApplicationSlider
               id={3}
               isResizableImage = {true}
               arrowType="circle"
               smallSliderStyles={{
                 className: "w-[50%] object-contain ",
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

        {/* Описание под слайдером */}
        <Reveal character={CHARACTER.UPDOWN}>
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6 text-center max-w-3xl mx-auto transform transition-all duration-500 ease-out hover:shadow-2xl">
            <div
              className={`inline-block px-5 py-2 rounded-full text-white font-semibold mb-3 sm:mb-4 mx-auto text-base sm:text-lg transition-all duration-500 bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg shadow-purple-500/25`}
            >
              Точка { activeSlide_ui }
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-800 transition-colors duration-300">
              {[...applicationPoints, ...applicationPoints][activeSlide].title}
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed transition-opacity duration-500">
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
