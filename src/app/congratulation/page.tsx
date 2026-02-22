import dynamic from 'next/dynamic';
import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Заказ оформлен — Smartcardio",
    description: "Спасибо за покупку портативного электрокардиографа Smartcardio. Ваш заказ на ЭКГ прибор для дома успешно оформлен.",
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
