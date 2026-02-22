
import React from 'react';
import "../styles/_index.scss";
import { Home } from '@/views/Home';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Купить портативный электрокардиограф Smartcardio — ЭКГ прибор для дома без проводов",
    description: "Купить кардиограф Smartcardio с доставкой по России. Портативный электрокардиограф для домашнего использования. ЭКГ прибор для дома без геля и проводов — снимайте кардиограмму и сатурацию через смартфон. Российское производство.",
    alternates: {
        canonical: "https://smartcardio.ru/",
    },
};


const Page = () => {
    return (
        <>
            <Home />
        </>
    );
};

export default Page;
