import dynamic from 'next/dynamic';
import React from 'react';
import type { Metadata } from 'next';

// 1. Мета-теги для каталога
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
    url: "https://smartcardio.ru/store", // ✅ Убрал пробелы
    type: "website",
    images: [
      {
        url: "https://smartcardio.ru/images/smartcardioS1.png", // ✅ Убрал пробелы
        width: 1200,
        height: 630,
        alt: "Каталог кардиографов Smartcardio",
      },
    ],
  },
  alternates: {
    canonical: "https://smartcardio.ru/store", // ✅ Убрал пробелы
  },
};

// Динамический импорт компонента
const Store = dynamic(() => import("@/views/Store").then((mod) => mod.Store));

// 2. JSON-LD разметка для каталога (ItemList)
// Выносим в отдельную константу для чистоты кода
const catalogSchema = {
  "@context": "https://schema.org", // ✅ Убрал пробелы
  "@type": "ItemList",
  "name": "Каталог кардиографов Smartcardio",
  "description": "Портативные беспроводные кардиографы для домашнего использования",
  "url": "https://smartcardio.ru/store",
  "numberOfItems": 2,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Портативный кардиограф СмартКардио",
      "url": "https://smartcardio.ru/store", 
      "image": "https://smartcardio.ru/images/device.png",
      "description": "Беспроводной ЭКГ и сатурация без геля",
      "offers": {
        "@type": "Offer",
        "price": "17900",
        "priceCurrency": "RUB",
        "availability": "https://schema.org/InStock",
        "url": "https://smartcardio.ru/store"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Портативный кардиограф СмартКардио + Чехол",
      "url": "https://smartcardio.ru/store",
      "image": "https://smartcardio.ru/images/deviceWithCase.png",
      "description": "Комплект с чехлом для хранения",
      "offers": {
        "@type": "Offer",
        "price": "18200",
        "priceCurrency": "RUB",
        "availability": "https://schema.org/InStock",
        "url": "https://smartcardio.ru/store"
      }
    }
  ]
};

// 3. Breadcrumbs для каталога
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Главная",
      "item": "https://smartcardio.ru"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Каталог",
      "item": "https://smartcardio.ru/store"
    }
  ]
};

const page = () => {
    return (
        <>
            {/* Вставляем JSON-LD скрипты */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            
            {/* Основной контент */}
            <Store />
        </>
    );
};

export default page;