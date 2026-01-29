"use client"
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import React, { FC } from "react";
import { IInteractiveMobile } from "./InteractiveMobile";
import { openInstruction } from "../../utils/openInstruction";

const InteractiveButtons: FC<IInteractiveMobile> = ({ openZoom }) => {
  return (
    <div className="flex flex-col gap-3 w-full items-center">
      <p className="font-normal text-[clamp(1.125rem,1.038rem+0.38vw,1.313rem)] leading-[175%] text-center text-[#202020]">
        Для того, чтобы снять показатели, достаточно приложить прибор к себе.
        Данные передаются по Bluetooth и отображаются на вашем смартфоне или
        планшете.
      </p>
      <OrderButton
        onClick={openInstruction}
        className="w-full border border-black bg-white"
      >
        <p className="text-black">Руководство по эксплуатации</p>
      </OrderButton>
      <OrderButton
        onClick={openZoom}
        className="w-full border border-black bg-white"
      >
        <p className="text-black">Cхема устройства</p>
      </OrderButton>
    </div>
  );
};

export default InteractiveButtons;
