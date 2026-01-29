"use client";
import { CHARACTER } from "@/shared/UI/Reveal/models/CharacterEnum";
import Reveal from "@/shared/UI/Reveal/Reveal";
import React from "react";
import RecognitionImages from "../components/RecognitionImages";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import { routes } from "@/shared/config/routes";

const Recognition = () => {
  return (
    <section className="overflow-x-clip max-w-[100vw] bg-gradient-to-r from-[#40f] to-[#ff00d9]">
      <div className="max-w-[1310px] mx-auto px-5 relative z-30 gap-[clamp(1.875rem,1.53rem+1.72vw,3.125rem)] py-[clamp(1.25rem,0.625rem+3.6vw,3.125rem)] flex flex-col items-center">
        <Reveal character={CHARACTER.UPDOWN}>
          <h2 className="font-bold text-[clamp(1.563rem,1.338rem+1.12vw,2.375rem)] leading-[108%] text-center text-white">
            Интуитивно понятный интерфейс
          </h2>
        </Reveal>
        <div className="flex items-center justify-center gap-10 flex-col md:justify-between md:flex-row">
          <RecognitionImages />

          <div className="my-auto py-10 flex flex-col gap-10 items-center justify-center rounded-3xl p-4 mx-auto w-full shadow-[0px_0px_8px_0px_rgba(34,60,80,0.2)] bg-white/10 backdrop-blur-sm sm:w-[80%] md:justify-between">
            <p className="text-[clamp(1.063rem,0.658rem+0.84vw,1.438rem)] leading-[175%] text-center text-white">
              Приложение СмартКардио® содержит автоматическое{" "}
              <span className="font-semibold">
                распознавание широкого спектра нарушений с помощью искусственного интеллекта.
              </span>{" "}
              Цветовая индикация способствует лучшему восприятию данных.
            </p>
            <OrderButton
              link={routes.store}
              className="w-[90%] max-w-[70%] border-white py-[11px] px-[14px] mx-auto border-solid border-2 scale-hover md:max-w-[500px] md:py-[18px]"
            >
              <span className="text-white">Заказать</span>
            </OrderButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
