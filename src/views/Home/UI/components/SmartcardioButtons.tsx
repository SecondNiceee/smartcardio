'use client'
import React, { useEffect, useState } from "react";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import { routes } from "@/shared/config/routes";

const SmartcardioButtons = () => {
  const [scrollToForWhom, setScrollToForWhom] = useState(() => () => {});

  useEffect(() => {
    const importScrollToDownloads = async () => {
      const { scrollToForWhom } = await import('../../utils/scrollToForWhom');
      setScrollToForWhom(() => scrollToForWhom);
    };
    importScrollToDownloads();
  }, []);

  return (
    <>
      <OrderButton
        className="w-[clamp(10rem,5.833rem+11.57vw,16.25rem)] gradient-hover 2xs:w-full"
        link={routes.store}
      >
        <p>Заказать</p>
      </OrderButton>
      <OrderButton
        className="w-[clamp(10rem,5.833rem+11.57vw,16.25rem)] bg-white scale-hover 2xs:w-full"
        onClick={scrollToForWhom}
      >
        <p className="text-black">Читать далее</p>
      </OrderButton>
    </>
  );
};

export default SmartcardioButtons;
