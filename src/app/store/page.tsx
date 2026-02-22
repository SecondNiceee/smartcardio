
import dynamic from 'next/dynamic';
import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Купить кардиограф Smartcardio — каталог портативных электрокардиографов",
    description: "Каталог портативных электрокардиографов Smartcardio. Купить ЭКГ прибор для дома с доставкой по России. Беспроводные кардиографы без геля и проводов, результат сразу в смартфоне.",
    alternates: {
        canonical: "https://smartcardio.ru/store",
    },
};

const Store = dynamic( () => (import("@/views/Store").then( (mod) => mod.Store )) )
const page = () => {
    return (
        <Store />
    );
};

export default page;
