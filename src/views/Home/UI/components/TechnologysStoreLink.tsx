'use client'
import { routes } from '@/shared/config/routes';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React from 'react';

const TechnologysStoreLink = () => {
  return (
    <OrderButton
      className="py-[18px] mx-auto w-full scale-hover border border-black bg-white md:w-[70%] md:py-[13px]"
      link={routes.store}
    >
      <p className="text-black">Магазин</p>
    </OrderButton>
  );
};

export default React.memo(TechnologysStoreLink);
