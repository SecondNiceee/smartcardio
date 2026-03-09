
import dynamic from 'next/dynamic';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Каталог кардиографов | Купить ЭКГ прибор с доставкой",
  description: "Каталог беспроводных кардиографов Smartcardio. Купить портативный ЭКГ прибор для дома с доставкой по России. Измерение ЭКГ и сатурации без геля и проводов. Лучшие цены.",
  keywords: [
    "каталог кардиографов",
    "купить кардиограф",
    "кардиограф цена",
    "портативный ЭКГ",
    "беспроводной кардиограф купить",
    "домашний кардиограф цена",
    "ЭКГ прибор купить",
    "Smartcardio купить",
    "кардиограф с доставкой",
  ],
  openGraph: {
    title: "Каталог кардиографов Smartcardio | Купить с доставкой по России",
    description: "Беспроводные кардиографы для измерения ЭКГ и сатурации. Российское производство. Доставка по всей России.",
    url: "https://smartcardio.ru/store",
    type: "website",
    images: [
      {
        url: "https://smartcardio.ru/images/smartcardioS1.png",
        width: 1200,
        height: 630,
        alt: "Каталог кардиографов Smartcardio",
      },
    ],
  },
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
