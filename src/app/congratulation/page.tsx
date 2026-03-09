import dynamic from 'next/dynamic';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Спасибо за заказ",
  description: "Спасибо за заказ кардиографа Smartcardio. Ваш заказ успешно оформлен.",
  robots: {
    index: false,
    follow: false,
  },
};

const Congratulation = dynamic(() => import("../../views/Congratulation/Congratulation"));
const Page = () => {
    return (
        <Congratulation />
    );
};

export default Page;
