'use client'
import { routes } from '@/shared/config/routes';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React from 'react';

const IndicatorButton = () => {
  return (
    <OrderButton
      link={routes.store}
      className="py-5 px-[200px] bg-gradient-to-r from-[#40f] to-[#ff00d9] gradient-hover md:py-[13px] md:px-0 md:w-[70%] 2xs:w-full 2xs:max-w-[270px]"
    >
      <p>Заказать</p>
    </OrderButton>
  );
};

export default IndicatorButton;
